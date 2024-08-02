FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Use serve to serve the app
CMD ["serve", "-s", "build"]
