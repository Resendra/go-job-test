import { Controller, Post, BadRequestException, Body, HttpCode } from '@nestjs/common';
import { UtilsService } from './utils/index';

@Controller()
export class AppController {
  constructor(private readonly utils: UtilsService) { }

  @Post('closest-to-zero')
  @HttpCode(200)
  closestToZero(@Body() numbers: number[]): { result: number } {
    try {
      return { result: this.utils.getClosestToZero(numbers) };
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
