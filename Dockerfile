# Use node 4.4.5 LTS
FROM node:9-slim


# Change working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install
COPY . ./

# Launch application
CMD ["node","server.js"]