import { CenterContainerStyled } from "@/styled-components";
import { ResponsiveTextStyled } from "../../styled-components";

export const Description = ({ description }: { description?: string }) => {
  return (
    <CenterContainerStyled>
      <ResponsiveTextStyled>
        <h4 style={{ color: "gray" }}>{description}</h4>
      </ResponsiveTextStyled>
    </CenterContainerStyled>
  );
};
