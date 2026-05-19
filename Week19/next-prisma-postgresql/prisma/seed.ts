import prisma from "@/lib/prisma";
import { Prisma } from "../app/generated/prisma/client";
import "dotenv/config";




const userData: Prisma.UserCreateInput[] = [
  {
    username: "Alice",
    password: "alice@prisma.io",
  },
  {
    username: "Bob",
    password: "bob@prisma.io",
  },
];

export async function main() {
  for (const user of userData) {
    await prisma.user.create({ data: user });
  }
}

main();