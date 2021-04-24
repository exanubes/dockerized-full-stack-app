const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")
const app = express()
const port = 3001
const options = {
  /* we will use this environmental variable to
  feed the backend server url using the backend service name */
  target: process.env.REST_API_URL,

  // changes the origin of the host header to the target URL
  changeOrigin: true,

  pathRewrite: {
    /* client will send all backend requests to /api/path/to/endpoint
    this will remove the /api prefix when forwarding the request to the server */
    "^/api": "",
  },
}

// adding proxy middleware for /api requests
app.use("/api", createProxyMiddleware(options))

// standard static file serve
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
