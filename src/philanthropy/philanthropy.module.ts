import { Module } from '@nestjs/common';
import { PhilanthropyService } from './philanthropy.service';
import { PhilanthropyController } from './philanthropy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Philanthropy } from 'src/entities/Philanthropy';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [TypeOrmModule.forFeature([Philanthropy]), CloudinaryModule],
  providers: [PhilanthropyService],
  controllers: [PhilanthropyController],
})
export class PhilanthropyModule {}
