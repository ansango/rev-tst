import { useCurrentAccount } from "@/lib-client/hooks/account";
import { useCurrentUser } from "@/lib-client/hooks/user";
import Button from "components/common/Button/Button/Button";
import { Form, Input, Date, TextArea } from "components/common/Forms";
import { Account, User } from "models/user/user";
import { NextPage } from "next";
import React from "react";

type AccountDataForm = {
  username: string;
  email: string;
  about: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthday: string;
  address: string;
  city: string;
  country: string;
  zip: string;
};

const DataAccountForm = () => {
  const { data: { user } = {} } = useCurrentUser();
  const { data: { account } = {} } = useCurrentAccount();
  const onSubmit = ({
    address,
    birthday,
    city,
    country,
    email,
    firstName,
    lastName,
    phone,
    username,
    zip,
    about,
  }: AccountDataForm) => {
    const userData: User | null = user
      ? {
          ...user,
          username,
          email,
        }
      : null;
    const accountData: Account | null = account
      ? {
          ...account,
          about,
          firstName,
          lastName,
          phone,
          birthday,
          address: { ...account.address, address, city, country, zip },
        }
      : null;
    console.log({ userData, accountData });
  };
  return (
    <Form onSubmit={onSubmit}>
      <div>
        <Input
          type="text"
          name="username"
          label="Nombre de usuario"
          {...(user && { defaultValue: user.username })}
        />

        <Input
          type="text"
          name="email"
          label="Correo electrónico"
          {...(user && { defaultValue: user.email })}
        />
        <TextArea name="about" label="Biografía" />
        <Input
          type="text"
          name="firstName"
          label="Nombre"
          {...(account && { defaultValue: account.firstName })}
        />

        <Input
          type="text"
          name="lastName"
          label="Apellido"
          {...(account && { defaultValue: account.lastName })}
        />

        <Input
          type="tel"
          name="phone"
          label="Teléfono"
          {...(account && { defaultValue: account.phone })}
        />

        <Date
          type="date"
          name="birthday"
          label="Fecha de nacimiento"
          {...(account && { defaultValue: account.birthday })}
        />

        <Input
          type="text"
          name="address"
          label="Dirección"
          {...(account && { defaultValue: account.address.address })}
        />
        <Input
          type="text"
          name="city"
          label="Ciudad"
          {...(account && { defaultValue: account.address.city })}
        />
        <Input
          type="text"
          name="country"
          label="País"
          {...(account && { defaultValue: account.address.country })}
        />
        <Input
          type="text"
          name="zip"
          label="Código postal"
          {...(account && { defaultValue: account.address.zip })}
        />
        <Button type="submit" label="Guardar" />
      </div>
    </Form>
  );
};

const Settings: NextPage = () => {
  return (
    <div>
      <DataAccountForm />
    </div>
  );
};

export default Settings;
