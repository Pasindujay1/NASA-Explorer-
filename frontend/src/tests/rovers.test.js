// Import necessary dependencies for testing
import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import Rovers from '../pages/Rovers'; // Import the component to be tested
import NASADataService from '../services/NASADataService';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mock the navigate function
const mockNavigate = jest.fn();
useNavigate.mockImplementation(() => mockNavigate);

// Mock the NASADataService
jest.mock('../../services/NASADataService', () => ({
  getRoverPhotos: jest.fn(),
}));

describe('Rovers Component', () => {
  beforeEach(() => {
    // Reset mock implementation before each test
    NASADataService.getRoverPhotos.mockReset();
  });

  it('renders Rovers component correctly', async () => {
    const mockPhotos = [
      { id: 1, img_src: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=FvbQjwvHLWErzGAaDpexIbFy4mMcmygHiFyuSlAk', camera: { full_name: 'Camera 1' } },
      { id: 2, img_src: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=FvbQjwvHLWErzGAaDpexIbFy4mMcmygHiFyuSlAk', camera: { full_name: 'Camera 2' } },
      { id: 3, img_src: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=FvbQjwvHLWErzGAaDpexIbFy4mMcmygHiFyuSlAk', camera: { full_name: 'Camera 3' } },
    ];
    NASADataService.getRoverPhotos.mockResolvedValueOnce(mockPhotos);

    render(<Rovers />);

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loading-indicator')).toBeNull();

      expect(screen.getByText('Curiosity Rover Photos')).toBeInTheDocument();
      expect(screen.getAllByRole('img')).toHaveLength(3); 
    });
  });

  it('handles API error gracefully', async () => {
    NASADataService.getRoverPhotos.mockRejectedValueOnce(new Error('API Error'));

    render(<Rovers />);

    await waitFor(() => {
      expect(screen.getByText('Error fetching rover photos:')).toBeInTheDocument();
    });
  });

  it('navigates to external link on button click', () => {
    render(<Rovers />);

    fireEvent.click(screen.getByText('Explore more about Curiosity'));

    expect(mockNavigate).toHaveBeenCalledWith('https://science.nasa.gov/mission/msl-curiosity/', '_blank');
  });
});
