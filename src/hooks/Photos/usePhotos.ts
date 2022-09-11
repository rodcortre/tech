import { axiosInstance } from '@/axios/instance';
import { useQuery } from 'react-query';
async function photos(id:number):Promise<any> {
    const {data} = await axiosInstance("https://jsonplaceholder.typicode.com").get(`/albums/${id}/photos`);
    return data;
  }
export const usePhotos = (id:number)=>{
    const { isLoading,refetch,isError,isFetching,data,remove } = useQuery("usePhotosUser",()=>photos(id),{});
    return {isLoading,data,isFetching,isError,refetch,remove}
}