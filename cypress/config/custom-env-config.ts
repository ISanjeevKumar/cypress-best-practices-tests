const getEnvironmnetUrls = (envType: string, appSecret: string) => {
  return {
    env: {
      appUrl: `https://api.${envType}.realworld.io`,
      loginEndpoint: `https://api.${envType}.realworld.io/api/users/login`,
      appSecret: `${appSecret}`,
    },
  };
};

module.exports = getEnvironmnetUrls;
