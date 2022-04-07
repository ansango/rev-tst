import Icon from "components/common/Icons/Icon/Icon";
import * as SolidIcons from "@heroicons/react/solid";

type props = {
  path: string;
  label: string;
  icon: keyof typeof SolidIcons;
};
const routes: props[] = [
  {
    path: "/dashboard/settings",
    label: "Ajustes",
    icon: "CogIcon",
  },
  {
    path: "/dashboard/collections",
    label: "Colecciones",
    icon: "BookmarkIcon",
  },
  {
    path: "/dashboard/favorites",
    label: "Favoritos",
    icon: "HeartIcon",
  },
  {
    path: "/dashboard/messages",
    label: "Mensajes",
    icon: "InboxIcon",
  },
];

export { routes };