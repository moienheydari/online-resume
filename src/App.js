import './css/App.min.css';
import background from './assets/background.jpg';
import Header from './components/Header.jsx';
import Body from './components/Body';
import Side from './components/Side';

export default function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <Header />
        <Body />
        <Side />
    </div>
  )
}


