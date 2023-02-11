import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService){}
 async create(createPlaceDto: CreatePlaceDto) {
    const place = await this.prisma.place.create({
      data:{
        image: createPlaceDto.image,
        title: createPlaceDto.title,
        location: createPlaceDto.location,
        description: createPlaceDto.description,
        rating: createPlaceDto.rating,
        type: createPlaceDto.type

      }
    })
    return place;
  }

  async findAll() {
    const places = await this.prisma.place.findMany();
    return places;
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
