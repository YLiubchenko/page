import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from './features/Footer';
import AppHeader from './features/AppHeader';
import CustomLandingPage from './pages/CustomLandingPage';
import customLandingPageService from './shared/services/customLandingPage.service';
import { ICustomLandingPageModel } from './shared/models/customLandingPage.model';
import useAnalytics from './shared/hooks/useAnalytics';

import { AppWrapperDiv } from './styles';

function App() {
  const { pathname, search } = useLocation();
  const [pageData, setPageData] = useState<ICustomLandingPageModel>();
  useAnalytics();

  const getPageData = async () => {
    try {
      const last = pathname.substring(pathname.lastIndexOf('/') + 1, pathname.length);
      const data = await customLandingPageService.getPageData(last + search);

      setPageData(data);
    } catch (e: any) {
      console.log(e?.message);
    }
  };

  useEffect(() => {
    getPageData();
  }, [pathname]);

  if (!pageData) {
    return null;
  }

  return (
    <>
      <AppWrapperDiv>
        <AppHeader isPartner={pageData.pageType === 'partner'} logoData={pageData.headerLogo} />
      </AppWrapperDiv>
      <CustomLandingPage {...pageData} />
      <Footer />
    </>
  );
}

export default App;
