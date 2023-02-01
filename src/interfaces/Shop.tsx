export interface Banner {
  content: string;
  id: number;
  image: string;
  link: string;
}

export interface GoodsImg {
  url: string;
  id: number;
}

export interface Goods {
  itemId: number;
  category: string;
  detailImg: string;
  images: Array<GoodsImg>;
  author: string;
  name: string;
  option: Array<string>;
  price: number;
}

export interface Artist {
  artistId: number;
  name: string;
  profile: string;
  intro: string;
}
