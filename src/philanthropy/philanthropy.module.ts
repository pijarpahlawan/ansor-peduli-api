import { Module } from '@nestjs/common';
import { PhilanthropyService } from './philanthropy.service';
import { PhilanthropyController } from './philanthropy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Philanthropy } from 'src/entities/Philanthropy';

@Module({
  imports: [TypeOrmModule.forFeature([Philanthropy])],
  providers: [PhilanthropyService],
  controllers: [PhilanthropyController],
})
export class PhilanthropyModule {}
