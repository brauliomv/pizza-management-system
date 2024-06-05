import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')//Asignar nombre a la tabla
export class Product{

    //@Column transforma las propiedades de la entidad en los campos de la tabla
   
    @PrimaryGeneratedColumn()//Genera el id de forma automática
    id:number

    @Column({unique:true})
    code:number

    @Column()
    name:string

    @Column({type:'decimal', precision:10, scale:2})//Tipo de dato con valor decimal
    price:number

    @Column()
    unit:number 

    @Column({type:'decimal', precision:10, scale:2})
    tax:number
}