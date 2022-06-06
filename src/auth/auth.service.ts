import { Injectable, Req } from "@nestjs/common";
import { PrismaClient, User, Bookmark } from '@prisma/client'
import { Request } from "express";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';


@Injectable()
export class AuthService {
    
    constructor(
        private Prisma: PrismaService
    ){}

    login(){
        this.Prisma.user.findUnique
        return {msg: 'Hello from service'};
    }

    async regiser(user: AuthDto) {
        const hasah = await argon.hash(user.password);
        const crateUser = await this.Prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: hasah,
                phone: user.phone
            }
        })
        return crateUser;
    }
}