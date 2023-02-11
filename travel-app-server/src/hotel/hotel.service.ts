import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(private prisma: PrismaService) {}
  async create(createHotelDto: CreateHotelDto) {
    const hotel = await this.prisma.hotel.create({
      data: {
        title: createHotelDto.title,
        location: createHotelDto.location,
        pricePerDay: createHotelDto.pricePerDay,
        type: createHotelDto.type,
        image:createHotelDto.image,
        rating: createHotelDto.rating,
      },
    });
    return hotel;
  }

  async findAll() {
    const hotels = await this.prisma.hotel.findMany();
    return hotels;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
