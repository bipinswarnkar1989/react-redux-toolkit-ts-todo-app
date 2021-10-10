// src/mocks/handlers.js
import { rest } from 'msw';

export const apiUrl = 'https://jsonplaceholder.typicode.com';

export const handlers = [
  rest.post(`${apiUrl}/todos`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        userId: 1,
        id: 1,
        title: 'testing todo',
        completed: false,
      })
    );
  }),

  rest.get(`${apiUrl}/todos`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const userId = query.get('userId');
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
      ])
    );
  }),

  rest.get(`${apiUrl}/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
        },
      ])
    );
  }),

  rest.delete(`${apiUrl}/users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
        },
      ])
    );
  }),
];
