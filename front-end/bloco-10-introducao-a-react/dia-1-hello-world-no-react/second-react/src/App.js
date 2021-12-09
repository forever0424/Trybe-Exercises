import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Content/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
