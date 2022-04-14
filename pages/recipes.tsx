import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Recipes: NextPage = () => {
  const { query } = useRouter();
  const { search } = query;
  useEffect(() => {
    if (search) {
      console.log(search);
    }
  }, [search]);
  return (
    <div>
      <h1>Receipes</h1>
    </div>
  );
};

export default Recipes;
