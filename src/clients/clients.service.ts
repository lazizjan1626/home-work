import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientsDocument } from './schemas/client.schema';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name)private clientModel: Model<ClientsDocument>,){}

  async create(name: string, email: string): Promise<Client> {
    const newUser = new this.clientModel({ name, email });
    return newUser.save();
  }


  findAll() {
    return this.clientModel.find().exec();
  }

  async findOne(id: number): Promise<Client> {
    const menager = await this.clientModel.findById(id).exec();
    if (!menager) {
      throw new NotFoundException(`Menager with ID ${id} not found`);
    }
    return menager;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(id, updateClientDto, { new: true });
  }
  // delete client by id
  remove(id: number) {
    return this.clientModel.findByIdAndDelete(id);
  }
}