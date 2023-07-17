# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project files
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port your application will run on (if needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
