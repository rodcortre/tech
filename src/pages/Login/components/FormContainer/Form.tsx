import { ReactElement } from "react";
interface IForm {
  form: ReactElement<any> | ReactElement<any>[];
}
export const Form = ({ form }: IForm) => {
  return form;
};
