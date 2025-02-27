import {
    Controller,
    Get,
    Res,
    HttpStatus,
    Post,
    Body,
    Put,
    Query,
    NotFoundException,
    Delete,
    Param,
  } 
  from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDTO } from './dto/createUser.dto';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserService) {}
  
    //Create a user
    @Post('/create')
    async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
      const user = await this.userService.addUser(createUserDTO);
      return res.status(HttpStatus.OK).json({
        message: 'The user was created successfully',
        user,
      });
    }
  
    //Get all the users
    @Get('users')
    async getAllUsers(@Res() res) {
      const users = await this.userService.getAllUsers();
      return res.status(HttpStatus.OK).json(users);
    }
  
    //Get a specific user through ID
    @Get('user/:userID')
    async getUser(@Res() res, @Param('userID') userID) {
      const user = await this.userService.getUser(userID);
      if (!user) throw new NotFoundException('The user does not exist !');
      return res.status(HttpStatus.OK).json(user);
    }
  
    //Get all the cars of a user
    @Get('user/:userID/cars')
    async getAllCars(@Res() res, @Param('userID') userID) {
      const cars = await this.userService.getAllCarsOfUser(userID);
      return res.status(HttpStatus.OK).json(cars);
    }
  
    //Update a user in the list
    @Put('/update')
    async updateUser(
      @Res() res,
      @Query('userID') userID,
      @Body() createUserDTO: CreateUserDTO,
    ) {
      const user = await this.userService.updateUser(userID, createUserDTO);
      if (!user) throw new NotFoundException('The user does not exist !');
      return res.status(HttpStatus.OK).json({
        message: 'The user was updated with success',
        user,
      });
    }
  
    //Delete a user from the list
    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID) {
      const user = await this.userService.deleteUser(userID);
      if (!user) throw new NotFoundException('The user does not exist');
      return res.status(HttpStatus.OK).json({
        message: 'The user was deleted',
        user,
      });
    }
  }