import Image from 'next/image';
import Logo from '../assets/images/EFMA_LOGO.jpg';
import styled from 'styled-components';

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => (
  <Screen>
    <LogoContainer>
      <Image src={Logo} width={80} height={80} alt="Logo_efma" />
    </LogoContainer>
  </Screen>
);

export default Loader;
