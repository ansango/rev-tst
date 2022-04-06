import auth from "@/lib-api/middlewares/auth";
import { database } from "@/lib-api/middlewares/database";
import { options } from "@/lib-api/nc";
import { updateUserValidation } from "@/lib-api/schemas/validations";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});

handler.patch(updateUserValidation(), async (req, res) => {
  const { user } = req;
  const { name, username, bio } = req.body;
  if (!user) req.status(401).end();
  
  if (username) { 

  }
  
});

export default handler;
