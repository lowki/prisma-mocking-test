// packages/test/functions/myFunction.test.ts
import { it, vi, expect } from 'vitest';
import { getUsers } from '@/functions/myFunction';
import dbClient from '@/core/db/__mocks__/db';
import { User } from '@prisma/client';

vi.mock('@/core/db', () => {
  return {
    default: () => dbClient
  };
});

it('should return users matching name', async () => {
  const user:User = {id: 1, name: 'test', };
  dbClient.user.findMany.mockResolvedValue([user]);
  const result = await getUsers('test');
  expect(result).toMatchObject([user]);
});