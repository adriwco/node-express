import express from 'express';

const router = require('./router')
const app = express();

app.use(router)

export default app;
