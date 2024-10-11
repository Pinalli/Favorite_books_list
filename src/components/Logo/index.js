import logo from "../../img/logo.jpg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-rigth: 15px;
`;
const LogoImg = styled.img`
  width: 100px;
  height: auto;
`;
function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      <p>
        <strong>Favorite</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
