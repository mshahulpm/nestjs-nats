import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersResolver } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    providers: [UsersResolver, UsersService, PrismaService],
    imports: [
        ClientsModule.register([
            {
                name: 'S1_SERVICE',
                transport: Transport.NATS,
                options: {
                    servers: ['nats://localhost:4222'],
                    queue: 's1_queue',
                }
            },
        ]),
    ]
})
export class UsersModule { }
