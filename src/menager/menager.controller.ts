import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenagerService } from './menager.service';
import { CreateMenagerDto } from './dto/create-menager.dto';
import { UpdateMenagerDto } from './dto/update-menager.dto';

@Controller('menager')
export class MenagerController {
  constructor(private readonly menagerService: MenagerService) {}

  @Post('create')
  async createmenager(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return await this.menagerService.create(name, email, password);
  }
  
  

  @Get()
  findAll() {
    return this.menagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenagerDto: UpdateMenagerDto) {
    return this.menagerService.update(+id, updateMenagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menagerService.remove(+id);
  }
}
