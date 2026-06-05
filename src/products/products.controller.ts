import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    
    getProductById(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.getProductById(id);
    }

    @Post()
    createProduct(@Body() createProductDto: { name: string; price: number; stock: number; category: string }) {
        return this.productsService.createProduct(createProductDto);
    }

    @Put(':id')
    updateProduct(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<{ name: string; price: number; stock: number; category: string }>) {
        return this.productsService.updateProduct(id, updateData);
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.deleteProduct(id);
    }
}
