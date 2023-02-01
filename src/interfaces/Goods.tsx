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

interface GoodsImg {
  url: string;
  id: number;
}

interface Option {
  id: number;
  itemOption: string;
}

interface goodsDetail {
  itemId: number;
  detailImg: string;
  images: Array<GoodsImg>;
  author: string;
  name: string;
  options: Array<Option>;
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

export const dummyGoods: goodsDetail = {
  itemId: 1,
  images: [
    {
      url: "https://i.pinimg.com/564x/3f/8b/1d/3f8b1dcfe38167356303edec2c6ddb00.jpg",
      id: 1,
    },
    {
      url: "https://i.pinimg.com/564x/c9/76/13/c97613aa91f4b01130ccf7c7691dcbb6.jpg",
      id: 2,
    },
    {
      url: "https://i.pinimg.com/564x/40/ab/85/40ab8583cea14941f7dba5f85d7ec9c0.jpg",
      id: 3,
    },
    {
      url: "https://i.pinimg.com/564x/8b/e9/34/8be93400673ea316e5041c90d63433d3.jpg",
      id: 4,
    },
    {
      url: "https://i.pinimg.com/564x/3a/ca/8f/3aca8fd1dd1ae01f7e8aec08254e06e2.jpg",
      id: 5,
    },
  ],
  name: "다채로운 분위기의 엽서 5종 세트 (★이벤트 5+1★)",
  author: "강슬기",
  price: 5000,
  options: [
    { id: 0, itemOption: "오색 꽃 그림 엽서 5장" },
    { id: 1, itemOption: "우주의 별빛 엽서 5장" },
    { id: 2, itemOption: "따뜻한 색감의 엽서 5장" },
    { id: 3, itemOption: "랜덤엽서 5+1장 " },
  ],
  detailImg: "https://conversekorea.cafe24.com/converse/HO21/M9160C.jpg",
};
