# Introduction to Cloudinary Using Node

### Credentials

1. Create a free account on Cloudinary at [https://www.cloudinary.com/signup]

2. Navigate to the Dashboard. Copy the `CLOUDINARY_URL` into your clipboard.

![Dashboard](/assets/env_variable.png)

- Key: CLOUDINARY_URL
- Value: cloudinary://API_KEY:API_SECRET@CLOUD_NAME


3. Create a `.env` file in the root of the project. Paste the CLOUDINARY_URL environment variable into your `.env` file.

## Run Code: Test Credentials

Make sure to npm install the Node.js libraries. You will be using the `cloudinary` and the `dotenv` libraries.

```bash
npm i
```

```bash
node testCredentials.js
```
You should see your Cloud Name, API Key, and API_SECRET. PS- Keep your secret private!

### Run Code:
Example- run scripts from the root because all references to local assets are relative to the root.

All of the functions are commented out for demo purposes, so you'll first need to uncomment functions to run them.

```bash
node upload.js
```