import logger from "../helper/logger";
class Global {
  //
  public static rtspInfo: string;
  public static rtspClients: number = 0;

  //
  public static logger = logger;

  // DB 화
  public static todoList = [
    { idx: 1, title: "제목" },
    { idx: 2, title: "제목" },
  ];

  public static togetherTodoList: {
    [key: number]: {
      title: string;
      total: number;
      users: Array<{ name: string; success: number }>;
    };
  } = {
    1: {
      title: "다이어트",
      total: 30,
      users: [
        { name: "one", success: 10 },
        { name: "two", success: 15 },
        { name: "three", success: 8 },
      ],
    },
    2: {
      title: "다이어트",
      total: 30,
      users: [
        { name: "one", success: 5 },
        { name: "two", success: 10 },
        { name: "three", success: 18 },
      ],
    },
  };
}
export default Global;
