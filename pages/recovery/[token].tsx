import { findTokenByIdAndType } from "@/lib-api/db/token";
import { database } from "@/lib-api/middlewares";
import GreyContainer from "components/common/Container/GreyContainer";
import BadLink from "components/recovery/BadLink";
import RecoveryForm from "components/recovery/RecoveryForm";
import { GetServerSideProps, NextPage } from "next";
import nc from "next-connect";

const Token: NextPage<{ token: any; valid: boolean }> = ({ valid, token }) => {
  return (
    <GreyContainer>
      {valid ? <RecoveryForm token={token} /> : <BadLink />}
    </GreyContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  await nc().use(database).run(context.req, context.res);
  const tokenDoc = await findTokenByIdAndType(
    context.req.db,
    context.params.token,
    "passwordReset"
  );
  return {
    props: {
      token: context.params.token,
      valid: !!tokenDoc,
    },
  };
};

export default Token;
