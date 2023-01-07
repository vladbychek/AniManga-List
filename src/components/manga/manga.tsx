import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "../../themeContext";
import { MaterialUISwitch } from "../switch/switch";
import { AllManga, MangaLink, MangaTitle, MangaWrapper } from "./manta.Styles";

export const Manga = () => {
  const MangaStore = useSelector((state: any) => state.manga.mangaArr);
  const currentTheme = useTheme();

  return (
    <>
  <MaterialUISwitch onClick={currentTheme.toggler}/>
      <AllManga>
        {MangaStore?.map((manga: any) => (
          <Link to={`${manga.id}`}>
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
