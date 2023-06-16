import * as transactionsModel from './transactions.model';
import { BaseTransaction } from './transactions.types';

export { create, list, del };

async function create(transaction: BaseTransaction) {
  return transactionsModel.create(transaction);
}
async function list() {
  return transactionsModel.list();
}

async function del(id: number) {
  return transactionsModel.del(id);
}
