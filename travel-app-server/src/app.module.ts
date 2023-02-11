import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TopPlaceModule } from './top-place/top-place.module';
import { PlaceModule } from './place/place.module';
import { HotelModule } from './hotel/hotel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    TopPlaceModule,
    PlaceModule,
    HotelModule,
  ],
})
export class AppModule {}
