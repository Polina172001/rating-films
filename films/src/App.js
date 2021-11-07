import PropTypes from 'prop-types'
import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <Stars count={5}/>
  );
}

export default App;

App.propTypes = {
  count:PropTypes.number
}