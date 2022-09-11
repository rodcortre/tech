import { axiosInstance } from '@/axios/instance';
import { IRegister } from '@/models';
import { useMutation } from 'react-query';
async function register({email,password}:IRegister): Promise<any> {
    const {data} = await axiosInstance().post('/api/register',{
        email,
        password
    });
    return data;
  }
export const useRegister = (setIsVisible:Function)=>{
    const { isLoading,mutate } = useMutation(register,{onSuccess:()=>{
        setIsVisible(true)
    },onError:()=>{
        setIsVisible("error")
    }});
    return {isLoading,mutate}
}