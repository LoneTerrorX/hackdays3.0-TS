# Use a Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application (if necessary for production)
# For React/Vite, you might need a build step
# RUN npm run build

# Expose the port the application runs on (if applicable)
# If your Vite app runs on the default port 5173:
EXPOSE 5173

# Command to run the application
# For development:
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
# For production (after building):
# CMD ["npm", "start"]