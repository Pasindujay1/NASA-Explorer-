// // VideoWrapper.test.js

// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import VideoWrapper from './VideoWrapper';

// // Mock the video URL
// const videoUrl = 'mock_video_url.mp4';

// describe('VideoWrapper Component', () => {
//   it('renders video element with correct source', async () => {
//     const { getByTestId, getByText } = render(
//       <VideoWrapper url={videoUrl}>
//         <div data-testid="child-component">Child Component</div>
//       </VideoWrapper>
//     );

//     // Wait for the video element to be available in the DOM
//     await waitFor(() => {
//       const videoElement = getByTestId('video-element');
//       expect(videoElement).toBeInTheDocument();

//       // Assert that the correct source is set
//       const sourceElement = videoElement.querySelector('source');
//       expect(sourceElement).toHaveAttribute('src', videoUrl);
//       expect(sourceElement).toHaveAttribute('type', 'video/mp4');
//     });

//     // Assert that the child component is rendered within the VideoWrapper
//     const childComponent = getByTestId('child-component');
//     expect(childComponent).toBeInTheDocument();
//   });

//   it('renders with required props', () => {
//     // Check if the component throws error when required props are missing
//     console.error = jest.fn(); // Suppress console.error from PropTypes validation

//     // Render VideoWrapper without required props
//     render(<VideoWrapper />);

//     // Expect console.error to be called due to missing required props
//     expect(console.error).toHaveBeenCalled();
//   });
// });
