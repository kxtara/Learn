import "dotenv/config.js"
import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "postgres",
});

async function createDatabase() {
    try {
        await client.connect();
        await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
        console.log("Database created successfully!")
    } catch (error: any) {
        if(error.code === "42P04"){
            console.log("Database already exists")
        }else{
            console.error(error);
        }
    } finally{
        await client.end();
    }
}

createDatabase();