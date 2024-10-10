import { PartialType } from '@nestjs/swagger';
import { CreateMenagerDto } from './create-menager.dto';

export class UpdateMenagerDto extends PartialType(CreateMenagerDto) {}
