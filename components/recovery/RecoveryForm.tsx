import { resetPassword } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch } from "@/lib-client/store/hooks";
import Button from "components/common/Button/Button/Button";
import { Form, Input } from "components/common/Forms";
import Link from "next/link";
import { FC, useCallback } from "react";

const RecoveryForm: FC<{ tokenId: TokenId }> = ({ tokenId }) => {
  const dispatch = useAppDispatch();
  const onRecovery = useCallback(
    ({ newPassword }: { newPassword: Password }) => {
      dispatch(resetPassword({ tokenId, newPassword }));
    },
    [dispatch, tokenId]
  );
  return (
    <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
      <Form onSubmit={onRecovery}>
        <div className="space-y-5">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Resetear contraseña
          </h5>
          <Input
            name="newPassword"
            label="Nueva contraseña"
            type="password"
            options={{
              required: { value: true, message: "Introduce una contraseña" },
              minLength: {
                value: 8,
                message: "Tu contraseña tiene que tener al menos 8 caracteres",
              },
            }}
          />

          <Button label="Iniciar sesión" fullWidth type="submit" />

          <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
            <Link href="/signin">
              <a className="text-blue-700 hover:underline dark:text-blue-500 ml-1">
                Inicia sesión
              </a>
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RecoveryForm;
