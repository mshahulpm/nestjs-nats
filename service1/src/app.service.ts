import { Injectable, Inject } from '@nestjs/common';
import { MessagePattern, ClientProxy, Payload } from '@nestjs/microservices';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) { }

  async rejectUser(id: string) {
    await this.prisma.user.update({
      where: {
        id
      },
      data: {
        rejected: true,
        isProcessing: false
      }
    })
  }


  async approveUser(id: string) {
    await this.prisma.user.update({
      where: {
        id
      },
      data: {
        approved: true,
        isProcessing: false
      }
    })
  }

  async recjectedUsers() {
    return this.prisma.user.findMany({
      where: {
        rejected: true
      }
    })
  }



  getHello(): string {
    return 'Hello World!';
  }
}
