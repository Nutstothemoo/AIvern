const getBasePath = () => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("VERCEL_URL:", process.env.VERCEL_URL);
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  return base_url;
};

export default getBasePath;
