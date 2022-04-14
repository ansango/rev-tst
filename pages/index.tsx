import type { NextPage } from "next";
import BlockContainer from "components/common/Container/BlockContainer";

import { useAppSelector } from "@/lib-client/store/hooks";
import { selectUser } from "@/lib-client/store/features/user/userSlice";
import { selectAccount } from "@/lib-client/store/features/account/accountSlice";
import GreyContainer from "components/common/Container/GreyContainer";
import Cards from "components/skeletons/Cards";
import Image from "next/image";
import imgHero from "public/Hero.avif";
import { Form, Input } from "components/common/Forms";
import Button from "components/common/Button/Button/Button";
const Home: NextPage = () => {
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const recipes = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: `Recipe ${i}`,
    description: `Description ${i}`,
    image: "https://picsum.photos/200/300",
    ingredients: [
      {
        id: i,
        name: `Ingredient ${i}`,
        amount: `Amount ${i}`,
        unit: `Unit ${i}`,
      },
    ],
  }));

  return (
    <div>
      <div className="relative h-[30rem] md:h-[35rem] max-w-[120rem] mx-auto">
        <Image
          src={imgHero}
          priority
          alt="hero"
          layout="fill"
          className="object-center object-cover pointer-events-none"
        />
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="text-center w-full text-white p-5 space-y-5">
            <h1 className="text-5xl font-extrabold sm:text-5xl xl:text-6xl">
              ¿Que quieres comer hoy?
            </h1>
            <p className="text-lg md:text-xl">
              Miles de recetas para tu robot de cocina
            </p>
            <div>
              <Form onSubmit={() => {}}>
                <div className="max-w-sm px-5 mx-auto md:flex md:items-center md:space-x-5">
                  <Input
                    name="search"
                    type="text"
                    placeholder="Introduce una receta"
                    icon
                    iconName="SearchIcon"
                    iconKind="solid"
                  />

                  <div className="mb-3">
                    <Button type="submit" label="Buscar" fullWidth />
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <GreyContainer>
        <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <Cards length={9} />
        </div>
      </GreyContainer>
    </div>
  );
};

export default Home;
