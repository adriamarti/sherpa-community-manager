import { Schema, model, models, Document } from 'mongoose';

export interface IEarlyAccess extends Document {
  email: string;
  createAt: Date;
  updatedAt: Date;
}

const EarlyAccessSchema = new Schema({
  email: { type: String, required: true, unique: true },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const EarlyAccess =
  models?.EarlyAccess ?? model('EarlyAccess', EarlyAccessSchema);

export default EarlyAccess;
