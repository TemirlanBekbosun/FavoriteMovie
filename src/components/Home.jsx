import styled from "styled-components";
import search from "../assets/feather_search.svg";
import home from "../assets/home2.svg";
import openvideo from "../assets/open3.svg";
import tvvideo from "../assets/tv.svg";
import vektor from "../assets/Vector.svg";
import group from "../assets/Group.svg";
import shuffle from "../assets/shuf.svg";

export default function Home() {
  return (
    <StiledH1>
      <SearchPhoto src={search} alt="search" />
      <HomePhoto src={home} alt="homeline" />
      <OpenvidPhoto src={openvideo} alt="" />
      <TVPhoto src={tvvideo} alt="tvphoto" />
      <VektorPhoto src={vektor} alt="vector" />
      <GroupPhoto src={group} alt="groupphoto" />
      <ShuffePhoto src={shuffle} alt="shuffephoto" />
    </StiledH1>
  );
}

const StiledH1 = styled.div`
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 53px;
  width: 85px;
  height: 100vh;
  padding: 50px;
`;
const SearchPhoto = styled.img`
  width: 24px;
  height: 24px;
  opacity: 100%;
`;
const HomePhoto = styled.img`
  width: 30px;
  height: 30px;
  opacity: 80%;
`;
const OpenvidPhoto = styled.img`
  width: 30px;
  height: 30px;
  opacity: 100%;
`;
const TVPhoto = styled.img`
  width: 24.41px;
  height: 20.19px;
  opacity: 100%;
`;
const VektorPhoto = styled.img`
  width: 25.77px;
  height: 20.19px;
  opacity: 100%;
`;
const GroupPhoto = styled.img`
  width: 16.11px;
  height: 16.12px;
  opacity: 100%;
`;
const ShuffePhoto = styled.img`
  width: 24.44px;
  height: 16.12px;
  opacity: 100%;
`;
