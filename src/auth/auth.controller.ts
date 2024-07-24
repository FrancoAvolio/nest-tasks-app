import { Controller, Get } from '@nestjs/common';

@Controller({})
export class AuthController {
  @Get('/auth')
  getAllAuth() {
    return 'Obteniendo auths';
  }
}
