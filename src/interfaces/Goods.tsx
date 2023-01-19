interface GoodsImg {
  url: string;
  id: number;
}

export interface GoodsType {
  itemId: number;
  detailImg: string;
  images: Array<GoodsImg>;
  author: string;
  name: string;
  option: Array<string>;
  price: number;
}
