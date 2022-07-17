import { getEnvPath } from './env.helper';

describe('Env Helper', () => {
  const OLD_ENV = process.env;

  afterAll(() => {
    process.env = { ...OLD_ENV };
  });

  it('should return developement.env path', () => {
    process.env.NODE_ENV = 'development';

    const dest = `${__dirname}/../envs`;
    expect(getEnvPath(dest)).toContain('development.env');
  });

  it('should return .env path', () => {
    process.env.NODE_ENV = 'test';

    const dest = `${__dirname}/../envs`;
    expect(getEnvPath(dest)).toContain('.env');
  });
});
