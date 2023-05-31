import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forRoot(process.env.DB_URL), TasksModule]
})
export class AppModule {}
