export default {
  host: "localhost",
  user: process.env.DATA_BASE_ID,
  password: process.env.DATA_BASE_PW,
  database: "todo",
  port: 5432,
  max: 5,
  connectionTimeoutMillis: 30000,
};
