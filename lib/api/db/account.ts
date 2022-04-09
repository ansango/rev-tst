import { type Db, ObjectId } from "mongodb";

const findAccountByUserId = (db: Db, accountId: string) => {
  return db
    .collection("accounts")
    .findOne({ _id: new ObjectId(accountId) })
    .then((account) => account || null);
};

export { findAccountByUserId };
