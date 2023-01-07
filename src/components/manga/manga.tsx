import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mangaData } from "../axios/api";
import { getFullMangaInfo } from "../redux/reducer/mangaSlice/mangaSlice";
import { AllManga, MangaLink, MangaTitle, MangaWrapper } from "./manta.Styles";

export const Manga = () => {
  const MangaStore = useSelector((state: any) => state.manga.mangaArr);
console.log('zzz', MangaStore)

  return (
    <>
      <AllManga>
        {MangaStore?.map((manga: any) => (
          <Link  to={`${manga.id}`}>
            <MangaWrapper>
              <MangaLink img={manga.attributes.posterImage.original}>
                <MangaTitle>{manga.attributes.canonicalTitle}</MangaTitle>
              </MangaLink>
            </MangaWrapper>
          </Link>
        ))}
      </AllManga>
    </>
  );
};
