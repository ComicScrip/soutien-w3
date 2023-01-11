import { ApolloError } from "apollo-server";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import db from "../db";
import Wilder, { WilderInput } from "../entity/Wilder";

@Resolver(Wilder)
export class WilderResolver {
  @Query(() => [Wilder])
  async wilders(): Promise<Wilder[]> {
    const wilders = await db
      .getRepository(Wilder)
      .find({ relations: { grades: { skill: true } } });

    return wilders.map((w) => ({
      ...w,
      skills: w.grades.map((g) => ({
        id: g.skill.id,
        name: g.skill.name,
        votes: g.votes,
      })),
    }));
  }

  @Query(() => Wilder)
  async wilder(@Arg("id") id: number): Promise<Wilder> {
    const wilder = await db.getRepository(Wilder).findOne({
      where: { id },
      relations: { grades: { skill: true } },
    });
    if (wilder === null) throw new ApolloError("wilder not found", "NOT_FOUND");
    return {
      ...wilder,
      skills: wilder.grades.map((g) => {
        return {
          id: g.skill.id,
          name: g.skill.name,
          votes: g.votes,
        };
      }),
    };
  }

  @Mutation(() => Wilder)
  async createWilder(@Arg("data") data: WilderInput): Promise<Wilder> {
    return await db.getRepository(Wilder).save(data);
  }

  @Mutation(() => Boolean)
  async deleteWilder(@Arg("id") id: number): Promise<boolean> {
    const { affected } = await db.getRepository(Wilder).delete(id);
    if (affected === 0) throw new ApolloError("wilder not found", "NOT_FOUND");
    return true;
  }
}
