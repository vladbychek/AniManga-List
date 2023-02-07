import { useSelector } from "react-redux";
import { useTheme } from "../../../../themeContext";
import { MoreInfoContent, MoreInfoTitle, MoreInfoTitleText } from "../../../manga/fullMangaPage/fullMangaPageMoreInfo/fullListsPageMoreInfo.Styles";
import { IRootState } from "../../../redux/store";


export const MoreInfo = () => {
  const FullInfoAnimeStore = useSelector(
    (state: IRootState) => state.anime.fullAnimeInfoArr
  );

  const currentTheme = useTheme();

  return (
    <MoreInfoContent>
      <MoreInfoTitle>
        Type<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoAnimeStore.type}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Release date<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoAnimeStore.attributes?.startDate}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Title status<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoAnimeStore.attributes?.status}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Age rating<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoAnimeStore.attributes?.ageRating}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Amount of episodes<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {!FullInfoAnimeStore.attributes?.episodeCount
            ? "-"
            : `${FullInfoAnimeStore.attributes.episodeCount}`}
        </MoreInfoTitleText>
      </MoreInfoTitle>
    </MoreInfoContent>
  );
};
