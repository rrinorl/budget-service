import { Router } from 'express';
import { errorHandler } from '../utils/middleware';
import categoriesRoutes from './categories/categories.routes';
import transactionsRoutes from './transactions/transactions.routes';

const router = Router();

export = router;

router.use('/categories', categoriesRoutes);
router.use('/transactions', transactionsRoutes);

// Global error handler
router.use(errorHandler);
