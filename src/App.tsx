import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import SecondaryP from './components/SecondaryP';

function App() {
  return (
    <div className="bg-[#fafafa]">
      <Header />
      <Landing />
      <SecondaryP />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
