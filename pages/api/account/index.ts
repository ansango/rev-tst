import { findAccountByUserId } from "@/lib-api/db/account";
import { auth, database } from "@/lib-api/middlewares";
import { options } from "@/lib-api/nc";
import {
  updateAccountValidation,
  // updateAddressValidation,
} from "@/lib-api/schemas/validations";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ account: null });
  const account = await findAccountByUserId(req.db, req.user.account);
  return res.json({ account });
});

handler.patch(
  updateAccountValidation(),
  // updateAddressValidation(),
  async (req, res) => {
    return res.json({
      data: req.body,
    });
  }
);

export default handler;
