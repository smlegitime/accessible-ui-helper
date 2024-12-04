# Base node image
FROM node:20

# Packages needed to run canvas, a peer dependency of jsdom
RUN apt-get update && apt-get install -y \
build-essential \
libcairo2-dev \
libpango1.0-dev \
libjpeg-dev \
libgif-dev \
librsvg2-dev \
libtool \
autoconf \
automake \
&& rm -rf /var/lib/apt/lists/*

# Setting the container's working directory
WORKDIR /usr/src/app

# Copying all files from local host into container filesystem
COPY . .

# Install package.json dependencies
RUN npm install

# Expose port
EXPOSE 8000