import './style/reset.scss';
import './style/common.scss';
import './style/mobile.scss';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Main from './page/Main';


function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Main}/>
    </div>
      </BrowserRouter>
  );
}

export default App;
