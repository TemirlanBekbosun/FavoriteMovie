import styled from "styled-components";

export default function Content() {
  return (
    <>
      <StiledContent>
        <h1>Favorite Movies</h1>
        <ButtonTrailer>ADD MOVIE</ButtonTrailer>
      </StiledContent>
    </>
  );
}

const StiledContent = styled.div`
  background-color: red;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  gap: 30px;
  mask-image: linear-gradient(to right, #000000 5%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: linear-gradient(
    to right,
    #000000 5%,
    rgba(0, 0, 0, 0) 100%
  );
  h1 {
    color: #ffffff;
    font-family: Inter;
    font-size: 25px;
    line-height: normal;
    text-align: left;
  }
`;
const ButtonTrailer = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 47px;
  background-color: white;
  font-family: Inter;
  border: none;
  color: black;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 0px 20px 2px white;
    transition: all 0.4s;
  }
  cursor: pointer;
`;
