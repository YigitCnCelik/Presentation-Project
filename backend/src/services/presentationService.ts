import { pool } from '../db/db';
export class PresentationService {
  static async getAll(sortBy: string = 'last_updated') {
    const validSorts = ['name', 'last_updated', 'created_by'];
    const sortField = validSorts.includes(sortBy) ? sortBy : 'last_updated';
    const result = await pool.query(`SELECT * FROM presentations ORDER BY ${sortField}`);
    return result.rows;
  }

  // Other business logic for create, rename, delete
}
