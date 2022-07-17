import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateShortUrlDto {
  @IsUrl()
  @IsNotEmpty()
  longUrl: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
