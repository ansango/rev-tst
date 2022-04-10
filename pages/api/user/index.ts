import { findUserByUsername } from "@/lib-api/db/user";
import { auth, database } from "@/lib-api/middlewares";

import { options } from "@/lib-api/nc";
import { updateUserValidation } from "@/lib-api/schemas/validations";
import { slug } from "@/lib-utils/slug";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ user: null });
  return res.json({ user: req.user });
});

handler.patch(updateUserValidation(), async (req, res) => {
  return res.json({
    data: req.body,
  });
});

export default handler;
