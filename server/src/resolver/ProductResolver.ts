import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../db";
import Product, { ProductInput } from "../entity/Product";

@Resolver(() => Product)
export class ProductResolver {
  @Mutation(() => Product)
  async addProduct(@Arg("product") product: ProductInput): Promise<Product> {
    return await db.getRepository(Product).save(product);
  }

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await db.getRepository(Product).find();
  }
}
