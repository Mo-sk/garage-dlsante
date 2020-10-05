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
  import { CarService } from './car.service';
  import { CreateCarDTO } from './dto/createCar.dto';
  
  @Controller('car')
  export class CarController {
    constructor(private carService: CarService) {}
  
    //Create a car
    @Post('/create')
    async addCar(@Res() res, @Body() createCarDTO: CreateCarDTO) {
      const car = await this.carService.addCar(createCarDTO);
      return res.status(HttpStatus.OK).json({
        message: 'The car was created successfully',
        car,
      });
    }
  
    //Get all the cars
    @Get('cars')
    async getAllCars(@Res() res) {
      const cars = await this.carService.getAllCars();
      return res.status(HttpStatus.OK).json(cars);
    }
  
    //Get a specific car through ID
    @Get('car/:carID')
    async getCar(@Res() res, @Param('carID') carID) {
      const car = await this.carService.getCar(carID);
      if (!car) throw new NotFoundException('The car does not exist !');
      return res.status(HttpStatus.OK).json(car);
    }
  
    //Get the user of a car
    @Get('car/:carID/user')
    async getUserOfCar(@Res() res, @Param('carID') carID) {
      const user = await this.carService.getUserOfCar(carID);
      return res.status(HttpStatus.OK).json(user);
    }
  
    //Update a car in the list 
    @Put('/update')
    async updateCar(
      @Res() res,
      @Query('carID') carID,
      @Body() createCarDTO: CreateCarDTO,
    ) {
      const car = await this.carService.updateCar(carID, createCarDTO);
      if (!car) throw new NotFoundException('The car does not exist !');
      return res.status(HttpStatus.OK).json({
        message: 'The car was updated with success',
        car,
      });
    }
  
    //Delete a car from the list
    @Delete('/delete')
    async deleteCar(@Res() res, @Query('carID') carID) {
      const car = await this.carService.deleteCar(carID);
      if (!car) throw new NotFoundException('The car does not exist !');
      return res.status(HttpStatus.OK).json({
        message: 'The car was deleted',
        car,
      });
    }
  }