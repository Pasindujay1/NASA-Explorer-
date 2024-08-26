import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import EarthImages from '../pages/EarthImages';
import NASADataService from '../services/NASADataService'; 

jest.mock('../services/NASADataService', () => ({
  getEarthImages: jest.fn(),
}));

describe('EarthImages Component', () => {
  beforeEach(() => {
    NASADataService.getEarthImages.mockReset();
  });

  it('renders EarthImages component correctly', () => {
    render(<EarthImages />);

    expect(screen.getByText('Explore Earth')).toBeInTheDocument();
  });

});
