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
import { addPokemon, deletePokemon } from "../redux/modules/pokemon";

const PokemonCard = ({ pokemon, isSelected }) => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickGoToPokemonDetail = () => {
    navigate(`/dex/pokemondetail/${pokemon.id}`);
  };

  const onClickDeleteMyPokemon = (e) => {
    e.stopPropagation();
    alert(`${pokemon.korean_name}이 삭제되었습니다.`);
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
      alert(`${pokemon.korean_name}}는 이미 선택된 포켓몬 입니다.`);
      return;
    } else {
      if (selectedPokemon.length > 5) {
        alert("포켓몬은 최대 6마리까지 선택할 수 있습니다.");
        return;
      } else {
        isSelected = true;
        alert(`${pokemon.korean_name}이 추가되었습니다.`);
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
