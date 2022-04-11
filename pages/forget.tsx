import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
const Forget: NextPage = () => {
  const onForget = useCallback(({ email }: { email: Email }) => {
    console.log(email);
  }, []);

  return (
    <GreyContainer>
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
        <Form onSubmit={onForget}>
          <div className="space-y-5">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Recuperar cuenta
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

            <Button label="Iniciar sesión" fullWidth type="submit" />
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

export default Forget;
