import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserProvider } from './user/user';
import { UserController } from './user/user.controller';
import { User } from './user/user.interface';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, User, UserProvider],
})
export class AppModule {}
