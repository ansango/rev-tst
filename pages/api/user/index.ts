import auth from "@/lib-api/middlewares/auth";
import { database } from "@/lib-api/middlewares/database";
import { options } from "@/lib-api/nc";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});

export default handler;
