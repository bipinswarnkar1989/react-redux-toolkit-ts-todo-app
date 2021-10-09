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
];
