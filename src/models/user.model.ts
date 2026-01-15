import pool from "../db/index.js";

export interface User{
    user_id : number;
    username : string;
    email : string;
    created_at : Date;
}

export async function createUser(username : string, email : string): Promise<User> {
    const result = await pool.query(`
        INSERT INTO users (username, email)
        VALUES ($1,$2)
        RETURNING *;
        `,
        [username,email]
    );
        return result.rows[0];
}

export async function getAllUsers():Promise<User []> {
    const result = await pool.query(`
        SELECT * FROM users ORDER BY created_at DESC;`);
        return result.rows;
}

export async function getUser(user_id: number):Promise<User> {
    const result = await pool.query(`
        SELECT * FROM users WHERE user_id = $1; 
        `, [user_id]);
        return result.rows[0]
}

export async function updateUser(user_id: number,username: string, email: string): Promise<User> {

const updates: string[] = [];
const values: any[] = [];

if (username) {
  values.push(username);
  updates.push(`username = $${values.length}`);
}

if (email) {
  values.push(email);
  updates.push(`email = $${values.length}`);
}

values.push(user_id);
const result = await pool.query(
  `UPDATE users SET ${updates.join(", ")} WHERE user_id = $${values.length} RETURNING *;`,
  values
);

return result.rows[0];
}
