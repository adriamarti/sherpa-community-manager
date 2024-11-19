'use server';

import { revalidatePath } from 'next/cache';

import Account from '../database/models/account.model';
import { connectToDatabase } from '../database/mongoose';
import { handleError } from '../utils';

// CREATE
export async function createAccount(account: CreateAccountParams) {
  try {
    await connectToDatabase();

    const newAccount = await Account.create(account);

    return JSON.parse(JSON.stringify(newAccount));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getAccountById(accountId: string) {
  try {
    await connectToDatabase();

    const account = await Account.findOne({ clerkId: accountId });

    if (!account) throw new Error('Account not found');

    return JSON.parse(JSON.stringify(account));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(
  clerkId: string,
  account: UpdateAccountParams
) {
  try {
    await connectToDatabase();

    const updatedAccount = await Account.findOneAndUpdate(
      { clerkId },
      account,
      {
        new: true,
      }
    );

    if (!updatedAccount) throw new Error('Account update failed');

    return JSON.parse(JSON.stringify(updatedAccount));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteAccount(clerkId: string) {
  try {
    await connectToDatabase();

    // Find account to delete
    const accountToDelete = await Account.findOne({ clerkId });

    if (!accountToDelete) {
      throw new Error('User not found');
    }

    // Delete user
    const deletedUser = await Account.findByIdAndDelete(accountToDelete._id);
    revalidatePath('/');

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
export async function updateCredits(accountId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedAccountCredits = await Account.findOneAndUpdate(
      { _id: accountId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );

    if (!updatedAccountCredits)
      throw new Error('Account credits update failed');

    return JSON.parse(JSON.stringify(updatedAccountCredits));
  } catch (error) {
    handleError(error);
  }
}
