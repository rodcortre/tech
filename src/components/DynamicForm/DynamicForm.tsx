import { CenterContainerStyled } from "@/styled-components";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";

import { DynamicInput } from "../DynamicInput";
import { ButtonStyled } from "./styled-components";

interface IDynamicForm {
  json: any;
  onSubmit: any;
  labelSubmit: string;
  classButton?: string;
  children?: any;
  isLoading?: any;
}
const DynamicForm: React.FC<IDynamicForm> = ({
  json,
  onSubmit,
  labelSubmit,
  classButton,
  isLoading = false,
  children,
}) => {
  const initialValues: { [x: string]: any } = {};
  const requiredFields: { [x: string]: any } = {};
  for (const input of json) {
    initialValues[input.name] = input.value;
    if (!input.validations) continue;
    let schema = Yup.string();
    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("Este campo es requerido");
      }
      if (rule.type === "email") {
        schema = schema.email("Formato no valido");
      }
      if (rule.type === "minLength") {
        schema = schema.min(
          rule.value as number,
          `Ingresar minimo ${rule.value} caracteres`
        );
      }
      if (rule.type === "maxLength") {
        schema = schema.max(
          rule.value as number,
          `Ingresar maximo ${rule.value} caracteres`
        );
      }
      //TODO add more rules
    }
    requiredFields[input.name] = schema;
  }
  const validationSchema = Yup.object({ ...requiredFields });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form noValidate>
          {json.map(
            ({
              type,
              name,
              placeholder,
              label,
              options,
              labelstyles,
              errormessagestyles,
            }: any) => {
              return (
                <DynamicInput
                  key={name}
                  type={type as any}
                  name={name}
                  placeholder={placeholder}
                  label={label}
                  labelstyles={labelstyles}
                  errormessagestyles={errormessagestyles}
                />
              );
            }
          )}
          {children}

          <CenterContainerStyled>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <ButtonStyled
                onClick={() => {
                  formik.handleSubmit();
                }}
                className={`${classButton ? classButton : ""}`}
                disabled={!formik.isValid}
                type="button"
              >
                {labelSubmit}
              </ButtonStyled>
            )}
          </CenterContainerStyled>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
