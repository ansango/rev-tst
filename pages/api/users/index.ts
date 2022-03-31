import { ValidateProps } from "@/lib-api/constants";
import { slug } from "@/lib-utils/slug";
import { validateBody, isEmail, normalizeEmail } from "@/lib-utils/validations";
import { auth, database } from "@/lib-api/middlewares";
import {
  findUserByEmail,
  findUserByUsername,
  insertUser,
} from "@/lib-api/db/user";



import nc from "next-connect";

const { user: validateUser } = ValidateProps;

const handler = nc<typeof ValidateProps>();

handler.use(database);

handler.post(
  validateBody({
    type: "object",
    properties: {
      username: validateUser.username,
      name: validateUser.name,
      password: validateUser.password,
      email: validateUser.email,
    },
    required: ["username", "name", "password", "email"],
    additionalProperties: false,
  }),
  ...auth,
  async (req, res) => {
    let { username, name, email, password } = req.body;
    username = slug(req.body.username);
    email = normalizeEmail(req.body.email);
    if (!isEmail(email)) {
      res
        .status(400)
        .json({ error: { message: "The email you entered is invalid." } });
      return;
    }
    if (await findUserByEmail(req.db, email)) {
      res
        .status(403)
        .json({ error: { message: "The email has already been used." } });
      return;
    }
    if (await findUserByUsername(req.db, username)) {
      res
        .status(403)
        .json({ error: { message: "The username has already been taken." } });
      return;
    }
    const user = await insertUser(req.db, {
      email,
      originalPassword: password,
      bio: "",
      name,
      username,
    });
    req.logIn(user, (err: any) => {
      if (err) {
        throw err;
      }
      res.status(201).json({
        user,
      });
    });
  }
);

export default handler;
