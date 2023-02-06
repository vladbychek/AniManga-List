import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListsPagesWrapper,
  ListsPages,
  ListsPagesTitle,
} from "../../common/listpagesItem.Styles";
import { useAppDispatch } from "../../redux/hooks";
import { AnimeType } from "../../redux/reducer/animeSlice/anime.types";
import { addAnimeToFavorite } from "../../redux/reducer/animeSlice/animeSlice";
import { IRootState } from "../../redux/store";

export const AnimeItem = () => {
  const AnimeStore = useSelector((state: IRootState) => state.anime.animeArr);



  return (
    <>
      {AnimeStore?.map((anime: AnimeType) => (
        <>
        <Link
          style={{ textDecoration: "none" }}
          title={anime.attributes?.canonicalTitle}
          key={anime.id}
          to={`${anime.id}`}
        >
          <ListsPagesWrapper >
            <ListsPages img={anime.attributes?.posterImage?.original}>
              <ListsPagesTitle>
                {anime.attributes?.canonicalTitle}
              </ListsPagesTitle>
            </ListsPages>
          </ListsPagesWrapper>
        </Link>
        </>
      ))}
    </>
  );
};
