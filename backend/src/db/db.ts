import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'presentations',
  password: 'password',
  port: 8080,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()'); // Simple query to check the connection
    console.log('Connected to the database:', result.rows[0]);
    client.release();
  } catch (err) {
    console.error('Database connection error:', err); // Log any connection errors
  } finally {
    await pool.end(); // Close the pool
  }
}

testConnection();

// Export the pool instance
export { pool };
