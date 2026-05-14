FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies first (makes future builds much faster)
COPY package*.json ./
RUN npm install

# Copy the rest of your Next.js project code
COPY . .

# Build the Next.js application
RUN npm run build

# Tell Next.js to listen to all network interfaces so the Nginx Proxy can reach it
ENV HOST=0.0.0.0
ENV PORT=3000

# Start the application
CMD ["npm", "start"]