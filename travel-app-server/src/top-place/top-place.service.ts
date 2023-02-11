import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTopPlaceDto } from './dto/create-top-place.dto';
import { UpdateTopPlaceDto } from './dto/update-top-place.dto';

@Injectable()
export class TopPlaceService {
  constructor(private prisma: PrismaService) {}
  async create(createTopPlaceDto: CreateTopPlaceDto) {
    const topPlace = await this.prisma.topPlace.create({
      data: {
        image: createTopPlaceDto.image,
        title: createTopPlaceDto.title,
        location: createTopPlaceDto.location,
        description: createTopPlaceDto.description,
        rating: createTopPlaceDto.rating,
        type: createTopPlaceDto.type,
      },
    });
    return topPlace;
  }

  async findAll() {
    const topPlaces = await this.prisma.topPlace.findMany();
    return topPlaces;
  }

  findOne(id: number) {
    return `This action returns a #${id} topPlace`;
  }

  update(id: number, updateTopPlaceDto: UpdateTopPlaceDto) {
    return `This action updates a #${id} topPlace`;
  }

  remove(id: number) {
    return `This action removes a #${id} topPlace`;
  }
}
