import moment from "moment";
import { createLogger, transports, format } from "winston";

const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} - [${level}]: ${message}`;
});
const filename = `./logs/${moment().format("YYYY-MM-DD")}.log`;

/**
 * @Level
 * error : 0 / warn: 1 / info: 2 / verbose: 3 / debug: 4 / silly: 5
 */
const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      level: "error",
      filename,
    }), // error log 파일을 만든다.
    new transports.File({ filename }), // 모든 타입의 log를 찍는다.
  ],
  format: combine(timestamp(), myFormat),
});

export default logger;
