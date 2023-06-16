import express from 'express';
import * as controller from './categories.controller';
import { handleAsync } from '../../utils/middleware';

const router = express.Router();

export = router;

router.post('/', handleAsync(controller.create));
router.get('/', handleAsync(controller.list));
router.delete('/:id', handleAsync(controller.del));
