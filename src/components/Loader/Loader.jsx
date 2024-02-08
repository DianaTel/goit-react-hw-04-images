import { MutatingDots } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export default function Loader() {
  return(
    <WrapperLoader>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="blue"
        secondaryColor="blue"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </WrapperLoader>
  );
}