import { ReactElement } from "react";
export interface ICardUser {
  children?: ReactElement<any> | ReactElement<any>[];
  noStyle?: boolean;
}
export const CardUser = ({ children, noStyle }: ICardUser) => {
  return (
    <div
      style={{
        background: "white",
        border: noStyle ? "" : "1px solid #D3D3D3",
        width: "100%",
        padding: 5,
        borderRadius: 10,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};
