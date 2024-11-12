import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddCardBtn,
  DetailBtnBox,
  DetailNameBox,
  DetailPokemonDescription,
  DetailPokemonId,
  DetailPokemonImg,
  DetailPokemonInfoBox,
  DetailPokemonName,
  DetailPokemonType,
  DetailPokemonWrapper,
  DetailTitle,
  GotoDexBtn,
} from "../style/style";
import { PokemonContext } from "../context/PokemonContext";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon } from "../redux/modules/pokemon";

const PokemonDetail = () => {
  const { pokemons } = useContext(PokemonContext);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  console.log(pokemons);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id - 1;
  const onClickGoToDex = () => {
    navigate("/dex");
  };

  const onClickAddMyPokemon = () => {
    if (selectedPokemon.some((pokemon) => pokemon.id === pokemons[id].id)) {
      alert(`${pokemons[id].korean_name}은 이미 추가된 포켓몬입니다.`);
      return;
    } else if (selectedPokemon.length > 5) {
      alert("포켓몬은 최대 6마리까지 선택할 수 있습니다.");
    } else {
      alert(`${pokemons[id].korean_name}이 추가되었습니다.`);
      dispatch(addPokemon(pokemons[id]));
    }
  };

  return (
    <DetailPokemonWrapper>
      <Dashboard />

      <DetailPokemonInfoBox>
        <DetailTitle>포켓몬 정보</DetailTitle>
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
        <DetailBtnBox>
          <GotoDexBtn onClick={onClickGoToDex}>뒤로가기</GotoDexBtn>
          <AddCardBtn onClick={onClickAddMyPokemon}>추가</AddCardBtn>
        </DetailBtnBox>
      </DetailPokemonInfoBox>
    </DetailPokemonWrapper>
  );
};

export default PokemonDetail;
