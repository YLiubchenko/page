import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from './features/Footer';
import AppHeader from './features/AppHeader';
import CustomLandingPage from './pages/CustomLandingPage';
import customLandingPageService from './shared/services/customLandingPage.service';
import { BlockType, ICustomLandingPageModel } from './shared/models/customLandingPage.model';

import { AppWrapperDiv } from './styles';

const mockPageData = {
  pageType: 'default',
  headerLogo: {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU',
    alt: 'text..',
  },
  hero: {
    title: 'Find your community, Find your strength',
    mainImg: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU',
      alt: 'main iamge',
    },
    button: {
      title: 'Label',
      url: 'http://www.google.com',
      target: '',
    },
  },
  contentBlocks: [
    {
      left: {
        type: BlockType.TextBlock,
        data: {
          title: 'Quis nostrud exercitation ullamco laboris',
          subTitle:
            'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor izxczxcxz        dsfs df wref wer wre wrw we ncididunt ut labore et dolore magna aliqua.',
        },
      },
      right: {
        type: BlockType.VideoBlock,
        data: {
          src: 'https://www.youtube.com/watch?v=QChEaOHauZY',
        },
      },
    },
    {
      left: {
        type: BlockType.ImgBlock,
        data: {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU',
          alt: 'Hello',
        },
      },
      right: {
        type: BlockType.TextBlock,
        data: {
          title: 'Quis nostrud exercitation ullamco laboris',
          subTitle:
            'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
    },
    {
      left: {
        type: BlockType.TextBlock,
        data: {
          title: 'Quis nostrud exercitation ullamco laboris',
          subTitle:
            'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      },
      right: {
        type: BlockType.ImgBlock,
        data: {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU',
          alt: 'alt',
        },
      },
    },
  ],
  form: {
    title: 'Laboris nisi ut aliquip ex ea commodo consequat.',
    subTitle: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est',
    embedCode: '<>',
  },
  additionalServices: {
    title:
      'In addition, Optum Behavioral Health provides special access to addition, Optum Behavioral Health provides pecial access In addition, Optum Behavioral Health provides special access',
    items: [
      {
        title: 'Live and Work well',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. = facere maxime provident quae quas repudiandae saepe voluptatem.',
      },
      {
        title: 'title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae',
      },
      {
        title: 'and Work well',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae saepe voluptatem.',
      },
      {
        title: 'and Work well',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae saepe voluptatem.',
      },
      {
        title: 'and Work well',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa error explicabo facere maxime provident quae quas repudiandae saepe voluptatem.',
      },
    ],
  },
  bottomCTA: {
    title: 'In addition, Optum Behavioral Health pr',
    button: {
      url: 'https://www.google.com',
      title: 'Join now!',
      target: '',
    },
  },
};

function App() {
  const { pathname } = useLocation();
  const [pageData, setPageData] = useState<ICustomLandingPageModel>();

  const getPageData = async () => {
    try {
      const data = await customLandingPageService.getPageData(pathname);
      setPageData(data);
    } catch (e: any) {
      console.log(e.message);
      // TODO remove line below after integrating with BE
      setPageData(mockPageData);
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
