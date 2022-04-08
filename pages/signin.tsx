import {
  onSignInService,
  onSignInDataService,
} from "@/lib-client/services/auth";

import { useCurrentUser } from "@/lib-client/user/hooks";
import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const SignIn: NextPage = () => {
  const { data: { user } = {}, mutate, isValidating, error } = useCurrentUser();
  const router = useRouter();
  useEffect(() => {
    if (isValidating) return;
    if (user) router.replace("/dashboard/settings/");
  }, [user, router, isValidating]);
  const onSignIn = useCallback(
    async ({ email, password }: onSignInDataService) => {
      try {
        const response = await onSignInService({ email, password });
        mutate({ user: response }, false);
      } catch (e: any) {
        console.error(e);
      }
    },
    [mutate]
  );
  return (
    <GreyContainer>
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <Form onSubmit={onSignIn}>
          <div className="space-y-5">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Inicia sesión
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
              name="password"
              label="Contraseña"
              type="password"
              options={{
                required: { value: true, message: "Introduce tu contraseña" },
              }}
            />
            <p>
              <Link href="/signup">
                <a className="text-blue-700 hover:underline dark:text-blue-500 text-sm">
                  ¿Olvidaste tu contraseña?
                </a>
              </Link>
            </p>
            <Button label="Iniciar sesión" fullWidth type="submit" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
              ¿No tienes cuenta?
              <Link href="/signup">
                <a className="text-blue-700 hover:underline dark:text-blue-500 ml-1">
                  Crear cuenta
                </a>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </GreyContainer>
  );
};

export default SignIn;
