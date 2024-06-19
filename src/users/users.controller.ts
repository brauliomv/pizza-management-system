import { Body, Controller, Get, Post} from '@nestjs/common';
import { createUserDTO } from 'src/product/dto/create-user.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(){
        return 'Users list';
    }

    //Capturar los elementos del request, para ello se hace uso de Body
    @Post()     
    createUser(//Podemos especificar los tipos de datos para que sea mas seguro
        @Body() body:createUserDTO,
        // @Body('name') name:string,
        // @Body('department') department:string, Todos estos datos se obtienen desde ek DTO
        // @Body('email') email:string,
        // @Body('password') password:string
        ){
        return {
            message : 'Creating new user',
            data: body
        };
    }
}
