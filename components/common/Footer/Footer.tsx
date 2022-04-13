import Link from "next/link";
import Logo from "../Logo/Logo";
import { legalRoutes, mainRoutes } from "./routes";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="p-4 bg-white text-gray-600 space-y-12 text-sm">
      <div className="lg:container mx-auto">
        <div className="space-y-12 grid md:grid-cols-3 md:gap-6">
          <div className="space-y-6">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <p>
              Robocooker, la comunidad que te permite crear y compartir recetas
              para tu robot de cocina favorito. Cocina, comparte y disfruta!
            </p>
            <SocialIcons />
          </div>
          <div className="space-y-8 md:col-span-2 md:space-y-0 md:grid md:grid-cols-3 md:gap-3">
            <div className="space-y-4">
              <p className="uppercase text-sm font-semibold">Robocooker</p>
              <ul className="space-y-4">
                {mainRoutes.map(({ name, path }) => (
                  <li key={path}>
                    <Link href={path}>
                      <a className="hover:underline">{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="uppercase text-sm font-semibold">Legal</p>
              <ul className="space-y-4">
                {legalRoutes.map(({ name, path }) => (
                  <li key={path}>
                    <Link href={path}>
                      <a className="hover:underline">{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="uppercase text-sm font-semibold">Soporte</p>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact">
                    <a className="hover:underline">Contacto</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors">
                    <a className="hover:underline">Patrocinadores</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 Robocooker. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
