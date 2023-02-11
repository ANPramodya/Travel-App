import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTopPlaceDto {
  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  description: string;

  @IsString()
  rating: string;

  @IsString()
  type: string;
}
