import styled from 'styled-components';

const Account = () => {
  return (
    <StyledAccount>
      <h2>Account</h2>
    </StyledAccount>
  );
};

export default Account;

const StyledAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  border-bottom: 1px solid gray;
`;
