import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import db from "./db";
import { ProductResolver } from "./resolver/ProductResolver";

async function start(): Promise<void> {
  await db.initialize();

  const schema = await buildSchema({
    resolvers: [ProductResolver],
  });

  const server = new ApolloServer({
    schema,
    cache: "bounded",
    csrfPrevention: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });
  await server.listen().then(({ url }) => {
    console.log(`server ready on ${url}`);
  });
}

start().catch(console.error);
