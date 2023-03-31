# Use an official Node parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app's source files
COPY . .

# Build the React app
RUN npm run build

# Copy the React resources output to build folder
COPY /public /app/build

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]
