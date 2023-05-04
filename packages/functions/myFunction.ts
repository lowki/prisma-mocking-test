import dbClient from '@/core/db';

export const getUsers = async (name) => {
  const users = await dbClient.user.findMany({
    where: {
      name
    }
  });
return users;
};