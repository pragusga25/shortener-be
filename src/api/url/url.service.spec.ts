import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  const mockUrlRepository = {
    create: jest.fn((dto) => dto),
    save: jest.fn((url) =>
      Promise.resolve({
        id: Math.random().toString(),
        ...url,
      }),
    ),
    findOne: jest.fn((options) => ({
      code: options.where.code,
      longUrl: `https://${Math.random().toString()}`,
      id: Math.random().toString(),
      createdAt: new Date(),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlService,
        {
          provide: getRepositoryToken(Url),
          useValue: mockUrlRepository,
        },
      ],
    }).compile();

    service = module.get<UrlService>(UrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new url record and return that', async () => {
    const dto = {
      longUrl: 'http://test.com',
      code: 'test',
    };

    expect(await service.create(dto)).toEqual({
      id: expect.any(String),
      ...dto,
    });
  });

  it('should get a url record by code', async () => {
    expect(await service.get('test')).toEqual({
      code: 'test',
      longUrl: expect.any(String),
      id: expect.any(String),
      createdAt: expect.any(Date),
    });
  });
});
