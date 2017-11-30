import express from 'express';
import app from './server';
import config from './config';

app.server.listen(config.port, () => {
  console.log(`Started on port ${app.server.address().port}`);
});
