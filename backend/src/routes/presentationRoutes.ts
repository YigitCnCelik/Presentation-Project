import { Router } from 'express';
import { PresentationController } from '../controllers/presentationController';

const router = Router();

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the Presentation Dashboard!');
});

// List presentations
router.get('/presentations', PresentationController.getAllPresentations);

// Create presentation
router.post('/presentations', PresentationController.createPresentation);

// Update presentation (Rename)
router.put('/presentations/:id', PresentationController.renamePresentation);

// Delete presentation
router.delete('/presentations/:id', PresentationController.deletePresentation);

export default router;
