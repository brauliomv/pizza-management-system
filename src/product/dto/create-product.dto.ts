//El DTO(Data Transfer Object) sirve para definir los tipos de datos que se recibirán y se guardarán en la base de datos

export class createProductDto{
    code:number
    name:string
    price:number
    unit:number
    tax:number
}