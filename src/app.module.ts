import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from 'common/helper/env.helper';
import { validationSchema } from 'common/validations/config.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'shared/typeorm/typeorm.service';
import { ApiModule } from 'api/api.module';
import { AppController } from 'app.controller';

const envFilePath = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true, validationSchema }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
