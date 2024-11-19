import { Schema, model, models, Document } from 'mongoose';

export interface IAccount extends Document {
  clerkId: string;
  email: string;
  userName: string;
  photo: string;
  planId: number;
  creditBalance: number;
  firstName: string;
  lastName: string;
  createAt: Date;
  updatedAt: Date;
}

const AccountSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastname: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Account = models?.Account ?? model('Account', AccountSchema);

export default Account;
