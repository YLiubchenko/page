export interface IImg {
  url: string;
  alt: string;
}

export interface IButton {
  title: string;
  url: string;
  target: string;
}

export interface IHero {
  title: string;
  mainImg: IImg;
  button: IButton;
}

export enum BlockType {
  ImgBlock = 'image',
  VideoBlock = 'video',
  TextBlock = 'text',
}

type Column = BlockType.ImgBlock | BlockType.VideoBlock | BlockType.TextBlock;

export interface IVideoBlock {
  src: string;
}

export interface ITextBlock {
  title: string;
  subTitle: string;
}

export interface IMageBlock {
  url: string;
  alt: string;
}

export type IData = IVideoBlock | IMageBlock | ITextBlock;

export interface IColumnBlock {
  type: Column;
  data: IData;
}

export interface IRowData {
  left: IColumnBlock;
  right: IColumnBlock;
}

export interface IForm {
  title: string;
  subTitle: string;
  embedCode: string;
}

export interface IAdditionItem {
  title: string;
  description: string;
}

export interface IAddition {
  title: string;
  items: IAdditionItem[];
}

export interface IBottomCTA {
  title: string;
  button: IButton;
}

export interface ILogo {
  url: string;
  alt: string;
}

export interface ICustomLandingPageModel {
  pageType: 'default' | 'partner' | string;
  headerLogo: ILogo;
  hero: IHero;
  contentBlocks: IRowData[];
  form: IForm;
  additionalServices: IAddition;
  bottomCTA: IBottomCTA;
}
