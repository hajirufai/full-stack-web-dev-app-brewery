# firsst of all confirm node and node package manager
node -v
npm -v

# Create project directory and navigate into it
mkdir my-express-app
cd my-express-app

# Initialize Node.js project
npm init -y

# Install Express.js
npm install express

# Create entry point file
touch index.js

# Edit your index.js file: create routes etc

# Start the server
node index.js

# Optionally, use nodemon for development
npm install -g nodemon
nodemon index.js
