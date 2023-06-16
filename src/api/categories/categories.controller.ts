import { Category } from '@prisma/client';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as categoriesService from './categories.service';

export { create, list, del };

async function create(req: Request, res: Response): Promise<void> {
  const { name } = req.body;

  const categoryModel: Category = await categoriesService.create({
    name,
  });
  res.status(StatusCodes.CREATED).json(categoryModel);
}

async function list(req: Request, res: Response): Promise<void> {
  const categoryModelList = await categoriesService.list();

  res.status(StatusCodes.OK).json(categoryModelList);
}

async function del(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await categoriesService.del(parseInt(id));
  res.status(StatusCodes.OK);
}
