import { PartialType } from '@nestjs/mapped-types';
import { CreateTopPlaceDto } from './create-top-place.dto';

export class UpdateTopPlaceDto extends PartialType(CreateTopPlaceDto) {}
