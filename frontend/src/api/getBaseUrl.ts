export function getBaseUrl() {
  return process.env.NODE_ENV === "production" ? "/" : "https://localhost:3000"
}
