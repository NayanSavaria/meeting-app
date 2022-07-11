import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import Addmeetings from './pages/Addmeetings';
import NotFound from './pages/Pagenotfound';
import Navigation from './components/navigation/Navigation';
import OldMeetings from './pages/Oldmeetings';
function App() {
  return (
   <div className="App">
   <Navigation/>
 <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/add' element={<Addmeetings/>} />
   <Route path='/old' element={<OldMeetings/>} />
   <Route path="*" element={<NotFound />} />

 </Routes>
 
      </div>
  );
}

export default App;
