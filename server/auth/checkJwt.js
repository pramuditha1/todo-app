import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

const DOMAIN = process.env.AUTH0_DOMAIN;
const AUDIANCE = process.env.AUTH0_AUDIENCE;

export const checkJwt = () => jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${DOMAIN}/.well-known/jwks.json`,
    }),

    audience: AUDIANCE,
    issuer: `https://${DOMAIN}/`,
    algorithms: ['RS256'],
});