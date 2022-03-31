import fetcher from "@/lib-client/fetcher";
import useSWR from "swr";

type Data = {
  user: {
    _id: string;
    username: string;
    name: string;
    bio: string;
    email: string;
    profilePicture: string;
  } | null;
};

const useCurrentUser = () => useSWR<Data>("/api/user", fetcher);
const useUser = (id: string) => useSWR(`/api/users/${id}`, fetcher);

export { useCurrentUser, useUser };
