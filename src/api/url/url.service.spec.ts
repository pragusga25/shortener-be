import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Url } from './url.entity';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  const mockUrlRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((url) =>
      Promise.resolve({
        id: Math.random().toString(),
        ...url,
      }),
    ),
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
});
