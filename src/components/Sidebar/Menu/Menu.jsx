import { menuItems } from '../../../../data/data';

import styled from 'styled-components';

const SidebarMenu = () => {
  return (
    <StyledMenu>
      {menuItems.map((item) => {
        const { name, icon } = item;

        return (
          <StyledMenuItem key={name}>
            {icon}

            <h5>{name}</h5>
          </StyledMenuItem>
        );
      })}
    </StyledMenu>
  );
};

export default SidebarMenu;

const StyledMenu = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  height: 40%;
  border-bottom: 1px solid gray;
`;

const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const StyledIcon = styled.svg`
  fill: #fff;
`;
