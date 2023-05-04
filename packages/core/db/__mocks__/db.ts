// packages/core/db/__mocks__/db.ts
import { Prisma, PrismaClient, User } from '@prisma/client';
import { beforeEach } from 'vitest';
import { mockDeep, mockReset } from 'vitest-mock-extended';

beforeEach(() => {
  mockReset(dbClient);
});

const dbClient = mockDeep<PrismaClient>();
export default dbClient;
