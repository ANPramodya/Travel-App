import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TopPlaceService } from './top-place.service';
import { CreateTopPlaceDto } from './dto/create-top-place.dto';
import { UpdateTopPlaceDto } from './dto/update-top-place.dto';

@Controller('top-place')
export class TopPlaceController {
  constructor(private readonly topPlaceService: TopPlaceService) {}

  @Post('new')
  create(@Body() createTopPlaceDto: CreateTopPlaceDto) {
    return this.topPlaceService.create(createTopPlaceDto);
  }

  @Get()
  findAll() {
    return this.topPlaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topPlaceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTopPlaceDto: UpdateTopPlaceDto,
  ) {
    return this.topPlaceService.update(+id, updateTopPlaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.topPlaceService.remove(+id);
  }
}
