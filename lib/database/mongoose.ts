import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseConnection =
  (global as { mongoose?: MongooseCache }).mongoose ||
  ({} as MongooseConnection);

if (!cached) {
  cached = (global as { mongoose?: MongooseCache }).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MongoDB URL');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'sherpa-community-manager',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
