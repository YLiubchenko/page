import { useEffect, useState } from 'react';

import customLandingPageService from '../services/customLandingPage.service';

const useMetaData = () => {
  const [metaData, setMetaData] = useState<any>({});

  const getMetaData = async () => {
    try {
      const data = await customLandingPageService.getMetaData();

      setMetaData(data);
    } catch (e: any) {
      const yoastHead =
        '"<!-- This site is optimized with the Yoast SEO Premium plugin v16.7-RC2 (Yoast SEO v16.7-RC4) - https:\\/\\/yoast.com\\/wordpress\\/plugins\\/seo\\/ -->\\n<meta name=\\"description\\" content=\\"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.\\" \\/>\\n<meta name=\\"robots\\" content=\\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\\" \\/>\\n<link rel=\\"canonical\\" href=\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/\\" \\/>\\n<meta property=\\"og:locale\\" content=\\"en_US\\" \\/>\\n<meta property=\\"og:type\\" content=\\"article\\" \\/>\\n<meta property=\\"og:title\\" content=\\"Site structure: the ultimate guide\\" \\/>\\n<meta property=\\"og:description\\" content=\\"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.\\" \\/>\\n<meta property=\\"og:url\\" content=\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/\\" \\/>\\n<meta property=\\"og:site_name\\" content=\\"Yoast\\" \\/>\\n<meta property=\\"article:publisher\\" content=\\"https:\\/\\/www.facebook.com\\/yoast\\" \\/>\\n<meta property=\\"article:author\\" content=\\"https:\\/\\/www.facebook.com\\/mariekerakt\\" \\/>\\n<meta property=\\"article:published_time\\" content=\\"2020-08-19T12:00:37+00:00\\" \\/>\\n<meta property=\\"article:modified_time\\" content=\\"2021-06-29T12:04:21+00:00\\" \\/>\\n<meta property=\\"og:image\\" content=\\"https:\\/\\/yoast.com\\/app\\/uploads\\/2020\\/08\\/posts_artwork_social_share-2021-04-16T115915.180.png\\" \\/>\\n\\t<meta property=\\"og:image:width\\" content=\\"1200\\" \\/>\\n\\t<meta property=\\"og:image:height\\" content=\\"675\\" \\/>\\n<meta name=\\"twitter:card\\" content=\\"summary_large_image\\" \\/>\\n<meta name=\\"twitter:creator\\" content=\\"@mariekerakt\\" \\/>\\n<meta name=\\"twitter:site\\" content=\\"@yoast\\" \\/>\\n<meta name=\\"twitter:label1\\" content=\\"Est. reading time\\" \\/>\\n\\t<meta name=\\"twitter:data1\\" content=\\"18 minutes\\" \\/>\\n<script type=\\"application\\/ld+json\\" class=\\"yoast-schema-graph\\">{\\"@context\\":\\"https:\\/\\/schema.org\\",\\"@graph\\":[{\\"@type\\":\\"Organization\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/#organization\\",\\"name\\":\\"Yoast\\",\\"url\\":\\"https:\\/\\/yoast.com\\/\\",\\"sameAs\\":[\\"https:\\/\\/www.facebook.com\\/yoast\\",\\"https:\\/\\/www.instagram.com\\/yoast\\/\\",\\"https:\\/\\/www.linkedin.com\\/company\\/1414157\\/\\",\\"https:\\/\\/www.youtube.com\\/yoast\\",\\"https:\\/\\/www.pinterest.com\\/yoast\\/\\",\\"https:\\/\\/en.wikipedia.org\\/wiki\\/Yoast\\",\\"https:\\/\\/twitter.com\\/yoast\\"],\\"logo\\":{\\"@type\\":\\"ImageObject\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/#logo\\",\\"inLanguage\\":\\"en-US\\",\\"url\\":\\"https:\\/\\/yoast.com\\/app\\/uploads\\/2020\\/09\\/Yoast_Icon_SocialMedia_500x500.png\\",\\"contentUrl\\":\\"https:\\/\\/yoast.com\\/app\\/uploads\\/2020\\/09\\/Yoast_Icon_SocialMedia_500x500.png\\",\\"width\\":500,\\"height\\":500,\\"caption\\":\\"Yoast\\"},\\"image\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/#logo\\"},\\"founder\\":{\\"@type\\":\\"Person\\",\\"name\\":\\"Joost de Valk\\",\\"url\\":\\"https:\\/\\/yoast.com\\/about-us\\/team\\/joost-de-valk\\/\\",\\"sameAs\\":\\"https:\\/\\/yoast.com\\/about-us\\/team\\/joost-de-valk\\/\\"},\\"foundingDate\\":\\"2010-05-01\\",\\"numberOfEmployees\\":133,\\"slogan\\":\\"SEO for Everyone\\",\\"description\\":\\"Yoast helps you with your website optimization, whether it be through our widely used SEO software or our online SEO courses: we&#039;re here to help.\\",\\"legalName\\":\\"Yoast BV\\"},{\\"@type\\":\\"WebSite\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/#website\\",\\"url\\":\\"https:\\/\\/yoast.com\\/\\",\\"name\\":\\"Yoast\\",\\"description\\":\\"SEO for everyone\\",\\"publisher\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/#organization\\"},\\"potentialAction\\":[{\\"@type\\":\\"SearchAction\\",\\"target\\":{\\"@type\\":\\"EntryPoint\\",\\"urlTemplate\\":\\"https:\\/\\/yoast.com\\/?s={search_term_string}\\"},\\"query-input\\":\\"required name=search_term_string\\"}],\\"inLanguage\\":\\"en-US\\",\\"copyrightHolder\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/#organization\\"}},{\\"@type\\":\\"ImageObject\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#primaryimage\\",\\"inLanguage\\":\\"en-US\\",\\"url\\":\\"https:\\/\\/yoast.com\\/app\\/uploads\\/2020\\/08\\/posts_artwork_social_share-2021-04-16T115915.180.png\\",\\"contentUrl\\":\\"https:\\/\\/yoast.com\\/app\\/uploads\\/2020\\/08\\/posts_artwork_social_share-2021-04-16T115915.180.png\\",\\"width\\":1200,\\"height\\":675},{\\"@type\\":\\"WebPage\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#webpage\\",\\"url\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/\\",\\"name\\":\\"Site structure: the ultimate guide &bull; Yoast\\",\\"isPartOf\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/#website\\"},\\"primaryImageOfPage\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#primaryimage\\"},\\"datePublished\\":\\"2020-08-19T12:00:37+00:00\\",\\"dateModified\\":\\"2021-06-29T12:04:21+00:00\\",\\"description\\":\\"Your site structure is vital for users and SEO. Our complete guide will lead you through all steps necessary to create a sound site structure.\\",\\"breadcrumb\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#breadcrumb\\"},\\"inLanguage\\":\\"en-US\\",\\"potentialAction\\":[{\\"@type\\":\\"ReadAction\\",\\"target\\":[\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/\\"]}]},{\\"@type\\":\\"BreadcrumbList\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#breadcrumb\\",\\"itemListElement\\":[{\\"@type\\":\\"ListItem\\",\\"position\\":1,\\"name\\":\\"Home\\",\\"item\\":\\"https:\\/\\/yoast.com\\/\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":2,\\"name\\":\\"Site Structure\\",\\"item\\":\\"https:\\/\\/yoast.com\\/tag\\/site-structure\\/\\"},{\\"@type\\":\\"ListItem\\",\\"position\\":3,\\"name\\":\\"Site structure: the ultimate guide\\"}]},{\\"@type\\":\\"Article\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#article\\",\\"isPartOf\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#webpage\\"},\\"author\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/#\\/schema\\/person\\/1159f46828cf5ce5fa8e3b89a1af9327\\"},\\"headline\\":\\"Site structure: the ultimate guide\\",\\"datePublished\\":\\"2020-08-19T12:00:37+00:00\\",\\"dateModified\\":\\"2021-06-29T12:04:21+00:00\\",\\"mainEntityOfPage\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#webpage\\"},\\"wordCount\\":3958,\\"commentCount\\":6,\\"publisher\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/#organization\\"},\\"image\\":{\\"@id\\":\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#primaryimage\\"},\\"thumbnailUrl\\":\\"https:\\/\\/yoast.com\\/app\\/uploads\\/2016\\/11\\/Site_structure_ultimate_guide_FI.png\\",\\"keywords\\":[\\"Internal linking\\",\\"Site Structure\\"],\\"inLanguage\\":\\"en-US\\",\\"potentialAction\\":[{\\"@type\\":\\"CommentAction\\",\\"name\\":\\"Comment\\",\\"target\\":[\\"https:\\/\\/yoast.com\\/site-structure-the-ultimate-guide\\/#respond\\"]}]},{\\"@type\\":\\"Person\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/#\\/schema\\/person\\/1159f46828cf5ce5fa8e3b89a1af9327\\",\\"name\\":\\"Marieke van de Rakt\\",\\"image\\":{\\"@type\\":\\"ImageObject\\",\\"@id\\":\\"https:\\/\\/yoast.com\\/#personlogo\\",\\"inLanguage\\":\\"en-US\\",\\"url\\":\\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g\\",\\"contentUrl\\":\\"https:\\/\\/secure.gravatar.com\\/avatar\\/1d83533e299c379140f9fcc2cb0015cb?s=96&d=mm&r=g\\",\\"caption\\":\\"Marieke van de Rakt\\"},\\"description\\":\\"Marieke van de Rakt is the CEO of Yoast. Her main focus is on growing the company. She is really passionate about maintaining open and friendly company culture. Marieke is also heavily involved in the marketing of Yoast and with Yoast SEO Academy: the online courses platform.\\",\\"sameAs\\":[\\"https:\\/\\/yoast.com\\/\\",\\"https:\\/\\/www.facebook.com\\/mariekerakt\\",\\"https:\\/\\/www.instagram.com\\/mgarakt\\/\\",\\"https:\\/\\/www.linkedin.com\\/in\\/mariekerakt\\",\\"https:\\/\\/twitter.com\\/mariekerakt\\",\\"https:\\/\\/marieke.blog\\/\\",\\"https:\\/\\/profiles.wordpress.org\\/mariekerakt\\/\\"],\\"url\\":\\"https:\\/\\/yoast.com\\/about-us\\/team\\/marieke-van-de-rakt\\/\\"}]}<\\/script>\\n<!-- \\/ Yoast SEO Premium plugin. -->"';

      setMetaData(JSON.parse(yoastHead));
      console.log(e?.message);
    }
  };

  useEffect(() => {
    getMetaData();
  }, []);

  return metaData;
};

export default useMetaData;
