import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.usersService.getUserById(id);
    }

    @Post()
    createUser(
        @Body() createUserDto: CreateUserDto,
    ) {
        return this.usersService.createUser(
            createUserDto,
        );
    }

    @Put(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateData: Partial<CreateUserDto>,
    ) {
        return this.usersService.updateUser(
            id,
            updateData,
        );
    }

    @Delete(':id')
    deleteUser(
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.usersService.deleteUser(id);
    }
}