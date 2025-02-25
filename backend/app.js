const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();
const cors = require("cors")

const app = express();
const dbPath = path.join(__dirname, "mails.db");

app.use(express.json());

let database = null;

const initializeDBAndServer = async () => {
  try {
    database = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("Connected to SQLite Database");

    app.listen(3010, () => {
      console.log("Server running on port 3010... 🚀");
    });
  } catch (error) {
    console.error("Database initialization error:", error.message);
    
  }
};

initializeDBAndServer();


app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

require("dotenv").config({ path: __dirname + "/.env" });
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);


const transporter = nodemailer.createTransport({
  secure : true ,
  host : "smtp.gmail.com", 
  port: 465 , 
  auth :{
    user: "naveenjanapati65@gmail.com",
    pass : "cjyeygzztkpebglw"
  } 
});

//send message to emial 
app.post("/send-email-message", async(request, response)=>{
    console.log("called API")
    const { Email, Name, Message } = request.body;
    try{

        await database.run(
            `INSERT INTO Contacts (email, name) VALUES (?, ?)`,
            [Email, Name]
          );
        const mailoptions = {
            from : Email, 
            to : "naveenjanapati65@gmail.com", 
            subject : "New Contact Form Submission",
            text: `I Am ${Name}, ${Message}`, 
            replyTo: Email
        }
        await transporter.sendMail(mailoptions) ;
        response.status(200).json({message : "Sent Successfully"})
    } catch (error) {
        console.error("Error sending Mail:", error);
        response.status(500).json({ message: "Failed to send Mail. Try again." });
      }
})

