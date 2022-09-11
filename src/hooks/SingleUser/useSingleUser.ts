import { axiosInstance } from '@/axios/instance';
import { useQuery } from 'react-query';
async function singleUser(id:number):Promise<any> {
    const {data} = await axiosInstance().get(`/api/users/${id}`);
    return data;
  }
export const useSingleUser = (id:number)=>{
    const { isLoading,refetch,isError,isFetching,data,remove } = useQuery("useSingleUser",()=>singleUser(id),{});
    return {isLoading,data,isFetching,isError,refetch,remove}
}