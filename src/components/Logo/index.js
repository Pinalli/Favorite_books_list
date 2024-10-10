import logo from '../../img/logo.jpg';
import './style.css'

function Logo(){
    return (
        <div className='logo'>
        <img src={logo} className='App-logo' 
        alt='logo'  
        style={{ width: '100px', height: 'auto' }}/>   
            <p><strong>Favorite</strong>Books</p>
      </div>
    );
}

export default Logo;