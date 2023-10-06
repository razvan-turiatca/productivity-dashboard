import styled from 'styled-components';
export const MenuItem = ({ name, icon }) => {
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
};

const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
