import styled from "styled-components";
import serri from "../assets/ser.svg";
import kinophoto from "../assets/kino.svg";
export default function Series() {
  return (
    <StiledSerries>
      <Stiledcount>
        <img src={serri} alt="serriphoto" />

        <ButtonContainer>
          <ButtonPlay>PLAY</ButtonPlay>
          <ButtonTrailer>Watch Trailer</ButtonTrailer>
        </ButtonContainer>
      </Stiledcount>

      <div>
        <KinoPhoto src={kinophoto} alt="serriphoto" />
      </div>
    </StiledSerries>
  );
}
const StiledSerries = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 50px;
`;
const KinoPhoto = styled.img`
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const ButtonPlay = styled.button`
  width: 124.6px;
  height: 47px;
  border-radius: 47px;
  background-color: red;
  border: none;
  color: white;
  &:hover {
    box-shadow: 0px 0px 20px 2px red;
    transition: all 0.4s;
  }
  cursor: pointer;
`;
const Stiledcount = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding-left: 30px;

  gap: 17px;
`;
const ButtonTrailer = styled.button`
  width: 124.6px;
  height: 47px;
  border-radius: 47px;
  background-color: white;
  border: none;
  color: black;
  &:hover {
    box-shadow: 0px 0px 20px 2px gray;
    transition: all 0.4s;
  }
  cursor: pointer;
`;
