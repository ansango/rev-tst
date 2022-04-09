import { Blender } from "models/blender";

type Account = {
  _id: AccountId;
  username: Username;
  about: Content;
  email: Email;
  password: Password;
  avatar: Url;
  firstName: FirstName;
  lastName: LastName;
  phone: Phone;
  birthday: Birthday;
  address: Address;
  blenders: BlenderId[];
};

type Address = {
  address: string;
  city: City;
  country: Country;
  zip: Zip;
};

export { type Account };
