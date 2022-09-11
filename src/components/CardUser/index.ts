import { CardAvatar } from './CardAvatar';
import { CardDescription } from './CardDescription';
import { CardTitle } from './CardTitle';
import { CardUser as FormContainerHOC, ICardUser } from './CardUser';

interface CardUserHOCProps {
    ({ children }: ICardUser ):JSX.Element,
    CardDescription:({ description }: { description?: string }) => JSX.Element,
    CardTitle:({ title }: { title?: string }) => JSX.Element,
    CardAvatar:({ url }: { url: string }) => JSX.Element,
    
}

export const CardUser:CardUserHOCProps = Object.assign(FormContainerHOC,{
  
    CardDescription,
    CardTitle,
    CardAvatar
    
})