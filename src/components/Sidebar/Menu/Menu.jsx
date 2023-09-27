import styled from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const SidebarMenu = () => {
  return (
    <StyledMenu>
      <h2>Menu</h2>
    </StyledMenu>
  );
};

export default SidebarMenu;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
