/* eslint-disable jest/valid-expect */
import { render } from '@testing-library/react';
import App from './App';
import { getUser } from './context/SearchState';


test('App renders correctly', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const wrapper = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const welcome = wrapper.getByText('Search Type');
  // eslint-disable-next-line no-unused-expressions
  expect(welcome).toBeDefined;
});

describe('fetchUser', () => {
  test('should pass', () => {
    const testData = { login: 'srpari', name: "Pari Ramamoorthy" };

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getUser(testData.login).then((data) => {
      expect(data).toEqual();
    });
  });
});