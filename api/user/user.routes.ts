import express from 'express';
import controller from './user.controller';

const router = express.Router();

router.post('/', controller.createUser);
router.get('/', controller.getAllUser);
router.get('/:UserId', controller.getoneUser);
router.put('/:UserId', controller.updateUser);
router.delete('/:UserId', controller.deleteUser);

export = router;


