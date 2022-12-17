// Import data

// Import components
import './App.css';
import Searchbar from './components/Searchbar';
import Directory from './components/Directory';
import Gallery from './components/Gallery';
import Sidebar from './components/Sidebar'
import { postings } from './postings';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;

