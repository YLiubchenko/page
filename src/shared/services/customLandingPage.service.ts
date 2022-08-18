import $api from '../../http';

import { ICustomLandingPageModel } from '../models/customLandingPage.model';

const ApiPath = {
  analyticsSettings: 'analytics',
};
class CustomLandingPageService {
  static getPageData(path: string): Promise<ICustomLandingPageModel> {
    return $api.get(path).then(({ data }) => data);
  }

  static getAnalyticsSetting(): Promise<any> {
    return $api.get(ApiPath.analyticsSettings).then(({ data }) => data);
  }
}

export default CustomLandingPageService;
