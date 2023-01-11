import { MaxLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Grade from "./Grade";

@ObjectType()
class SkillOfWilder {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  votes: number;
}

@ObjectType()
@Entity()
class Wilder {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  avatarUrl?: string;

  @OneToMany(() => Grade, (g) => g.wilder)
  grades: Grade[];

  @Field(() => [SkillOfWilder])
  skills: SkillOfWilder[];
}

@InputType()
export class WilderInput {
  @Field()
  @MaxLength(100)
  name: string;

  @Field({ nullable: true })
  @MaxLength(500)
  bio?: string;

  @Field({ nullable: true })
  @MaxLength(100)
  city?: string;

  @Field({ nullable: true })
  @MaxLength(200)
  avatarUrl?: string;
}

export default Wilder;
