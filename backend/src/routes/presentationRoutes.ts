import { Router } from 'express';
import { PresentationController } from '../controllers/presentationController';

const router = Router();


// List presentations
router.get('/', PresentationController.getAllPresentations);

// Create presentation
router.post('/', PresentationController.createPresentation);

// Update presentation (Rename)
router.put('/:id', PresentationController.renamePresentation);

// Delete presentation
router.delete('/:id', PresentationController.deletePresentation);

export default router;
