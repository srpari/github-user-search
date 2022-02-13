/* eslint-disable jest/valid-expect */
import { render } from '@testing-library/react';
import App from './App';


test('App renders correctly', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const wrapper = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const welcome = wrapper.getByText('Search Type');
  // eslint-disable-next-line no-unused-expressions
  expect(welcome).toBeDefined;
});
