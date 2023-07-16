import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function createUser(userInput) {
  try {
    const newUser = db.users.create({
      data: {
        email: userInput.email,
        name: userInput.name,
        password: userInput.password,
      },
    });
    return newUser;
  } catch (error) {}
}
