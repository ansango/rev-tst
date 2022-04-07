import { routeActive } from "@/lib-utils/router";
import { useRouter } from "next/router";
import React from "react";
import ButtonIcon from "../Button/ButtonIcon/ButtonIcon";

const AddRecipe = () => {
  const { pathname, push } = useRouter();
  return (
    <ButtonIcon
      icon="PlusCircleIcon"
      kind="outline"
      type="button"
      classButton={
        routeActive(pathname, "/recipe/add")
          ? "inline-flex items-center p-2 ml-3 text-sm text-blue-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          : "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      }
      classIcon="w-6 h-6"
      action={() => push("/recipe/add")}
    />
  );
};

export default AddRecipe;
