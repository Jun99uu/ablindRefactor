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

export const dummy: Array<GoodsType> = [
  {
    itemId: 0,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://s3.marpple.co/files/u_1150555/2021/12/original/6227056c6620920423a1aceb1bc8ddf2775fc6bf1.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "이모티콘 캐릭터 굿즈 모음",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 1,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.techm.kr/news/photo/202109/88739_95310_3313.png",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "굿즈 맛집 진화한 '당근마켓', 장바구니 이어 슬리퍼도 '순삭'",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 2,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://m.mondayfactory.co.kr/web/product/big/202203/abed99ea46b5d45576323909e8df2b7f.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "부산시 소통 캐릭터 부기 굿즈 세트ㅣPB0097",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 3,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.100ssd.co.kr/news/photo/202201/84221_64328_1915.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "농심X카카오프렌즈 협업 굿즈 출시",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
];

export const dummy2: Array<GoodsType> = [
  {
    itemId: 0,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://s3.marpple.co/files/u_1150555/2021/12/original/6227056c6620920423a1aceb1bc8ddf2775fc6bf1.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "이모티콘 캐릭터 굿즈 모음",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 1,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.techm.kr/news/photo/202109/88739_95310_3313.png",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "굿즈 맛집 진화한 '당근마켓', 장바구니 이어 슬리퍼도 '순삭'",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 2,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://m.mondayfactory.co.kr/web/product/big/202203/abed99ea46b5d45576323909e8df2b7f.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "부산시 소통 캐릭터 부기 굿즈 세트ㅣPB0097",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 3,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.100ssd.co.kr/news/photo/202201/84221_64328_1915.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "농심X카카오프렌즈 협업 굿즈 출시",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 0,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://s3.marpple.co/files/u_1150555/2021/12/original/6227056c6620920423a1aceb1bc8ddf2775fc6bf1.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "이모티콘 캐릭터 굿즈 모음",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 1,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.techm.kr/news/photo/202109/88739_95310_3313.png",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "굿즈 맛집 진화한 '당근마켓', 장바구니 이어 슬리퍼도 '순삭'",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 2,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://m.mondayfactory.co.kr/web/product/big/202203/abed99ea46b5d45576323909e8df2b7f.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "부산시 소통 캐릭터 부기 굿즈 세트ㅣPB0097",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 3,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.100ssd.co.kr/news/photo/202201/84221_64328_1915.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "농심X카카오프렌즈 협업 굿즈 출시",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 0,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://s3.marpple.co/files/u_1150555/2021/12/original/6227056c6620920423a1aceb1bc8ddf2775fc6bf1.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "이모티콘 캐릭터 굿즈 모음",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 1,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.techm.kr/news/photo/202109/88739_95310_3313.png",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "굿즈 맛집 진화한 '당근마켓', 장바구니 이어 슬리퍼도 '순삭'",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 2,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://m.mondayfactory.co.kr/web/product/big/202203/abed99ea46b5d45576323909e8df2b7f.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "부산시 소통 캐릭터 부기 굿즈 세트ㅣPB0097",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
  {
    itemId: 3,
    detailImg:
      "https://image1.marpple.co/files/u_1325934/2021/1/original/e9d70ddc8d66eb825e8e901288a24c7e748c83902.jpg?w=1276&f=webp",
    images: [
      {
        url: "https://www.100ssd.co.kr/news/photo/202201/84221_64328_1915.jpg",
        id: 0,
      },
    ],
    author: "Ablind",
    name: "농심X카카오프렌즈 협업 굿즈 출시",
    option: ["옵션1", "옵션2", "옵션3"],
    price: 35000,
  },
];
