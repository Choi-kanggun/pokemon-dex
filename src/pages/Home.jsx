import React from "react";
import { useNavigate } from "react-router-dom";
import { DexStartBtn, HomeWrapper, LogoBox, PokeLogoImg } from "../style/style";

const Home = () => {
  const navigate = useNavigate();
  const onClickNavigateBtn = () => {
    navigate("/dex");
  };
  return (
    <HomeWrapper>
      <LogoBox>
        <PokeLogoImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
        <DexStartBtn onClick={onClickNavigateBtn}>
          포켓몬 도감 시작하기
        </DexStartBtn>
      </LogoBox>
    </HomeWrapper>
  );
};

export default Home;
