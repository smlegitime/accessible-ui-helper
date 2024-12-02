import { render, screen } from '@testing-library/react';
import App from '../App';

// to test: 
// 1. default elements are rendered on accessibility panel component
// 2. reroute to home page on scan because pages are empty 
// 3. clicking violations element updates active selections 
// 4. clicking fix all button updates active selections 
// 5. 

// test('fetches and displays user data', async () => {

//   // Create a mock response
//   const mockAxeResults = mock1
// //   axios.get.mockResolvedValue(mockResponse);

//   // Render the User component
//   render(<Scan />);
//   // Check if the mocked response is used in the component

//   const evaluationPassText = await waitFor(() => screen.getByText(/Ensure aria-hidden="true" is not present on the document body./i));
//   expect(evaluationPassText).toBeInTheDocument();

// });

test('navigates home page on scan because pages is empty', () => {
  render(
      <App />
  );
  expect(screen.getByText("Scan, review, and implement code fixes to improve your website’s accessibility to reach a wider audience")).toBeInTheDocument();
});