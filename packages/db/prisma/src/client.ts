import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Connection handling
const connectPrisma = async () => {
  try {
    await prisma.$connect();
    console.log('Prisma connected successfully');
    return prisma;
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

// Disconnect function for cleanup
const disconnectPrisma = async () => {
  try {
    await prisma.$disconnect();
    console.log('Prisma disconnected successfully');
  } catch (error) {
    console.error('Error disconnecting from database:', error);
    process.exit(1);
  }
};

export { prisma, connectPrisma, disconnectPrisma };
