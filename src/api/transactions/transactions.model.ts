import prisma from '../../clients/prismaClient';
import { BaseTransaction } from './transactions.types';

export { create, list, del };

async function create({ categoryId, merchantName, transactionDate, amount }: BaseTransaction) {
  return prisma.transaction.create({
    data: {
      category_id: categoryId,
      merchant_name: merchantName,
      transaction_date: new Date(transactionDate),
      amount,
    },
  });
}

async function list() {
  return prisma.transaction.findMany();
}

async function del(id: number) {
  return prisma.transaction.delete({
    where: {
      id,
    },
  });
}
