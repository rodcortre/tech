import { Description } from './Description';
import { Form } from './Form';
import { FormContainer as FormContainerHOC, IFormContainer } from './FormContainer';
import { LinkForm } from './Link';
import { Title } from './Title';
interface FormContainerHOCProps {
    ({ children }: IFormContainer ):JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Description:({ description }: { description?: string }) => JSX.Element,
    Link:({ to,description }: { to: string,description:string }) => JSX.Element,
    Form:any
}

export const FormContainer:FormContainerHOCProps = Object.assign(FormContainerHOC,{
    Title,
    Form,
    Description,
    Link:LinkForm
    
})