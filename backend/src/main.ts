import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: process.env.FRONTEND_DOMAIN
	});
	app.setGlobalPrefix('api');
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(process.env.SERVER_PORT);
}
bootstrap();
