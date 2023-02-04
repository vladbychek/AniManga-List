import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ListsPagesWrapper,
  ListsPages,
  ListsPagesTitle,
} from "../../common/listpagesItem.Styles";
import { MangaType } from "../../redux/reducer/mangaSlice/manga.types";
import { RootState } from "../../redux/store";

export const MangaItem = () => {
  const MangaStore = useSelector((state: RootState) => state.manga.mangaArr);

  return (
    <>
      {MangaStore?.map((manga: MangaType) => (
        <Link
          style={{ textDecoration: "none" }}
          title={manga.attributes?.canonicalTitle}
          key={manga.id}
          to={`${manga.id}`}
        >
          <ListsPagesWrapper>
            <ListsPages img={manga.attributes?.posterImage.original}>
              <ListsPagesTitle>
                {manga.attributes?.canonicalTitle}
              </ListsPagesTitle>
            </ListsPages>
          </ListsPagesWrapper>
        </Link>
      ))}
    </>
  );
};
