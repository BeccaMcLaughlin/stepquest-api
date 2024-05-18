import * as dotenv from 'dotenv';

dotenv.config();

export type Configuration = {
    NODE_ENV: string;
    PORT: number;
    APP_NAME: string;
    APP_DATABASE_URL: string;
    APP_LOG_LEVEL: string;
    APP_GEMINI_API_KEY: string;
    APP_GEMINI_MODEL: string;
};

export const Config: Configuration = {
  NODE_ENV: process.env.NODE_ENV || 'production',
  PORT: +(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME || 'stepquest-api',
  APP_DATABASE_URL: process.env.APP_DATABASE_URL || '',
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || 'info',
  APP_GEMINI_API_KEY: process.env.APP_GEMINI_API_KEY || '',
  APP_GEMINI_MODEL: process.env.APP_GEMINI_MODEL || '',
};
