import { menuItems } from '../../../../data/data';

import styled from 'styled-components';

const SidebarMenu = () => {
  return (
    <StyledMenu>
      {menuItems.map((item) => {
        const { name, icon } = item;
        console.log(icon);

        return (
          <StyledMenuItem key={name}>
            <div className="flex-container">
              <div className="image-container">
                <img src={icon.src} />
              </div>
              <div className="name-container">
                <h5>{name}</h5>
              </div>
            </div>
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
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .image-container {
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    // background-color: red;
  }
  .name-container {
    width: 150px;
  }
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
