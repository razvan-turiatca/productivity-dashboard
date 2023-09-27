import styled from 'styled-components';

const LogoSection = () => {
  return (
    <StyledLogo>
      <h2>LogoSection</h2>
    </StyledLogo>
  );
};

export default LogoSection;

const StyledLogo = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
