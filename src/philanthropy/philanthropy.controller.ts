import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { PhilanthropyService } from './philanthropy.service';

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

  @Get(':id')
  async getPhilanthropyById(@Param('id') params: any) {
    const philanthropyId = params.id;
    const philanthropy =
      this.philanthropyService.getPhilanthropyById(philanthropyId);

    return {
      statusCode: HttpStatus.OK,
      message: 'success',
      data: philanthropy,
    };
  }
}
