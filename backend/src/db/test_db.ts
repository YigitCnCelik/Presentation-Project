import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_presentations',
  password: 'password',
  port: 8080,
});

// Export the pool instance
export { pool };
