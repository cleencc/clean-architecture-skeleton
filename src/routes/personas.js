import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/', passport.authenticate('jwt'), (req, res) => {
    res.send('Test');
});

export default router;