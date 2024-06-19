//El DTO(Data Transfer Object) sirve para definir los tipos de datos que se recibirán y se guardarán en la base de datos

import { IsDecimal, IsInt, IsNumber, IsString, MinLength } from "class-validator"

export class createProductDto{

    @IsInt()
    @MinLength(1)
    code:number

    @IsString()
    @MinLength(1)
    name:string

    @IsNumber({maxDecimalPlaces:2})
    @MinLength(1)
    price:number

    @IsInt()
    @MinLength(1)
    unit:number

    @IsDecimal()
    @MinLength(1)
    tax:number
}