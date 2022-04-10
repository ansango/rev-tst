import bcrypt from "bcryptjs";
import { type Db, ObjectId } from "mongodb";
import { normalizeEmail } from "@/lib-utils/validations";
import { Account, Address, User } from "models/user/user";

const dbProjectionUsers = (prefix = "") => {
  return {
    [`${prefix}password`]: 0,
    [`${prefix}email`]: 0,
    [`${prefix}emailVerified`]: 0,
  };
};

const findUserWithEmailAndPassword = async (
  db: Db,
  email: string,
  password: string
) => {
  const user = await db
    .collection("users")
    .findOne({ email: normalizeEmail(email) });

  if (user && (await bcrypt.compare(password, user.password))) {
    return { ...user, password: undefined }; // filtered out password
  }
  return null;
};

const findUserForAuth = async (db: Db, userId: string) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } })
    .then((user) => user || null);
};

const findUserById = async (db: Db, userId: string) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
};

const findUserByUsername = async (db: Db, username: string) => {
  return db
    .collection("users")
    .findOne({ username }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
};

const findUserByEmail = async (db: Db, email: string) => {
  return db
    .collection("users")
    .findOne(
      { email: normalizeEmail(email) },
      { projection: dbProjectionUsers() }
    )
    .then((user) => user || null);
};

const updateUserAccountDataById = async (
  db: Db,
  userId: string,
  { email, username }: { email: string; username: string }
) => {
  return db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { email, username } });
};

const insertUser = async (
  db: Db,
  {
    email,
    originalPassword,
    username,
  }: {
    email: string;
    originalPassword: string;
    username: string;
  }
) => {
  const password = await bcrypt.hash(originalPassword, 10);

  const address: Address = {
    address: "",
    city: "",
    country: "",
    zip: "",
  };

  const account: Account = {
    _id: new ObjectId(),
    about: "",
    avatar: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthday: null,
    address,
    recipes: [],
    collections: [],
    favorites: [],
    chat: [],
    followers: [],
    following: [],
    preferences: [],
  };
  await db.collection("accounts").insertOne({ ...account });

  const user: User = {
    _id: new ObjectId(),
    account: account._id,
    username,
    email,
    emailVerified: false,
    password,

    created: new Date(),
  };

  await db.collection("users").insertOne({ ...user });

  return { ...user };
};

export {
  findUserWithEmailAndPassword,
  findUserForAuth,
  findUserById,
  findUserByUsername,
  findUserByEmail,
  updateUserAccountDataById,
  insertUser,
};
