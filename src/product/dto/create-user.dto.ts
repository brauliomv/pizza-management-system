import { BadRequestException } from "@nestjs/common";
import { Allow, IsString, MinLength } from "class-validator";

export class createUserDTO{

  //Para hacer validaciones de los datos que se están pasando, se declaran las variables como private y se crean los get y set
  //  private _name : string;
  //  private _department : string;
  //  private _email : string;
  //  private _password : string;

  //  get name(){
  //    return this._name;
  //  }

  //  set name(value){
     
  //    if(typeof value !== 'string'){
  //       throw new BadRequestException('Formato de nombre inválido!');
  //    }

  //    if(value.length < 3){
  //       throw new BadRequestException('Name must be at least 3 characters length!');
  //    }
  //    this._name = value;
  //  }

  //  get department(){
  //   return this._department;
  //  }

  //  set department(value){
  //   this._department = value;
  // }

  //  get email(){
  //   return this._email;
  //  }

  //  set email(value){
  //   this._email = value;
  // }


  //  get password(){
  //   return this._password;
  //  }

  //  set password(value){
  //   this._password = value;
  // }

  //Validaciones a través de class-validator
  @IsString()
  @MinLength(3)
  name:string;

  @IsString()
  @MinLength(3)
  department:string

  @IsString()
  @MinLength(3)
  email:string

  @IsString()
  @MinLength(8)
  password:string

  @Allow()//Permite que los elementos con este decorador pasen el request sin necesidad de estar validados como los elementos anteriores
  active:boolean
}
