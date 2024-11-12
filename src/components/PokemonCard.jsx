import { useNavigate } from "react-router-dom";
import {
  AddCardBtn,
  DeleteCardBtn,
  PokeCard,
  PokemonImg,
  PokemonNameBox,
  PokomonId,
  PokomonName,
} from "../style/style";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";
import Swal from "sweetalert2";

const PokemonCard = ({ pokemon, isSelected }) => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickGoToPokemonDetail = () => {
    navigate(`/dex/pokemondetail/${pokemon.id}`);
  };

  const onClickDeleteMyPokemon = (e) => {
    e.stopPropagation();
    Swal.fire({
      icon: "success",
      text: `${pokemon.korean_name} 이/가 삭제되었습니다.`,
      confirmButtonText: "예",
      confirmButtonColor: "#429f50",
    });
    isSelected = false;
    dispatch(
      deletePokemon({
        id: pokemon.id,
      })
    );
  };

  const onClickAddMyPokemon = (e) => {
    e.stopPropagation();
    if (
      selectedPokemon.some((selectPokemon) => selectPokemon.id === pokemon.id)
    ) {
      Swal.fire({
        icon: "warning",
        text: `${pokemon.korean_name}} 은/는 이미 선택된 포켓몬 입니다.`,
        confirmButtonText: "예",
        confirmButtonColor: "#429f50",
      });
      return;
    } else {
      if (selectedPokemon.length > 5) {
        Swal.fire({
          icon: "warning",
          text: "포켓몬은 최대 6마리까지 선택할 수 있습니다.",
          confirmButtonText: "예",
          confirmButtonColor: "#429f50",
        });
        return;
      } else {
        isSelected = true;
        Swal.fire({
          icon: "success",
          text: `${pokemon.korean_name} 이/가 추가되었습니다.`,
          confirmButtonText: "예",
          confirmButtonColor: "#429f50",
        });
        dispatch(addPokemon(pokemon));
      }
    }
  };
  return (
    <PokeCard onClick={onClickGoToPokemonDetail}>
      <PokemonImg src={pokemon.img_url}></PokemonImg>
      <PokemonNameBox>
        <PokomonName>{pokemon.korean_name}</PokomonName>
        <PokomonId>No. {String(pokemon.id).padStart(3, "0")}</PokomonId>
      </PokemonNameBox>

      {isSelected ? (
        <DeleteCardBtn onClick={onClickDeleteMyPokemon}>삭제</DeleteCardBtn>
      ) : (
        <AddCardBtn onClick={onClickAddMyPokemon}>추가</AddCardBtn>
      )}
    </PokeCard>
  );
};

export default PokemonCard;
