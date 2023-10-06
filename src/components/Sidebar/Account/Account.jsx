import { MenuItem } from '@/components/shared/menuItem';
import styled from 'styled-components';
import { accountItems } from '../../../../data/data';

const Account = () => {
  return (
    <StyledAccount>
      {accountItems.map((accountItem) => {
        const { name, icon } = accountItem;
        return <MenuItem name={name} icon={icon} />;
      })}
    </StyledAccount>
  );
};

export default Account;

const StyledAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20%;
  border-bottom: 1px solid gray;
`;
