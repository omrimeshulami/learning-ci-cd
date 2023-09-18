# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the app dependencies
# If you're using Yarn, you can use `yarn install --production` instead
RUN yarn install --production

# Copy the app source code to the container
COPY . .

# Specify the container's default port (e.g., for an Express server, 3000 is common)
EXPOSE 3000

# The command that runs the app
CMD [ "yarn", "start" ]