import { Chat } from "models/chat/chat";

type Follower = {
  userId: UserId;
  username: Username;
};

type User = {
  _id: UserId;
  email: Email;
  emailVerified: boolean;
  username: Username;
  password: Password;
  account: Account;
  recipes: RecipeId[];
  collections: CollectionId[];
  favorites: RecipeId[];
  chat: Chat[];
  followers: Follower[];
  following: Follower[];
  preferences: CategoryId[];
  created: Date;
};

type Account = {
  about: Content;
  avatar: Url | null;
  firstName: FirstName;
  lastName: LastName;
  phone: Phone;
  birthday: Birthday | null;
  address: Address;
  blenders: BlenderId[];
};

type Address = {
  address: string;
  city: City;
  country: Country;
  zip: Zip;
};

export { type User, type Account, type Address, type Follower };
