import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });





async function main() {
  await prisma.$connect()
  console.log("connected")

  const user = await prisma.user.create({
    data: {
      email: "test4@example.com",
      name: "test4",
      password: "123456",
      age: 20,
    },
  })

  console.log(user)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

