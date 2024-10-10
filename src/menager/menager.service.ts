import { Injectable } from '@nestjs/common';
import { UpdateMenagerDto } from './dto/update-menager.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Menager, menagerDucument } from './schemas/menager.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MenagerService {
  constructor(@InjectModel(Menager.name)private menegaerModel: Model<menagerDucument>,){}
  async create(name: string, email: string, password: string): Promise<Menager> {
    const newmeneger = new this.menegaerModel();
    newmeneger.name = name;
    newmeneger.email = email;
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    newmeneger.password = hashedPassword;
  
    return newmeneger.save();
  }
  //findByEmail 
  async findUserByEmail(email: string): Promise<Menager> {
    return this.menegaerModel.findOne({ email });
  }
  findAll() {
    return `This action returns all menager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menager`;
  }

  update(id: number, updateMenagerDto: UpdateMenagerDto) {
    return `This action updates a #${id} menager`;
  }

  remove(id: number) {
    return `This action removes a #${id} menager`;
  }
}
