import { findAndDeleteTokenByIdAndType } from "@/lib-api/db/token";
import { updateUserEmailVerifiedById } from "@/lib-api/db/user";
import { database } from "@/lib-api/middlewares";
import GreyContainer from "components/common/Container/GreyContainer";
import BadLink from "components/recovery/BadLink";
import RecoveryForm from "components/recovery/RecoveryForm";
import { GetServerSideProps, NextPage } from "next";
import nc from "next-connect";

const Token: NextPage<{ tokenId: TokenId; valid: boolean }> = ({
  valid,
  tokenId,
}) => {
  return (
    <GreyContainer>
      {valid ? <RecoveryForm tokenId={tokenId} /> : <BadLink />}
    </GreyContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  await nc().use(database).run(context.req, context.res);
  try {
    const deletedToken = await findAndDeleteTokenByIdAndType(
      context.req.db,
      context.params.tokenId,
      "emailVerification"
    );
    if (!deletedToken) return { props: { valid: false } };
    await updateUserEmailVerifiedById(context.req.db, deletedToken.userId);
    return { props: { valid: true } };
  } catch (error) {
    return { props: { valid: false } };
  }
};

export default Token;
