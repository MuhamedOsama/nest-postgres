import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({
        required: true,
        type: String,
        name: 'title',
        description: 'product\'s title'
    })
    title: string;
    @ApiProperty({
        required: false,
        type: String,
        name: 'description',
        description: 'product\'s description'
    })
    description: string;
    @ApiProperty({
        required: true,
        type: Number,
        name: 'description',
        description: 'product\'s price'
    })
    price: number;
}
