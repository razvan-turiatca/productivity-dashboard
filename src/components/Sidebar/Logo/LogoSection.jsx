import styled from 'styled-components';

const LogoSection = () => {
  return (
    <StyledLogo>
      <h2>Life App</h2>
    </StyledLogo>
  );
};

export default LogoSection;

const StyledLogo = styled.div`
  height: 15%;
  border-bottom: 1px solid gray;
  padding: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
