import Content from './components/Content';
import Header from './components/Header';
import EmailBlock from './components/EmailBlock';
import Addition from './components/Addition';
import JoinBlock from './components/JoinBlock';
import Footer from './components/Footer';

import { AppWrapper } from './styles';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content />
      <EmailBlock />
      <Addition />
      <JoinBlock />
      <Footer />
    </AppWrapper>
  );
}

export default App;
