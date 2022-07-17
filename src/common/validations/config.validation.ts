import * as Joi from '@hapi/joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.required()
    .valid('development', 'production', 'test')
    .default('development'),
  PORT: Joi.number().required().default(3000),
  DATABASE_HOST: Joi.string().required().default('localhost'),
  DATABASE_PORT: Joi.number().required().default(15432),
  DATABASE_USER: Joi.string().required().default('postgres'),
  DATABASE_PASSWORD: Joi.string().required().default('postgres'),
});
