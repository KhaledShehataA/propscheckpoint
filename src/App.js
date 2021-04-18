import './App.css';
import {Profile} from './Profile';
import image from './Profile/image.jpg';


const imgStyle = {
  width: '200px',
  height: '200px',
};

function App() {
  return (

    <Profile>

      <alert>MY FULL NAME BGD</alert>
      <img src={image} alt={Image} style={imgStyle}/>
    </Profile>
  );
}

export default App;
