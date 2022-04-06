const UserSchema = {
  username: { type: "string", minLength: 4, maxLength: 20 },
  name: { type: "string", minLength: 1, maxLength: 50 },
  password: { type: "string", minLength: 8 },
  email: { type: "string", minLength: 1 },
  bio: { type: "string", minLength: 0, maxLength: 160 },
};

const PostSchema = {
  content: { type: "string", minLength: 1, maxLength: 280 },
};
const CommentSchema = {
  content: { type: "string", minLength: 1, maxLength: 280 },
};

export { UserSchema, PostSchema, CommentSchema };
