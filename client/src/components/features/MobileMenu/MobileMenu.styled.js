import styled from 'styled-components';
import '../../../styles/settings.scss';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #929D9E;
  margin-top: 136px;
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.7s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  
  a {
    font-size: 32px;
    padding: 32px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.7s linear;
    &:hover {
      color: #d1d1d1;
    }
  }
`;