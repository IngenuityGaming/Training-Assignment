export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
  
    {
      key: 'back',
      url: 'img/cardback.png',
    },
    {
      key: 'front',
      url: 'img/shapes.jpg',
    },
  
  ],
};
