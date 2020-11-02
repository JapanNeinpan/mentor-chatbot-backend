# mentor-chatbot-backend

In order for the backend to properly function. Create a .env file in the root directory with necessary credentials.  

// .env Example

DB_CONNECTION = mongodb+srv://\<username>:\<password>@cluster0-xkgor.gcp.mongodb.net/test?retryWrites=true&w=majority  
PORT = 7125

You can get the DB Connection Url from MongoDB and the user must be created before hand


Run ```npm start``` to start the server. Make sure the ports are accessible from the internet. 
