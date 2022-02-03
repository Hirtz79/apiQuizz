import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class User {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  pseudo: string;

  @ApiProperty()
  @IsNumber()
  score: number;
}
