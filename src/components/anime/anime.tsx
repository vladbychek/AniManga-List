import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllMainPages, MainPagesWrapper, MainPagesLink, MainPagesTitle } from "../common/mainPages.Styles";

export const Anime = () => {
  const AnimeStore = useSelector((state: any) => state.anime.animeArr);

  return (
    <>
      <AllMainPages>
        {AnimeStore?.map((anime: any) => (
          <Link  to={`${anime.id}`}>
            <MainPagesWrapper>
              <MainPagesLink img={anime.attributes.posterImage.original}>
                <MainPagesTitle>{anime.attributes.canonicalTitle}</MainPagesTitle>
              </MainPagesLink>
            </MainPagesWrapper>
          </Link>
        ))}
      </AllMainPages>
    </>
  );
};
