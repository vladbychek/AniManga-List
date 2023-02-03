import { useSelector } from "react-redux";
import { useTheme } from "../../../themeContext";
import { MoreInfoContent, MoreInfoTitle, MoreInfoTitleText } from "../../common/fullListsPageMoreInfo.Styles";
import { RootState } from "../../redux/store";

export const MoreInfo = () => {
  const FullInfoMangaStore = useSelector(
    (state: RootState) => state.manga.fullMangaInfoArr
  );

  const currentTheme = useTheme();

  return (
    <MoreInfoContent>
      <MoreInfoTitle>
        Type<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoMangaStore.attributes?.subtype}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Release date<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoMangaStore.attributes?.startDate}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Title status<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoMangaStore.attributes?.status}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Published in<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {FullInfoMangaStore.attributes?.serialization}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Amount of volumes<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {!FullInfoMangaStore.attributes?.volumeCount
            ? "-"
            : `${FullInfoMangaStore.attributes.volumeCount}`}
        </MoreInfoTitleText>
      </MoreInfoTitle>
      <MoreInfoTitle>
        Amount of chapters<br></br>
        <MoreInfoTitleText theme={currentTheme.theme}>
          {!FullInfoMangaStore.attributes?.chapterCount
            ? "-"
            : `${FullInfoMangaStore.attributes.chapterCount}`}
        </MoreInfoTitleText>
      </MoreInfoTitle>
    </MoreInfoContent>
  );
};
