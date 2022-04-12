import Link from "next/link";

const BadLink = () => {
  return (
    <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
      <div className="space-y-5">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Enlace invalido o expirado
        </h5>
        <p>
          El enlace que has utilizado para recuperar tu contraseña ha expirado o
          no es valido. Cierra esta ventana y vuelve a intentarlo.
        </p>

        <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
          <Link href="/signin">
            <a className="text-blue-700 hover:underline dark:text-blue-500 ml-1">
              Inicia sesión
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BadLink;
