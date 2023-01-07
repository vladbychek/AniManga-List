import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllAnime, AnimeWrapper, AnimeLink, AnimeTitle } from "./anime.Styles";

export const Anime = () => {
  const AnimeStore = useSelector((state: any) => state.anime.animeArr);

  return (
    <>
      <AllAnime>
        {AnimeStore?.map((anime: any) => (
          <Link  to={`${anime.id}`}>
            <AnimeWrapper>
              <AnimeLink img={anime.attributes.posterImage.original}>
                <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
              </AnimeLink>
            </AnimeWrapper>
          </Link>
        ))}
      </AllAnime>
    </>
  );
};
