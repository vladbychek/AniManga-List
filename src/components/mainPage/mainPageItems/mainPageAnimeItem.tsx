import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnimeType } from "../../redux/reducer/animeSlice/anime.types";
import { RootState } from "../../redux/store";
import { MainPagesItemWrapper, MainPagesItem, MainPagesItemTitle } from "./mainPageItem.Styles";



export const AnimeMainPageItem = () => {
   const AnimeMainPageStore = useSelector((state: RootState) => state.anime.mainPageAnimeArr);

   return(
      <>
      {AnimeMainPageStore?.map((anime: AnimeType) => (
            <Link style={{ textDecoration: "none" }}  key={anime.id} title={anime.attributes?.canonicalTitle} to={`anime/${anime.id}`}>
              <MainPagesItemWrapper>
                <MainPagesItem img={anime.attributes?.posterImage?.original}>
                  <MainPagesItemTitle>
                    {anime.attributes?.canonicalTitle}
                  </MainPagesItemTitle>
                </MainPagesItem>
              </MainPagesItemWrapper>
            </Link>
          ))}
      </>
   )
}