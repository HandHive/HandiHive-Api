# HandiHive-Api

HandiHive is an errand decentralized platform.

## Manual Installation

- Clone the repo: git clone [this repo](https://github.com/HandHive/HandiHive-Api.git)
- Change directory to the repo: cd HandiHive-Api
- Install dependencies: npm install
- Run the server: npm run dev

## Table of Contents

- [Features](https://github.com/HandHive/HandiHive-Api#features)
- [Environment Variables](https://github.com/HandHive/HandiHive-Api#environment-variables)
- [API Documentation](https://github.com/HandHive/HandiHive-Api#api-documentation)

## [Features](#features)

- **NoSQL database**: [MongoDB](https://www.mongodb.com/) object data modeling using [Mongoose](https://mongoosejs.com/)
- **Authentication and authorization**: using [JWT](https://jwt.io/) (access and refresh token)
- **Error handling**: error handling mechanism with specific result messages and codes
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)

## [Environment Variables](#environment-variables)

The environment variables should be set in a '.env' file. The '.env' file should be created in your root folder.You should set the values of these keys:

```js
# PORT
PORT=PORT_HERE

# Mongoose URL
MONGODB_URI=MONGODB_URI_HERE

# JWT key for token
JWT_SECRET=JWT_SECRET_HERE

#Session secret
SESSION_SECRET=SESSION_SECRET_HERE

# Salt Round for bcrypt
SALT_ROUND=SALT_ROUND_HERE

```

## [API Documentation](#api-documentation)

To view all APIs and learn all the details required for the requests and responses, click on this postman link:

**THANK YOU!**
