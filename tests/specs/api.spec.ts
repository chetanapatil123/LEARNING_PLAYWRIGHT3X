import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  const apiUrl = process.env.API_URL || 'http://localhost:3000/api';

  test('should fetch users list', async ({ request }) => {
    const response = await request.get(`${apiUrl}/users`);
    expect(response.status()).toBe(200);
    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
  });

  test('should create a new user', async ({ request }) => {
    const newUser = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    };
    const response = await request.post(`${apiUrl}/users`, {
      data: newUser,
    });
    expect(response.status()).toBe(201);
    const createdUser = await response.json();
    expect(createdUser.email).toBe(newUser.email);
  });

  test('should get user by id', async ({ request }) => {
    const response = await request.get(`${apiUrl}/users/1`);
    expect([200, 404]).toContain(response.status());
  });
});
