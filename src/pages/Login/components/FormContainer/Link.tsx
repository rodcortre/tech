import { CenterContainerStyled } from "@/styled-components";
import { Link } from "react-router-dom";

export const LinkForm = ({
  to,
  description,
}: {
  to: string;
  description: string;
}) => {
  return (
    <CenterContainerStyled>
      <Link
        style={{ color: "gray", textDecoration: "none", marginTop: "30px" }}
        to={to}
      >
        {description}
      </Link>
    </CenterContainerStyled>
  );
};
