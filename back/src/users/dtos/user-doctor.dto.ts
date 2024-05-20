import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateDoctorDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly gender: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly id_number: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  readonly date_of_birth: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

export class UpdatePatientDto extends PartialType(CreateDoctorDto) {}
