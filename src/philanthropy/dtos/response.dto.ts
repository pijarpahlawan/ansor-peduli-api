import { ApiProperty } from '@nestjs/swagger';
import { PhilanthropyDataDto } from './philanthropy.dto';

export class GetPhilanthropiesResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty({ type: [PhilanthropyDataDto] })
  data: PhilanthropyDataDto[];
}

export class GetPhilanthropyResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty({ type: PhilanthropyDataDto })
  data: PhilanthropyDataDto;
}

export class CreatePhilanthropyResponseDto {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: 'success' })
  message: string;

  @ApiProperty({ type: PhilanthropyDataDto })
  data: PhilanthropyDataDto;
}

export class DeletePhilanthropyResponseDto {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: 'success' })
  message: string;
}
