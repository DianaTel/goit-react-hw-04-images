import {
  ImageGalleryItemStyled,
  ImageGalleryImg,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ id, smallUrl, tags, onClickImageItem }) {
  return (
    <ImageGalleryItemStyled key={id} data-id={id} onClick={onClickImageItem}>
      <ImageGalleryImg src={smallUrl} alt={tags} data-id={id} />
    </ImageGalleryItemStyled>
  );
} 

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickImageItem: PropTypes.func.isRequired,
};
