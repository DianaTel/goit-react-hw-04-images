import { ButtonStyle, WrapperButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ onClickRender }) {
  return (
    <WrapperButton>
      <ButtonStyle type="button" onClick={onClickRender}>
        Load more
      </ButtonStyle>
    </WrapperButton>
  );
} 

Button.propTypes = {
  onClickRender: PropTypes.func.isRequired,
};
