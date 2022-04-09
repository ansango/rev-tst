const AddressSchema = {
  address: {
    type: "string",
    minLength: 1,
    maxLength: 255,
  },
  city: {
    type: "string",
    minLength: 1,
    maxLength: 255,
  },
  country: {
    type: "string",
    minLength: 1,
    maxLength: 255,
  },
  zip: {
    type: "string",
    minLength: 1,
    maxLength: 255,
  },
};

const AccountSchema = {
  about: { type: "string", minLength: 1 },
  avatar: { type: "string", minLength: 1 },
  firstName: { type: "string", minLength: 1 },
  lastName: { type: "string", minLength: 1 },
  phone: { type: "string", minLength: 1 },
  birthday: { type: "string", minLength: 1 },
};

const UserSchema = {
  username: { type: "string", minLength: 4, maxLength: 20 },
  password: { type: "string", minLength: 8 },
  email: { type: "string", minLength: 1 },
};

const PostSchema = {
  content: { type: "string", minLength: 1, maxLength: 280 },
};
const CommentSchema = {
  content: { type: "string", minLength: 1, maxLength: 280 },
};

export { UserSchema, AccountSchema, AddressSchema, PostSchema, CommentSchema };
