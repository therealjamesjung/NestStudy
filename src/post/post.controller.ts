import { Controller, Get, Param } from '@nestjs/common';

@Controller('post')
export class PostController {
    @Get()
    getAllPosts() {
        return "All posts"
    }

    @Get('/:id')
    getSinglePost(@Param('id') id: string) {
        return id
    }
}
