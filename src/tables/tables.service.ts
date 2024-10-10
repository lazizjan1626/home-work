import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restoran, RestoranDocument } from 'src/restoran/schemas/restoran.schema';
import { Model } from 'mongoose';
import { Tables, TablesDocument } from './schemas/table.schema';

@Injectable()
export class TablesService {
  constructor(
    @InjectModel(Restoran.name) private restoranModel: Model<RestoranDocument>,
    @InjectModel(Tables.name) private tablesModel: Model<TablesDocument>,
  ){}
  async create(createTableDto: CreateTableDto) {
    const {restoran_id} = createTableDto;
    const restoran = await this.restoranModel.findById(restoran_id);
    if(!restoran){
      throw new BadRequestException("Not found like this restoran");
    }
    const newTable = await this.tablesModel.create(createTableDto);
    restoran.tables.push(newTable);
    await restoran.save();
    return newTable;
  }

  findAll() {
    return this.tablesModel.find().populate('restoran_id');
  }

  findOne(id: number) {
    return `This action returns a #${id} table`;
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return `This action updates a #${id} table`;
  }

  remove(id: number) {
    return `This action removes a #${id} table`;
  }
}
