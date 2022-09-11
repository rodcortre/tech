import { axiosInstance } from '@/axios/instance';
import { useQuery } from 'react-query';
async function listUsers():Promise<any> {
    const {data} = await axiosInstance().get('/api/users');
    return data;
  }
export const useListUsers = ()=>{
    const { isLoading,refetch,isError,isFetching,data } = useQuery("useListUser",listUsers,{});
    return {isLoading,data,isFetching,isError,refetch}
}