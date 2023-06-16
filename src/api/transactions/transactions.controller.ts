import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as transactionsService from './transactions.service';

export { create, list, del };

async function create(req: Request, res: Response): Promise<void> {
  const { categoryId, merchantName, transactionDate, amount } = req.body;

  const transactionModel = await transactionsService.create({
    categoryId,
    merchantName,
    transactionDate,
    amount,
  });
  res.status(StatusCodes.CREATED).json(transactionModel);
}

async function list(req: Request, res: Response): Promise<void> {
  const transactionModelList = await transactionsService.list();

  res.status(StatusCodes.OK).json(transactionModelList);
}

async function del(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await transactionsService.del(parseInt(id));
  res.status(StatusCodes.OK);
}
