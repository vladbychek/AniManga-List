import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MangaType } from "../../redux/reducer/mangaSlice/manga.types";
import { IRootState } from "../../redux/store";
import {
  MainPagesItemWrapper,
  MainPagesItem,
  MainPagesItemTitle,
} from "./mainPageItem.Styles";

export const MangaMainPageItem = () => {
  const MangaMainPageStore = useSelector(
    (state: IRootState) => state.manga.mainPageMangaArr
  );

  return (
    <>
      {MangaMainPageStore?.map((manga: MangaType) => (
        <Link
          style={{ textDecoration: "none" }}
          key={manga.id}
          title={manga.attributes?.canonicalTitle}
          to={`manga/${manga.id}`}
        >
          <MainPagesItemWrapper>
            <MainPagesItem img={manga.attributes?.posterImage?.original}>
              <MainPagesItemTitle>
                {manga.attributes?.canonicalTitle}
              </MainPagesItemTitle>
            </MainPagesItem>
          </MainPagesItemWrapper>
        </Link>
      ))}
    </>
  );
};
