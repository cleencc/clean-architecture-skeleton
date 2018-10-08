import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.example.com';
opts.audience = 'example.com';

export { opts };

export default new JwtStrategy(opts, function(jwt_payload, done) {
    return done(null, { id: 1 });
});