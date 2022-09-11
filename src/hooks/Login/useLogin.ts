import { axiosInstance } from '@/axios/instance';
import { IRegister } from '@/models';
import { setUser } from '@/redux/states';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
async function login({email,password}:IRegister): Promise<any> {
    const {data} = await axiosInstance().post('/api/login',{
        email,
        password
    });
    return data;
  }
export const useLogin = (setIsVisible:Function)=>{
    const dispatch = useDispatch()
    const { isLoading,mutate } = useMutation(login,{onSuccess:(data)=>{
        dispatch(setUser({token:data.token}))
    },onError:()=>{
        setIsVisible("error")
    }});
    return {isLoading,mutate}
}