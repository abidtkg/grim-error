import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {

    constructor(
        private Auth: AuthService
    ){}

    @Post('login')
    login(){
        return this.Auth.login();
    }

    @Post('register')
    register(@Body() dto: AuthDto){
        return this.Auth.regiser(dto);
    }
}