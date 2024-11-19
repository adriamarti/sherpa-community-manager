import { Schema, model, models, Document } from 'mongoose';

export interface IGoogleReviewGeneratedAnswer extends Document {
  text: string;
  createAt: Date;
  updatedAt: Date;
}

const GoogleReviewGeneratedAnswerSchema = new Schema({
  text: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const GoogleReviewGeneratedAnswer =
  models?.GoogleReviewGeneratedAnswer ||
  model('GoogleReviewGeneratedAnswer', GoogleReviewGeneratedAnswerSchema);

export default GoogleReviewGeneratedAnswer;
