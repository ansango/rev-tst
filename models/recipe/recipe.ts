import { Blender } from "models/blender";

type Recipe = {
  _id: RecipeId;
  name: Name;
  description: Content;
  img: Url;
  categories: Category[];
  servings: Servings;
  duration: Duration;
  blender: Blender;
  ingredients: Ingredient[];
  steps: Step[];
  likes: UserId[];
  comments: CommentId[];
  created: Date;
};

type Step = {
  name: Name;
  position: Position;
};

type Ingredient = {
  name: Name;
  unit: Unit;
  measure: Measure;
};

type Category = {
  _id: CategoryId;
  name: Name;
  description: Content;
  img: Url;
};

export { type Recipe };
