import { Db, ObjectId } from "mongodb";
import { nanoid } from "nanoid";

type tokenType = "passwordReset" | "emailVerification";

const createToken = (
  db: Db,
  {
    creatorId,
    expireAt,
    type,
  }: { creatorId: UserId | ObjectId; type: tokenType; expireAt: Date }
) => {
  const token = {
    _id: new ObjectId(nanoid(32)),
    creatorId,
    type,
    expireAt,
  };
  return db
    .collection("tokens")
    .insertOne(token)
    .then(() => token);
};

const findTokenByIdAndType = (db: Db, tokenId: TokenId, type: tokenType) => {
  return db.collection("tokens").findOne({ _id: new ObjectId(tokenId), type });
};

const findAndDeleteTokenByIdAndType = (
  db: Db,
  tokenId: TokenId,
  type: tokenType
) => {
  return db
    .collection("tokens")
    .findOneAndDelete({ _id: new ObjectId(tokenId), type })
    .then(({ value }) => value);
};

export {
  createToken,
  findTokenByIdAndType,
  findAndDeleteTokenByIdAndType,
  type tokenType,
};
