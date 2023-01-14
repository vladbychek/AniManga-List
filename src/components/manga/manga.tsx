import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllMainPages, MainPagesWrapper, MainPagesLink, MainPagesTitle, MainPageContent } from "../common/mainPages.Styles";


export const Manga = () => {
  const MangaStore = useSelector((state: any) => state.manga.mangaArr);

  return (
    <MainPageContent>
      <AllMainPages>
        {MangaStore?.map((manga: any) => (
          <Link to={`${manga.id}`}>
            <MainPagesWrapper>
              <MainPagesLink img={manga.attributes.posterImage.original}>
                <MainPagesTitle>{manga.attributes.canonicalTitle}</MainPagesTitle>
              </MainPagesLink>
            </MainPagesWrapper>
          </Link>
        ))}
      </AllMainPages>
    </MainPageContent>
  );
};