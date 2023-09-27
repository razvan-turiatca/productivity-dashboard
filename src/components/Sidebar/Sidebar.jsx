import LogoSection from './Logo/LogoSection';
import SidebarMenu from './Menu/Menu';
import Account from './Account/Account';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <LogoSection />
      <SidebarMenu />
      <Account />
      <Footer />
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: #bcc6cc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
