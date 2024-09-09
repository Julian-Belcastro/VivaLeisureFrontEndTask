import './styling/App.css';
import './styling/Modal.css';
import Header from './components/header';
import VouchersLanding from './components/vouchersLanding';

// App split into two pieces, header and vouchers
function App() {
  return (
    <>
      <Header />
      <VouchersLanding />
    </>
  );
}

export default App;
