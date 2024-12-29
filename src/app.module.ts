import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({ ...config, autoLoadEntities: false }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
