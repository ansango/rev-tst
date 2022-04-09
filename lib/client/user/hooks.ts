import fetcher from "@/lib-client/fetcher";
import { User } from "models/user/user";

import useSWR from "swr";

type Data = {
  user: User | null;
};

const useCurrentUser = () => useSWR<Data>("/api/user", fetcher);
const useUser = (id: string) => useSWR(`/api/users/${id}`, fetcher);

export { useCurrentUser, useUser };
