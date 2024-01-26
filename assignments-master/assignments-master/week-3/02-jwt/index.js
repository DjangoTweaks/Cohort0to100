const jwt = require('jsonwebtoken');
const z = require('zod');
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const zodSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
});



const payloadContents= 
{
    username: "DjangoTweaks@gmail.com",
    password: "DjangoTweaks123"
}



function signJwt(username, password) 
{
    try
    {
        zodSchema.parse(payloadContents);
        const token = jwt.sign(payloadContents, jwtPassword);
        return token; 
    }
    catch(e)
    {
        return null; 
    }
}

console.log(signJwt());

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here

    try
    {
        jwt.verify(token, jwtPassword);
        return true;
    }   
    catch(e)
    {
        return false; 
    }

}

console.log(verifyJwt());

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token)
{
    // Your code here
    try
    {
        const x = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRqYW5nb1R3ZWFrc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IkRqYW5nb1R3ZWFrczEyMyIsImlhdCI6MTcwNjE2NTE3NH0.AayNviKMJMjILFXwOYfgfIPwonCogcpOpxOzZpV39VQ", jwtPassword);
        return x; 
    }
    catch(e)
    {
        return false;
    }

}

console.log(decodeJwt());

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
