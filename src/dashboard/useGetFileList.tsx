import { useQuery } from "@tanstack/react-query";
import { apigetAllFiles } from "../services/apiGetHash";
``;
export function useGetFiles() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["files"],
    queryFn: () => apigetAllFiles(),
  });
  console.log(data);
  return { isLoading, data, error };
}
