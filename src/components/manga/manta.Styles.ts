import styled from "styled-components";

interface Props {
  img: any;
}



export const MangaWrapper = styled.a<Props>`
  background-image: url(${(p) => p.img});
  background-size: cover;
   text-decoration: none;
   color: white;
  width: 200px;
  height: 300px;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  flex-direction: column-reverse;
`;

export const MangaCover = styled.img`
  width: 160px;
  height: 210px;
`;

export const AllManga = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto 0;
  gap: 30px;
  width: 1170px;
`;

export const MangaTitle = styled.div`
   background-image: linear-gradient(0deg,rgba(0,0,0,.8) 0,rgba(0,0,0,.01));
   text-shadow: 0 1px rgb(0 0 0 / 70%);
   box-sizing: border-box;
   padding-top: 30%;
`;

