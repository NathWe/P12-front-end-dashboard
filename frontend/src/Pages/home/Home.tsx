import React from "react";
import accueil from "../../assets/images/accueil.jpeg";

const Home: React.FC = () => {
  return (
    <main className="reglage_img">
      <img src={accueil} alt="Page d'accueil" />
    </main>
  );
};

export default Home;
