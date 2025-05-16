// Demonstration of creating a JWT with expiry using jsonwebtoken
const jwt = require('jsonwebtoken');

// Payload for the token
const payload = {
  userId: 123,
  username: 'testuser'
};

// Secret key for signing the token
const secret = 'mySuperSecretKey';

// Create a token with 10 seconds expiry
const token = jwt.sign(payload, secret, { expiresIn: '10s' });
console.log('Generated Token:', token);

// Verify the token immediately (should be valid)
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.log('Token verification failed:', err.message);
  } else {
    console.log('Token is valid. Decoded payload:', decoded);
  }
});

// Wait 12 seconds and try to verify again (should be expired)
setTimeout(() => {
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log('After expiry: Token verification failed:', err.message);
    } else {
      console.log('After expiry: Token is valid. Decoded payload:', decoded);
    }
  });
}, 12000);
