import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { STATUS_CODES } from 'http';

@Controller('clients')
export class ClientsController {

    clients = ['Solomeo Casas','Elmer Homero', 'Elma Mado'];

    //Obtener los registros
    @Get()
    findClients(){
        return {
            message: "Lista de clientes registrados",
            list: this.clients,

        } ;
    }

    clientes = [{
                id:1,
                name:'Elma Mon',
                age:20
            },{
                id:2,
                name:'jarry',
                age:25
            },{
                id:3,
                name:'Ronnie',
                age:19
            }
        ];

    @Get(':id')//Dos puntos sirven para que el parámetro sea dinámico
    findClient(@Param('id',ParseIntPipe) id:number){//ParseIntPipe se usa para validar que el id sea estrictamente un número entero
        if(id < this.clientes.length){
            return {       
                message : "Los Datos del cliente son:",
                data: this.clientes[id],   
            };
        }else{
            return 'No hay información';
        }
        
                
    }

    //Ejemplo con 2 parámetros dinámicos
    @Get(':client_id/client_details/:address_id')
    getAnotherClient(@Param('client_id') client_id:number, @Param('address_id') address_id:string){
        return{
            message:'This is the response',
            data: {
                client_id: client_id,
                address_id : address_id
            }
        }
    }

    //Insertar un nuevo registro
    @Post('http-code')
    @HttpCode(HttpStatus.ACCEPTED)//Agregar un código de estado
    createClient(){
        this.clients.push('Elma Nolangas');
        return this.clients;
    }

    //Actualizar un registro
    @Patch()
    updateClient(){
        this.clients[2] = 'Alma María';
        return this.clients ;
    }

    @Delete(':id')
    deleteClient(@Body() deleteClientDto:any, @Param('id') id:string){
        return deleteClientDto;
    }
}
