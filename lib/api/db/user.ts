import bcrypt from "bcryptjs";
import { type Db, ObjectId } from "mongodb";
import { normalizeEmail } from "@/lib-utils/validations";
import { Account, User } from "models/user/user";

const dbProjectionUsers = (prefix = "") => {
  return {
    [`${prefix}password`]: 0,
    [`${prefix}email`]: 0,
    [`${prefix}emailVerified`]: 0,
  };
};

const findUserForAuth = async (db: Db, userId: string) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } })
    .then((user) => user || null);
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
  const account: Account = {
    about: "",
    avatar: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthday: null,
    address: {
      address: "",
      city: "",
      country: "",
      zip: "",
    },
    blenders: [],
  };
  const user: User = {
    _id: new ObjectId(),
    username,
    email,
    emailVerified: false,
    password,
    account,
    recipes: [],
    collections: [],
    favorites: [],
    chat: [],
    followers: [],
    following: [],
    preferences: [],
    created: new Date(),
  };

  await db.collection("users").insertOne({ ...user });

  return { ...user };
};

export {
  findUserForAuth,
  findUserWithEmailAndPassword,
  findUserById,
  findUserByUsername,
  findUserByEmail,
  insertUser,
};
