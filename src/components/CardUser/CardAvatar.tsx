import { CenterContainerStyled } from "@/styled-components";
import Avatar from "@mui/material/Avatar";

export const CardAvatar = ({ url }: { url: string }) => {
  return (
    <CenterContainerStyled>
      <Avatar alt="title" src={url} sx={{ width: 200, height: 200 }} />
    </CenterContainerStyled>
  );
};
