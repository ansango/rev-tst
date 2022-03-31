import Ajv from "ajv";
import normalizeEmail from "validator/lib/normalizeEmail";
import isEmail from "validator/lib/isEmail";

const validateBody = (schema: any) => {
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

export { normalizeEmail, isEmail, validateBody };
