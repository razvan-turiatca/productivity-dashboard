import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Footer</h2>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
