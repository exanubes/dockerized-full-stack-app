export function getBaseUrl() {
  return process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000"
}
