import { axiosInstance } from '@/axios/instance';
import { useQuery } from 'react-query';
async function postsUser(id:number):Promise<any> {
    const {data} = await axiosInstance("https://jsonplaceholder.typicode.com").get(`/posts?userId=${id}`);
    return data;
  }
export const usePostsUser = (id:number)=>{
    const { isLoading,refetch,isError,isFetching,data,remove } = useQuery("usePostsUser",()=>postsUser(id),{});
    return {isLoading,data,isFetching,isError,refetch,remove}
}