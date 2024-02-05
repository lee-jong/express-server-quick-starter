import logger from "../helper/logger";
class Global {
  //
  public static rtspInfo: string;
  public static rtspClients: number = 0;

  //
  public static logger = logger;

  // DB 화
  public static todoList = [{ idx: 1, title: "제목" }];
}
export default Global;
