import React from 'react';
import Astronomy from '../pages/Astronomy';
import NASADataService from '../services/NASADataService';


import { render, waitFor, screen } from '@testing-library/react';

jest.mock('../services/NASADataService', () => ({
  getAstronomyPhotos: jest.fn(),
}));

describe('Astronomy Component', () => {
  beforeEach(() => {
    NASADataService.getAstronomyPhotos.mockReset();
  });

  it('renders loading state initially', async () => {
\    NASADataService.getAstronomyPhotos.mockResolvedValueOnce({});

    render(<Astronomy />);

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    await waitFor(() => {
      expect(NASADataService.getAstronomyPhotos).toHaveBeenCalled();
    });
  });

  it('renders picture of the day and date when data is fetched successfully', async () => {
    const mockData = {
      title: 'Sample Title',
      date: '2024-05-15',
      explanation: 'Sample Explanation',
      url: 'https://example.com/image.jpg',
    };
    NASADataService.getAstronomyPhotos.mockResolvedValueOnce(mockData);

    render(<Astronomy />);

    await waitFor(() => {
      expect(NASADataService.getAstronomyPhotos).toHaveBeenCalled();
    });

    expect(screen.getByText('Sample Title')).toBeInTheDocument();
    expect(screen.getByText('Date: 2024-05-15')).toBeInTheDocument();
  });

  it('handles API error gracefully', async () => {
    NASADataService.getAstronomyPhotos.mockRejectedValueOnce(new Error('API Error'));

    render(<Astronomy />);

    await waitFor(() => {
      expect(NASADataService.getAstronomyPhotos).toHaveBeenCalled();
    });

    expect(screen.getByText('Error fetching picture of the day:')).toBeInTheDocument();
  });
});
