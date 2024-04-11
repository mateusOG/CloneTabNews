test("GET to api/v1/status should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const resBody = await res.json();
  expect(resBody.updated_at).toBeDefined();

  const parsedUpdateAt = new Date(resBody.updated_at).toISOString();
  expect(resBody.updated_at).toEqual(parsedUpdateAt);

  expect(resBody.depedencies.database.version).toEqual("16.0");
  expect(resBody.depedencies.database.max_connections).toEqual(262143);
  expect(resBody.depedencies.database.opened_connections).toEqual(1);
});
