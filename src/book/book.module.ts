import { Module } from '@nestjs/common';
import { BookController } from './controllers/book/book.controller';
import { BookService } from './services/book/book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Book',
      schema: BookSchema
    }
  ])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
