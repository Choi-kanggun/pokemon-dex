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
import { addPokemon } from "../redux/slices/pokemonSlice";
import Swal from "sweetalert2";

const PokemonDetail = () => {
  const { pokemons } = useContext(PokemonContext);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const params = useParams();
  const id = params.id - 1;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickGoToDex = () => {
    navigate("/dex");
  };

  const onClickAddMyPokemon = () => {
    if (selectedPokemon.some((pokemon) => pokemon.id === pokemons[id].id)) {
      Swal.fire({
        icon: "warning",
        text: `${pokemons[id].korean_name} 은/는 이미 선택된 포켓몬 입니다.`,
        confirmButtonText: "예",
        confirmButtonColor: "#429f50",
      });
      return;
    } else if (selectedPokemon.length > 5) {
      Swal.fire({
        icon: "warning",
        text: "포켓몬은 최대 6마리까지 선택할 수 있습니다.",
        confirmButtonText: "예",
        confirmButtonColor: "#429f50",
      });
    } else {
      Swal.fire({
        icon: "success",
        text: `${pokemons[id].korean_name} 이/가 추가되었습니다.`,
        confirmButtonText: "예",
        confirmButtonColor: "#429f50",
      });
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
