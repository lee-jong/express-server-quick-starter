import logger from "../helper/logger";
class Global {
  //
  public static rtspInfo: string;
  public static rtspClients: number = 0;

  //
  public static logger = logger;
}
export default Global;
