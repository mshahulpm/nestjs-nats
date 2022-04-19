import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('s2_user_reject')
  async rejectedUser(id: string) {
    await this.appService.rejectUser(id)
  }

  @EventPattern('s2_user_approve')
  async approvedUser(id: string) {
    await this.appService.approveUser(id)
  }

  @MessagePattern({ cmd: "s2_rejected_user" })
  async rejectedUserS2(data: any) {
    return await this.appService.recjectedUsers()
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
