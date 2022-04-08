import Ajv from "ajv";
import { UserSchema } from ".";

type Schema = {
  type: "object";
  properties: {
    [key: string]: {
      type: string;
      minLength?: number;
      maxLength?: number;
    };
  };
  required: string[];
  additionalProperties: boolean;
};

const validateBody = (schema: Schema) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  return (req: any, res: any, next: any) => {
    const valid = validate(req.body);
    if (valid) {
      next();
    } else {
      return res.status(400).json({
        status: "fail",
        message: validate.errors![0].message,
      });
    }
  };
};

// TODO: return a promise with objects

const signUpValidation = () => {
  const { username, password, email } = UserSchema;
  return validateBody({
    type: "object",
    properties: {
      username,
      password,
      email,
    },
    required: ["username", "password", "email"],
    additionalProperties: false,
  });
};

const updateUserValidation = () => {
  const { username, name, bio } = UserSchema;
  return validateBody({
    type: "object",
    properties: {
      username,
      name,
      bio,
    },
    required: ["username", "name", "bio"],
    additionalProperties: false,
  });
};

export { signUpValidation, updateUserValidation };
