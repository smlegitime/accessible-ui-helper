# Base node image
FROM node:20

# Setting the container's working directory
WORKDIR /usr/src/app

# Copying all files from local host into container filesystem
COPY . .

# Install package.json dependencies
RUN npm install

# Expose port
EXPOSE 3000