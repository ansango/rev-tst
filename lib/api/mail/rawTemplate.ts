const { WEB_URI } = process.env;

const rawTemplate = ({
  username,
  tokenId,
}: {
  username: Username;
  tokenId: TokenId;
}) => `
      <div>
        <p>Hello, @${username}</p>
        <p>Please follow <a href="${WEB_URI}/forget-password/${tokenId}">this link</a> to reset your password.</p>
      </div>
      `;

export default rawTemplate;
