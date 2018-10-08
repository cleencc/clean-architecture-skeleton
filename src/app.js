import express from 'express';
import passport from 'passport';
import strategy from './auth/strategies/jwt';
import personas from './routes/personas';

const app = express();

passport.use(strategy);

app.use('/api/v1/personas', personas);

export default app;