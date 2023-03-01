const addNums = (num1, num2) => num1 + num2;

test('test addNums function', () => {
  expect(addNums(3, 2)).toBe(5);
});

test('test device array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/devices`)
      .then(resp => resp.data)
      .then(resp => {
        expect(resp[0].user).toEqual('mary123');
      });
    });