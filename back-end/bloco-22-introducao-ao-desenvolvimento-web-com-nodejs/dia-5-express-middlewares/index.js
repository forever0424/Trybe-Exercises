const express = require('express');
const userRouter = require('./routers/userRouter');
const btcRouter = require('./routers/btcRouter');
const postsRouter = require('./routers/postsRouter');
const teamsRouter = require('./routers/teamsRouter');
const error = require('./middlewares/errorMiddleware');
const { NOT_FOUND } = require('./statusCode');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/posts', postsRouter);

app.use('/teams', teamsRouter);

app.use('*', (_req, _res, next) => next({ status: NOT_FOUND, message: 'Opsss, route not found!' }))

app.use(error);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))