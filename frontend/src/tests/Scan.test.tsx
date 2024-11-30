import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import {Scan} from '../pages/Scan';


// Mocking axios module
jest.mock('axios');

test('fetches and displays user data', async () => {

//   // Create a mock response
//   const mockResponse = { data: { name: 'John Doe' } };
//   axios.get.mockResolvedValue(mockResponse);

//   // Render the User component
//   render(<Scan />);
//   // Check if the mocked response is used in the component

  const userNameElement = await waitFor(() => screen.getByText(/John Doe/i));
  expect(userNameElement).toBeInTheDocument();

});