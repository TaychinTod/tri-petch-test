import { ReactElement } from "react";
import { AthlesSection, PlayersSection } from "./sections";

const Home = (): ReactElement => {
  return (
    <main className="bg-white">
      <AthlesSection className="md:mt-12" />
      <PlayersSection className="mt-12" />
    </main>
  );
};

export default Home;
