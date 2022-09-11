import { AlertError, DynamicForm } from "@/components";
import CustomDialog, {
  dialogOpenSubject$,
} from "@/components/CustomDialog/CustomDialog";
import { useRegister } from "@/hooks";
import { useEffect, useState } from "react";
import dataFormRegister from "../../../../dataForms/dataRegister.json";
import { AlertPasswordError } from "../AlertPasswordError";
import { AlertSuccess } from "../AlertSuccess";

const Form = () => {
  const [isVisibleMutationAlert, setIsVisibleMutationAlert] = useState<
    boolean | string
  >(false);
  const { mutate, isLoading } = useRegister(setIsVisibleMutationAlert);
  const [typeError, setTypeError] = useState({
    type: "",
  });
  const handleSubmitLogin = (data: any) => {
    if (data.password !== data.confirmpassword) {
      setTypeError({ ...typeError, type: "alert" });
      dialogOpenSubject$.setSubject = true;
    } else {
      mutate({
        email: data.email,
        password: data.password,
      });
    }
  };
  useEffect(() => {
    if (isVisibleMutationAlert) {
      setTypeError({ ...typeError, type: "success" });
      dialogOpenSubject$.setSubject = true;
      setIsVisibleMutationAlert(false);
    }
    if (isVisibleMutationAlert === "error") {
      setTypeError({ ...typeError, type: "error" });
      dialogOpenSubject$.setSubject = true;
      setIsVisibleMutationAlert(false);
    }
  }, [isVisibleMutationAlert]);
  return (
    <>
      <CustomDialog>
        {typeError.type === "alert" && <AlertPasswordError />}
        {typeError.type === "success" && <AlertSuccess />}
        {typeError.type === "error" && (
          <AlertError message="No puedes registrar este email" />
        )}
      </CustomDialog>
      <DynamicForm
        isLoading={isLoading}
        json={dataFormRegister}
        labelSubmit="Register"
        classButton="mt-5"
        onSubmit={handleSubmitLogin}
      ></DynamicForm>
    </>
  );
};

export default Form;
