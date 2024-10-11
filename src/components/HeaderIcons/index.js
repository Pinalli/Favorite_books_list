import './style.css';
import profile from '../../img/profile.svg';
import bag  from '../../img/bag.svg';

const icons  = [profile,bag];
function HeaderIcons() {
    return (
        <ul className='icons'> 
        {icons.map((icon) => (
          <li className='icon'><img src={icon} alt='icon'/></li>
        ))}
        </ul>
    );
}

export default HeaderIcons;