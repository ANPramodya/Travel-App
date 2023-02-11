import { Module } from '@nestjs/common';
import { TopPlaceService } from './top-place.service';
import { TopPlaceController } from './top-place.controller';

@Module({
  controllers: [TopPlaceController],
  providers: [TopPlaceService]
})
export class TopPlaceModule {}
