import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsString()
  rating: string;

  @IsNotEmpty()
  @IsString()
  pricePerDay: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
