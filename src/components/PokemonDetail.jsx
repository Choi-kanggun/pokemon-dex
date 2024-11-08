import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  DetailNameBox,
  DetailPokemonBox,
  DetailPokemonDescription,
  DetailPokemonId,
  DetailPokemonImg,
  DetailPokemonName,
  DetailPokemonType,
  GotoDexBtn,
} from "../style/style";
import { PokemonContext } from "../context/PokemonContext";

const PokemonDetail = () => {
  const { pokemons } = useContext(PokemonContext);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id - 1;
  const onClickGoToDex = () => {
    navigate("/dex");
  };
  return (
    <DetailPokemonBox>
      <DetailPokemonId>
        No. {String(pokemons[id].id).padStart(3, "0")}
      </DetailPokemonId>
      <DetailNameBox>
        <DetailPokemonType>{pokemons[id].types}</DetailPokemonType>
        <DetailPokemonName>{pokemons[id].korean_name}</DetailPokemonName>
      </DetailNameBox>
      <DetailPokemonImg $img={pokemons[id].img_url} />
      <DetailPokemonDescription>
        {pokemons[id].description}
      </DetailPokemonDescription>
      <GotoDexBtn onClick={onClickGoToDex}>뒤로가기</GotoDexBtn>
    </DetailPokemonBox>
  );
};

export default PokemonDetail;
