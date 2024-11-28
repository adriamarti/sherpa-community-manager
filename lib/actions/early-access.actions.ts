'use server';

import EarlyAccess from '../database/models/early-access.model';
import { connectToDatabase } from '../database/mongoose';
import { handleError } from '../utils';

// CREATE
export async function createEarlyAccess(earlyAccess: EarlyAccessParams) {
  try {
    await connectToDatabase();

    const newEarlyAccess = await EarlyAccess.create(earlyAccess);

    return JSON.parse(JSON.stringify(newEarlyAccess));
  } catch (error) {
    handleError(error);
  }
}
