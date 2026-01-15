import pool from "./index.js";

async function createTables() {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");

        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY, 
            username VARCHAR(50) UNIQUE NOT NULL, 
            email VARCHAR(100) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
            `);

        await client.query("COMMIT");
        console.log("Tables created successfully");

    } catch (err) {
    await client.query("ROLLBACK");
    console.error(err);
    }finally {
    client.release();
  }
}

createTables();