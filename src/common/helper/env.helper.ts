import { existsSync } from 'fs';
import { resolve } from 'path';

export const getEnvPath = (dest: string) => {
  const env: string | undefined = process.env.NODE_ENV;
  console.log(env);
  const fallback = resolve(`${dest}/.env`);
  const filename = env ? `${env}.env` : 'development.env';
  console.log(filename);
  let filePath = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
};
