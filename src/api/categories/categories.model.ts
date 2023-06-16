import prisma from '../../clients/prismaClient';
import { BaseCategory } from './categories.types';

export { create, list, del };

async function create({ name }: BaseCategory) {
  return prisma.category.create({
    data: {
      name,
    },
  });
}

async function list() {
  return prisma.category.findMany();
}

async function del(id: number) {
  return prisma.category.delete({
    where: {
      id,
    },
  });
}
