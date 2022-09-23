import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
`;

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  > p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
