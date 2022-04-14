import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ButtonIcon from "../Button/ButtonIcon/ButtonIcon";
import Icon from "../Icons/Icon";

const AddRecipe = () => {
  const { pathname } = useRouter();
  return (
    <Link href="/recipe/add" passHref>
      <button className="btn btn-ghost btn-circle">
        <Icon
          icon="PlusCircleIcon"
          kind="outline"
          className={
            routeActive(pathname, "/recipe/add")
              ? "w-5 h-5 text-primary"
              : "w-5 h-5"
          }
        />
      </button>
    </Link>
  );
};

export default AddRecipe;
