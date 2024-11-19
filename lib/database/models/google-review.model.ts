import { Schema, model, models, Document } from 'mongoose';

import { IGoogleReviewGeneratedAnswer } from './google-review-generated-answer.model';

export interface IGoogleReview extends Document {
  text: string;
  sentiment: number;
  generatedAnswers: IGoogleReviewGeneratedAnswer[];
  createAt: Date;
  updatedAt: Date;
}

const GoogleReviewSchema = new Schema({
  text: { type: String, required: true },
  sentiment: { type: Number, required: true },
  generatedAnswers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const GoogleReview =
  models?.GoogleReview || model('GoogleReview', GoogleReviewSchema);

export default GoogleReview;
