export const env = {
  mode: process.env.NODE_ENV,
  baseUrl: process.env.NEXT_PUBLIC_LANDING_URL || "http://localhost:3000",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  apiBasePath: process.env.NEXT_PUBLIC_API_PATH || "/",
};
