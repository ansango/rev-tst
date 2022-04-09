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
  const { user } = req;
  if (!user) {
    req.status(401).end();
    return;
  }

  let username;
  if (req.body.username) {
    username = slug(req.body.username);
    if (
      username !== req.user.username &&
      (await findUserByUsername(req.db, username))
    ) {
      req.status(403).json({
        error: { message: "El nombre de usuario ya está en uso" },
      });
      return;
    }
  }
});

export default handler;
