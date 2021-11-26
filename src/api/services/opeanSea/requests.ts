export const getCollection = (account: string) => fetch(`https://api.opensea.io/api/v1/assets?owner=${account}`).then(async (res) => {
  const { assets } = await res.json();
  return assets;
});
