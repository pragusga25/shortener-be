import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShortUrlDto } from './dto/create-shortUrl.dto';
import { Url } from './url.entity';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url) private readonly repository: Repository<Url>,
  ) {}

  create(data: CreateShortUrlDto) {
    const url = this.repository.create(data);
    return this.repository.save(url);
  }

  get(code: string) {
    return this.repository.findOne({
      where: { code },
    });
  }
}
