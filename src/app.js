import express from 'express';
import passport from 'passport';
import strategy from './auth/strategies/jwt';
import personas from './routes/personas';

passport.use('jwt', strategy);

const app = express();

app.use('/api/v1/personas', passport.authenticate('jwt'), personas);

export default app;