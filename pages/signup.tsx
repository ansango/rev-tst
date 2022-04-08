import fetcher from "@/lib-client/fetcher";
import { useCurrentUser } from "@/lib-client/user/hooks";
import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const SignUp: NextPage = () => {
  const { data: { user } = {}, mutate, isValidating, error } = useCurrentUser();
  const { replace } = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) replace(`/user/settings/${user.username}`);
  }, [user, replace, isValidating]);
  const onSignUp = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await fetcher("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "anibalsantosgo@gmail.com",
            name: "Anibal Santos",
            password: "12345678",
            username: "ansango",
          }),
        });
        mutate({ user: response.user }, false);
      } catch (e: any) {
        console.error(e);
      }
    },
    [mutate]
  );
  return (
    <GreyContainer>
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Form onSubmit={(data) => console.log(data)}>
          <div className="space-y-5">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Crea una cuenta
            </h5>
            <Input
              name="email"
              label="Tu correo"
              type="email"
              options={{
                required: { value: true, message: "Introduce un email" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Introduce un email valido",
                },
              }}
            />
            <Input
              name="username"
              label="Nombre de usuario"
              type="text"
              options={{
                required: {
                  value: true,
                  message: "Introduce un nombre de usuario",
                },
              }}
            />
            <Input
              name="password"
              label="Contraseña"
              type="password"
              options={{
                required: { value: true, message: "Introduce una contraseña" },
              }}
            />
            <Button label="Crear cuenta" fullWidth type="submit" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
              ¿Ya tienes una cuenta?
              <Link href="/signin">
                <a className="text-blue-700 hover:underline dark:text-blue-500 ml-1">
                  Inicia sesión
                </a>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </GreyContainer>
  );
};

export default SignUp;
