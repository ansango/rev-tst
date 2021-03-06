import type { NextPage } from "next";

import GreyContainer from "components/common/Container/GreyContainer";
import Cards from "components/skeletons/Cards";
import Hero from "components/pages/home/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <GreyContainer>
        <div className="w-full grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <Cards length={9} />
        </div>
      </GreyContainer>
    </div>
  );
};

export default Home;
