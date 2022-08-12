import $api from '../../http';
import { ICustomLandingPageModel } from '../models/customLandingPage.model';

const ApiRoutes = {
  customLandingPage: '',
};

class CustomLandingPageService {
  static getPageData(path: string): Promise<ICustomLandingPageModel> {
    return $api.get(ApiRoutes.customLandingPage, {
      params: {
        path,
      },
    });
  }
}

export default CustomLandingPageService;
