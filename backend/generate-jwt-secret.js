const crypto = require('crypto');

function generateSecret() {
  return crypto.randomBytes(64).toString('hex');
}

const secretKey = generateSecret();
console.log(secretKey);
