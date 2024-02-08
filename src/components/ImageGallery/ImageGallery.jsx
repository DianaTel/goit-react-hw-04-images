import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";
import PropTypes from 'prop-types'

export default function ImageGallery({ photos, onClickImageItem }) {
  return (
    <Gallery>
      {photos.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          smallUrl={webformatURL}
          onClickImageItem={onClickImageItem}
        />
      ))}
    </Gallery>
  );
} 

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickImageItem: PropTypes.func.isRequired,
};