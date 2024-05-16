# Use the official Node.js image
FROM node:22-alpine

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY tsconfig.json ./
COPY .eslintrc.json ./

# Install dependencies
RUN if [ "$NODE_ENV" = "production" ]; then npm install --only=prod; else npm install; fi
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Change ownership of the app directory to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Expose the application port
EXPOSE 3000

# Define the command based on the environment variable
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start && npm start; else npm run dev; fi"]