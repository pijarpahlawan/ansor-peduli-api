import { ApiProperty } from '@nestjs/swagger';

export class PhilanthropyMetadataDto {
  @ApiProperty()
  initiator: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  banner: any;

  @ApiProperty()
  description: string;

  @ApiProperty()
  target: number;

  @ApiProperty()
  deadline: Date;
}

export class PhilanthropyDataDto {
  @ApiProperty()
  philanthropyId: number;

  @ApiProperty()
  initiator: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  bannerPath: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  target: number;

  @ApiProperty()
  current: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  deadline: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
