import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateMenagerDto {

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;


    @IsString()
    password: string;


    @IsNumber()
    restarand_id:number;
}
