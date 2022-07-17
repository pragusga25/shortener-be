import { Test, TestingModule } from '@nestjs/testing';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

describe('UrlController', () => {
  let controller: UrlController;

  const mockUrlService = {
    create: jest.fn((dto) => ({
      ...dto,
      id: Math.random().toString(),
      createdAt: new Date(),
    })),
    get: jest.fn((code) => ({
      code,
      longUrl: 'https://test.com',
      id: Math.random().toString(),
      createdAt: new Date(),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [UrlService],
    })
      .overrideProvider(UrlService)
      .useValue(mockUrlService)
      .compile();

    controller = module.get<UrlController>(UrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a url', () => {
    const dto = {
      longUrl: 'https://test.com',
      code: 'test',
    };
    expect(controller.create(dto)).toEqual({
      ...dto,
      id: expect.any(String),
      createdAt: expect.any(Date),
    });
  });

  it('should get a url', () => {
    expect(controller.get('test')).toEqual({
      code: 'test',
      longUrl: 'https://test.com',
      id: expect.any(String),
      createdAt: expect.any(Date),
    });
  });
});
