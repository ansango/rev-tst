import { createToken, findAndDeleteTokenByIdAndType } from "@/lib-api/db/token";
import { findUserByEmail } from "@/lib-api/db/user";
import { CONFIG as MAIL_CONFIG, sendMail } from "@/lib-api/mail";
import rawTemplate from "@/lib-api/mail/rawTemplate";
import { database } from "@/lib-api/middlewares";
import { options } from "@/lib-api/nc";

import nc from "next-connect";
import normalizeEmail from "validator/lib/normalizeEmail";

const handler = nc(options);
handler.use(database);

handler.post(async (req, res) => {
  const email = normalizeEmail(req.body.email) || "";
  const user = await findUserByEmail(req.db, email);
  if (!user) return res.status(404).json({ error: "User not found" });
  const token = await createToken(req.db, {
    creatorId: user._id.toString(),
    type: "passwordReset",
    expireAt: new Date(Date.now() + 1000 * 60 * 20),
  });
  await sendMail({
    to: email,
    from: MAIL_CONFIG.from,
    subject: "[Robocooker] Cambia tu contraseña",
    html: rawTemplate({
      tokenId: token._id.toString(),
      username: user.username,
    }),
  });
  res.status(204).end();
});

handler.put(async (req, res) => {
  const deletedToken = await findAndDeleteTokenByIdAndType(
    req.db,
    req.body.token,
    "passwordReset"
  );
  if (!deletedToken) {
    res.status(403).end();
    return;
  }
    
//   await UNSAFE_updateUserPassword(
//     req.db,
//     deletedToken.creatorId,
//     req.body.password
//   );
  res.status(204).end();
});

export default handler;
