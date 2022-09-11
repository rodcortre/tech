import {
  CenterContainerStyled,
  ResponsiveTextStyled,
} from "@/styled-components";
ResponsiveTextStyled;
export const CardDescription = ({ description }: { description?: string }) => {
  return (
    <CenterContainerStyled>
      <ResponsiveTextStyled>
        <h3 style={{ color: "gray" }}>{description}</h3>
      </ResponsiveTextStyled>
    </CenterContainerStyled>
  );
};
