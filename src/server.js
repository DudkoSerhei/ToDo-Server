import http from 'http';
import express from 'express';

let app = express();
app.server = http.createServer(app);

export default app;
