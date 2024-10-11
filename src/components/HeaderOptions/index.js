import './style.css';

const optionsText = ['CATEGORY', 'MY BOOKSHELF', 'FAVORITES']; 

function HeaderOptions() {
    return (
      <ul className="options">
        {optionsText.map((text) => (
          <li className="option">
            <p>{text}</p>
          </li>
        ))}
      </ul>
    );
  }

export default HeaderOptions;