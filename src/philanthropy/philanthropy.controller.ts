import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PhilanthropyService } from './philanthropy.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhilanthropyMetadataDto } from './dtos/philanthropy.dto';

@Controller('philanthropy')
export class PhilanthropyController {
  constructor(private readonly philanthropyService: PhilanthropyService) {}

  @Get()
  async getPhilanthropies() {
    const philanthropies = await this.philanthropyService.getPhilanthropies();

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: philanthropies,
    };
  }

  @Get(':philanthropyId')
  async getPhilanthropyById(@Param('philanthropyId') philanthropyId: number) {
    const philanthropy =
      await this.philanthropyService.getPhilanthropyById(philanthropyId);

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: philanthropy,
    };
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('banner', {
      limits: {
        fileSize: 200 * 1024,
      },
    }),
  )
  async createPhilanthropy(
    @UploadedFile() banner: Express.Multer.File,
    @Body() metadata: PhilanthropyMetadataDto,
  ) {
    const createdPhilanthropy =
      await this.philanthropyService.createPhilanthropy(banner, metadata);

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: createdPhilanthropy,
    };
  }

  @Put(':philanthropyId')
  @UseInterceptors(
    FileInterceptor('banner', {
      limits: {
        fileSize: 200 * 1024,
      },
    }),
  )
  async updatePhilanthropy(
    @Param('philanthropyId') philanthropyId: number,
    @UploadedFile() banner: Express.Multer.File,
    @Body() metadata: PhilanthropyMetadataDto,
  ) {
    const updatedPhilanthropy =
      await this.philanthropyService.updatePhilanthropy(
        philanthropyId,
        banner,
        metadata,
      );

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: updatedPhilanthropy,
    };
  }

  @Delete(':philanthropyId')
  async deletePhilanthropy(@Param('philanthropyId') philanthropyId: number) {
    await this.philanthropyService.deletePhilanthropy(philanthropyId);

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
    };
  }
}
