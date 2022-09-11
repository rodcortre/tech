import { ReactElement } from "react";
export interface IFormContainer {
  children?: ReactElement<any> | ReactElement<any>[];
}
export const FormContainer = ({ children }: IFormContainer) => {
  return <div>{children}</div>;
};
