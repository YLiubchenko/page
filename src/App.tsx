import Footer from './features/Footer';
import AppHeader from './features/AppHeader';
import CustomLandingPage from './pages/CustomLandingPage';

import { AppWrapperDiv } from './styles';

function App() {
  return (
    <>
      <AppWrapperDiv>
        <AppHeader />
      </AppWrapperDiv>
      <CustomLandingPage />
      <Footer />
    </>
  );
}

export default App;
