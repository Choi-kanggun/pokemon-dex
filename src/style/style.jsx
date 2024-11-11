import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokeLogoImg = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;

export const DexStartBtn = styled.button`
  background-color: red;
  width: 200px;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const PokeDexWrapper = styled.div`
  background-color: lightyellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const MyPokemonWrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  width: 100%;
  max-width: 1300px;
  background-color: white;
  margin-bottom: 20px;
`;

export const MyPokemonCardBox = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const MyPokemonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  padding: 0 0 20px 0;
`;

export const PokeballBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0 80px 0;
`;

export const PokeBallImg = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.p`
  color: #ff7171;
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
`;

export const DashboardTitle = styled(Title)``;

export const ListTitle = styled(Title)``;

export const DetailTitle = styled(Title)``;

export const PokeCardListWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const PokeCardList = styled.div`
  background-color: white;
  border-radius: 10px;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const PokeCard = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  width: 150px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }
  transition: transform 0.2s;
`;

export const PokemonImg = styled.img``;

export const PokemonNameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  padding: 20px 0;
`;

export const PokomonName = styled.p`
  font-weight: bold;
  padding-bottom: 15px;
`;

export const PokomonId = styled.p`
  font-size: 12px;
`;

export const AddCardBtn = styled.button`
  font-size: 14px;
  border: none;
  background-color: #6dc96d;
  color: white;
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
  &:hover {
    background-color: #32d301;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const DeleteCardBtn = styled.button`
  font-size: 14px;
  border: none;
  background-color: #ff7171;
  color: white;
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const DetailPokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightyellow;
  padding: 30px;
`;

export const DetailPokemonInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  height: 65vh;
  background-color: white;
  border-radius: 10px;
  padding-bottom: 10px;
`;

export const DetailPokemonImg = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${(props) => props.$img});
  background-size: cover;
`;

export const DetailNameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DetailPokemonName = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
export const DetailPokemonDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const DetailPokemonType = styled.span`
  font-size: 20px;
  font-weight: bold;
  background-color: #ffd000;
  border-radius: 10px;
  padding: 5px;
  margin-right: 10px;
`;

export const DetailPokemonId = styled.p`
  font-weight: bold;
  color: #646464;
  padding: 10px;
`;

export const GotoDexBtn = styled.button`
  background-color: #ffd000;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    transform: scale(1.1);
  }
`;
