import epxress from "express";
const router = epxress.Router();

router.route("/list").get((req, res) => {
  const data = {
    list: [{ title: "hi", description: "----" }],
  };
  return res.json({
    status: 200,
    data,
  });
});

export default router;
