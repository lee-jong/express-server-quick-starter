import global from "../util/global";

const retryTime = 1000 * 5;
const reconTime = 1000 * 5;

class RTSP {
  constructor() {}
  IP: string = process.env.host ?? "";
  stream: any = undefined;
  onRetry: boolean = false;
  retryTimer: NodeJS.Timeout | undefined = undefined;
  reconTimer: NodeJS.Timeout | undefined = undefined;

  init = () => {
    try {
      const Stream = require("node-rtsp-stream");
      const ffmpegPath = require("ffmpeg-static");
      const streamUrl = "rtsp://210.99.70.120:1935/live/cctv007.stream";

      this.stream = new Stream({
        name: "원격관람프로그램",
        streamUrl,
        wsPort: 9999,
        ffmpegPath,
        ffmpegOptions: {
          "-stats": "",
        },
      });
      this.stream.on("rtsp_socket_clients", (data: number) => {
        global.rtspClients = data;
      });
      this.stream.on("data", (data: any) => {
        console.log("check me!", data);
      });
      this.stream.on("exitWithError", () => {
        this.retry();
      });

      this.stream.mpeg1Muxer.on("ffmpegStderr", (data: any) => {
        global.rtspInfo = data.toString();
      });
      this.stream.mpeg1Muxer.on("mpeg1data", (data: any) => {
        this.clearTimer("reconTimer");
        this.reconTimer = setTimeout(() => {
          if (this.stream) {
            this.retry();
          }
        }, reconTime);
      });
    } catch (e) {
      console.log("rtsp stream init error", e);
    }
  };

  retry = () => {
    try {
      if (this.onRetry) return;
      if (!this.stream) return; // 요청상태가 늦은 경우 - IP 변경이 된 후, stream, socekt 이 끊긴 상태에서도 데이터가 오는 것을 확인하기 위해
      this.stop();
      if (this.IP !== process.env.host) return;
      this.onRetry = true;
      this.stream = undefined;
      this.retryTimer = setTimeout(() => {
        this.init();
        this.onRetry = false;
        this.clearTimer("retryTimer");
      }, retryTime);
    } catch (e) {
      console.log("rtsp stream retry error", e);
    }
  };

  clearTimer = (data: "retryTimer" | "reconTimer") => {
    clearTimeout(this[data]);
    this[data] = undefined;
  };

  stop = () => {
    if (!this.stream) return;
    try {
      this.stream.stop();
      this.stream = undefined;
    } catch (e) {
      console.log("rtsp stream stop error", e);
    }
  };
}

export default new RTSP();
