import { Chat } from "models/chat/chat";

type Follower = {
  userId: UserId;
  username: Username;
};

type User = {
  _id: UserId;
  account: AccountId;
  recipes: RecipeId[];
  collections: CollectionId[];
  favorites: RecipeId[];
  chat: Chat[];
  followers: Follower[];
  following: Follower[];
  preferences: CategoryId;
  created: Date;
};

export { type User };
