import http from 'http';
import express from 'express';
import 'whatwg-fetch';
import "isomorphic-fetch";

let app = express();
app.server = http.createServer(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

fetch('/api/todos');

export default app;
