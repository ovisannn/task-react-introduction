import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';

jest.mock('axios');

describe('Search', () => {
  test('Get Data Succes from API', async () => {
    const stories = [
      { objectID: '1', title: 'Agus' },
      { objectID: '2', title: 'Dwi' },
      { objectID: '3', title: 'Milniadi' },

    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );
    render(<Search />)

    await act(async () => {
      await userEvent.click(screen.getByRole('button'))
    });
    const items = await screen.findAllByRole('listitem')
    expect(items).toHaveLength(3)
  });

  test('Get data fail from API', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Data Fail'))
    );

    render(<Search />);

    await act(async() => {
      await userEvent.click(screen.getByRole('button'))
    })
    const message = await screen.findByText(/Ada yang error/)
    expect(message).toBeInTheDocument()
  });
});