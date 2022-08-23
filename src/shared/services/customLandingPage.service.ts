import $api from '../../http';

import { ICustomLandingPageModel } from '../models/customLandingPage.model';

const ApiPath = {
  analyticsSettings: 'analytics',
  landing: '/wp-json/plm/landing',
  preview: '/wp-json/plm/landing/preview',
  metaData: '',
};
const PREVIEW_URL = '/landing?preview_id=';

class CustomLandingPageService {
  static getPageData(path: string, search: string): Promise<ICustomLandingPageModel> {
    const fullPath = `${path}${search}`;
    let url = `${ApiPath.landing}${fullPath}`;

    if (fullPath.includes(PREVIEW_URL)) {
      const previewIdParam = new URLSearchParams(search).get('preview_id');

      url = `${ApiPath.preview}/${previewIdParam}`;
    }

    return $api.get(url).then(({ data }) => data);
  }

  static getAnalyticsSetting(): Promise<any> {
    return $api.get(ApiPath.analyticsSettings).then(({ data }) => data);
  }

  static getMetaData(): Promise<any> {
    return $api.get(ApiPath.metaData).then(({ data }) => data);
  }
}

export default CustomLandingPageService;
