import { Request, Response } from 'express';
import { pool } from '../db/db';

export class PresentationController {

  // Get all presentations
  static async getAllPresentations(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool.query('SELECT * FROM presentations ORDER BY last_updated');
      res.json(result.rows);
    } catch (err) {
      console.error('Error in createPresentation:', err); // Hata detayını logla
      res.status(500).send('Server error');
    }
  }

  // Create a new presentation
  static async createPresentation(req: Request, res: Response): Promise<void> {
    const { name, created_by, thumbnail } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO presentations (name, created_by, thumbnail) VALUES ($1, $2, $3) RETURNING *',
        [name, created_by, thumbnail]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).send('Server error');
    }
  }

  // Rename a presentation
  static async renamePresentation(req: Request, res: Response): Promise<void> {
    console.log("Request:", req.body)
    const { id } = req.params;
    const { name, thumbnail } = req.body;
  
    // Check if both fields are empty
    if ((!name || name === "") && (!thumbnail || thumbnail === "")) {
      res.status(400).send('Invalid name or thumbnail');
    }
  
    try {
      // Update only the name if provided
      if (name && name.trim() !== "") {
        const result = await pool.query(
          'UPDATE presentations SET name = $1, last_updated = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
          [name, id]
        );
  
        if (result.rowCount === 0) {
          res.status(404).send('Presentation not found');
        }
      }
  
      // Update only the thumbnail if provided
      if (thumbnail && thumbnail.trim() !== "") {
        await pool.query(
          'UPDATE presentations SET thumbnail = $1, last_updated = CURRENT_TIMESTAMP WHERE id = $2',
          [thumbnail, id]
        );
      }
  
      // If at least one update was successful, respond with a success message
      res.status(200).send('Presentation updated successfully');
    } catch (err) {
      console.error('Error updating presentation:', err); // Log the error for debugging
      res.status(500).send('Server error');
    }
  }
  

  // Delete a presentation
  static async deletePresentation(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    
    try {
      const result = await pool.query(
        'DELETE FROM presentations WHERE id = $1 RETURNING *',
        [id]
      );

      if (result.rowCount === 0) {
        res.status(404).send('Presentation not found');
      }

      res.status(204).send();
    } catch (err) {
      res.status(500).send('Server error');
    }
  }
}
