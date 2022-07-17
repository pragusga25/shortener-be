import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-shortUrl.dto';
import { UrlService } from './url.service';

@Controller('v1/url')
export class UrlController {
  constructor(private readonly service: UrlService) {}

  @Post()
  create(@Body() body: CreateShortUrlDto) {
    return this.service.create(body);
  }

  @Get('/:code')
  get(@Param('code') code: string) {
    return this.service.get(code);
  }
}
