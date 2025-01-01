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
import { Docs } from 'src/common/decorators/docs.decorator';
import {
  GetPhilanthropiesResponseDto,
  GetPhilanthropyResponseDto,
  CreatePhilanthropyResponseDto,
  DeletePhilanthropyResponseDto,
} from './dtos/response.dto';
import { ApiConsumes } from '@nestjs/swagger';

@Controller('philanthropy')
export class PhilanthropyController {
  constructor(private readonly philanthropyService: PhilanthropyService) {}

  @Docs('Get all philanthropies', {
    type: GetPhilanthropiesResponseDto,
    status: HttpStatus.OK,
  })
  @Get()
  async getPhilanthropies() {
    const philanthropies = await this.philanthropyService.getPhilanthropies();

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: philanthropies,
    };
  }

  @Docs('Get a philanthropy by ID', {
    type: GetPhilanthropyResponseDto,
    status: HttpStatus.OK,
  })
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

  @Docs('Create a philanthropy', {
    type: CreatePhilanthropyResponseDto,
    status: HttpStatus.CREATED,
  })
  @ApiConsumes('multipart/form-data')
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
      statusCode: HttpStatus.CREATED,
      message: 'success',
      data: createdPhilanthropy,
    };
  }

  @Docs('Update a philanthropy by ID', {
    type: GetPhilanthropyResponseDto,
    status: HttpStatus.OK,
  })
  @ApiConsumes('multipart/form-data')
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

  @Docs('Delete a philanthropy by ID', {
    type: DeletePhilanthropyResponseDto,
    status: HttpStatus.OK,
  })
  @Delete(':philanthropyId')
  async deletePhilanthropy(@Param('philanthropyId') philanthropyId: number) {
    await this.philanthropyService.deletePhilanthropy(philanthropyId);

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
    };
  }
}
