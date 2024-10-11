
import profile from '../../img/profile.svg';
import bag  from '../../img/bag.svg';
import styled from 'styled-components';

const Icons = styled.ul`
  display: flex;
  align-items: center;
`
const Icon =  styled.li`
 margin-right: 40px;
 width: 25px;
`

const icons  = [profile,bag];
function HeaderIcons() {
    return (
        <Icons> 
        {icons.map((icon) => (
          <Icon><img src={icon} alt='icon'/></Icon>
        ))}
        </Icons>
    );
}

export default HeaderIcons;