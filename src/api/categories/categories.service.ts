import * as categoriesModel from './categories.model';
import { BaseCategory } from './categories.types';

export { create, list, del };

async function create(category: BaseCategory) {
  return categoriesModel.create(category);
}

async function list() {
  return categoriesModel.list();
}

async function del(id: number) {
  return categoriesModel.del(id);
}
