import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function createUser(userInput) {
  try {
    const newUser = db.users.create({
      data: {
        name: userInput.name,
        email: userInput.email,
        password: userInput.password,
      },
    });
    return newUser;
  } catch (error) {
    console.log('ERROR createUser ==>', error);
    throw error;
  }
}
