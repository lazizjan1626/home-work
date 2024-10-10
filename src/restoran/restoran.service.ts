import { Injectable } from '@nestjs/common';
import { CreateRestoranDto } from './dto/create-restoran.dto';
import { UpdateRestoranDto } from './dto/update-restoran.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restoran, RestoranDocument } from './schemas/restoran.schema';
import { Model } from 'mongoose';

@Injectable()
export class RestoranService {
  constructor(
    @InjectModel(Restoran.name) private restorannModel: Model<RestoranDocument>,
  ){}
  create(createRestoranDto: CreateRestoranDto) {
    return this.restorannModel.create(createRestoranDto);
  }

  findAll() {
    return this.restorannModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} restoran`;
  }

  update(id: number, updateRestoranDto: UpdateRestoranDto) {
    return `This action updates a #${id} restoran`;
  }

  remove(id: number) {
    return `This action removes a #${id} restoran`;
  }
}
