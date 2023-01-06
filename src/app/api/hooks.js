import { useQuery } from "react-query";
import http from "./http";

export function useGetCollection(collectionId,refetch) {
    // console.log(collectionId,refetch);
    const getCollection = async (collectionId) => {
        return new Promise((resolve, reject) => {
            http.get(`/collection/${collectionId}`).then((response) => {
                resolve(response.data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    };
    
  
    return useQuery({
      queryKey: ['getCollection', collectionId],
      queryFn: () => getCollection(collectionId),
      refetchInterval: () => (refetch ? 2000 : false),
    //   staleTime: 5_000,
      watch: true,
      cacheTime: 2_000,
      enabled: Boolean(collectionId),
    });
  }