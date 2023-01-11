import { Length, Min } from "class-validator";
import { Field, InputType, Int, ObjectType } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
@ObjectType()
class Product {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  image: string;

  @Field()
  @Column({ type: "float" })
  price: number;
}

@InputType()
export class ProductInput {
  @Field()
  @Length(1, 50)
  name: string;

  @Field()
  @Length(1, 200)
  image: string;

  @Field()
  @Min(0)
  price: number;
}
export default Product;
