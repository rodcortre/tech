import { AlertError, DynamicForm } from "@/components";
import CustomDialog, {
  dialogOpenSubject$,
} from "@/components/CustomDialog/CustomDialog";
import { useLogin } from "@/hooks";
import { useEffect, useState } from "react";
import dataFormLogin from "../../../../dataForms/dataLogin.json";

const Form = () => {
  const [isVisibleMutationAlert, setIsVisibleMutationAlert] = useState<
    boolean | string
  >(false);
  const { mutate, isLoading } = useLogin(setIsVisibleMutationAlert);
  const [typeError, setTypeError] = useState({
    type: "",
  });
  const handleSubmitLogin = (data: any) => {
    mutate({
      email: data.email,
      password: data.password,
    });
  };
  useEffect(() => {
    if (isVisibleMutationAlert === "error") {
      setTypeError({ ...typeError, type: "error" });
      dialogOpenSubject$.setSubject = true;
      setIsVisibleMutationAlert(false);
    }
  }, [isVisibleMutationAlert]);
  return (
    <>
      <CustomDialog>
        {typeError.type === "error" && (
          <AlertError message="Credenciales incorrectas" />
        )}
      </CustomDialog>
      <DynamicForm
        isLoading={isLoading}
        json={dataFormLogin}
        labelSubmit="Sign in"
        classButton="mt-5"
        onSubmit={handleSubmitLogin}
      ></DynamicForm>
    </>
  );
};

export default Form;
