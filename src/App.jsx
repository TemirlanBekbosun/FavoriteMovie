import styled from "styled-components";
import Home from "./components/Home";
import Series from "./components/Series";
import Content from "./components/Content";
import MovieCards from "./components/MovieCards";

export default function App() {
  return (
    <>
      <StiledMain>
        <Home />
        <StiledContent>
          <Series />
          <Content />
          <StiledMovies>
            <MovieCards />
          </StiledMovies>
        </StiledContent>
      </StiledMain>
    </>
  );
}
const StiledMain = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;
const StiledContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const StiledMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 11px;
`;
