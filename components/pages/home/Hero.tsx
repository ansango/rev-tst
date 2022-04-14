import { FC } from "react";
import Image from "next/image";
import imgHero from "public/Hero.avif";
import { Form, Input } from "components/common/Forms";
import Button from "components/common/Button/Button/Button";
import { useRouter } from "next/router";

const Hero: FC = () => {
  const { replace } = useRouter();
  return (
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
            <Form
              onSubmit={({ search }) => replace(`/recipes?search=${search}`)}
            >
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
  );
};

export default Hero;
