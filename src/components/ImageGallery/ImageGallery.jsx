import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </GalleryList>
  );
};
