import './style.css';
import Logo from '../Logo';
import OpcoesHeader from '../HeaderOptions';
import IconesHeader from '../HeaderIcons';

function Header() {
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
 }
 export default Header