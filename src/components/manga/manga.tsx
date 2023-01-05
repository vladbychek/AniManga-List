import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { mangaData } from "../axios/api";
import { addManga } from "../redux/reducer/mangaSlice/mangaSlice";
import { AllManga, MangaCover, MangaTitle, MangaWrapper } from "./manta.Styles";





export const Manga = () => {
   const MangaStore = useSelector((state: any) => state.manga.mangaArr.data);

 

   return (
      <>
         <AllManga>
         {MangaStore?.map((manga: any) => (
            <MangaWrapper href="" img={manga.attributes.posterImage.original} key={manga.id}>
               <MangaTitle>{manga.attributes.canonicalTitle}</MangaTitle>
            </MangaWrapper>
         ))}   
         </AllManga>   

      </>
   )
}