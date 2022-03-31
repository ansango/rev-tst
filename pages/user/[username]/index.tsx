import { findUserByUsername } from "@/lib-api/db/user";
import { database } from "@/lib-api/middlewares";
import nc from "next-connect";
export default function UserPage({
  user,
}: {
  user: { username: string } | null;
}) {
  return (
    <div>
      <h1>User Page</h1>
      <p>{user?.username}</p>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  await nc().use(database).run(context.req, context.res);

  const userDB = await findUserByUsername(
    context.req.db,
    context.params.username
  );

  if (!userDB) {
    return {
      notFound: true,
    };
  }
  const user = { ...userDB, _id: userDB._id.toString() };
  return { props: { user } };
}
