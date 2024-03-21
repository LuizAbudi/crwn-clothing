const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim **EXAMPLE**',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie **EXAMPLE**',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy **EXAMPLE**',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Air Jordan 1 Low Travis Scott "Black Phantom"',
        imageUrl: 'https://i.ibb.co/BCDZmvR/15.jpg',
        price: 220,
        galery: [
          'https://i.ibb.co/mGWNNnv/6.jpg',
          'https://i.ibb.co/Bsd6RLt/7.jpg',
          'https://i.ibb.co/NsKnBnh/8.jpg',
          'https://i.ibb.co/gTybVBJ/9.jpg',
          'https://i.ibb.co/6tPjG5C/10.jpg',
          'https://i.ibb.co/Qmhs94g/11.jpg',
          'https://i.ibb.co/zNFPjSg/12.jpg',
          'https://i.ibb.co/tMkbJBJ/13.jpg',
          'https://i.ibb.co/p073gnK/14.jpg',
        ]
      },
      {
        id: 11,
        name: 'Jordan Mens Air Jordan 1 Low OG SP',
        imageUrl: 'https://i.ibb.co/jkQvYBy/13.jpg',
        price: 280,
        galery: [
          'https://i.ibb.co/K6XKxdr/5.jpg',
          'https://i.ibb.co/3yTLGzq/6.jpg',
          'https://i.ibb.co/jv98VwK/7.jpg',
          'https://i.ibb.co/mNfKnsV/8.jpg',
          'https://i.ibb.co/ZVtSz9h/9.jpg',
          'https://i.ibb.co/C55qDpM/10.jpg',
          'https://i.ibb.co/BCWtM6w/11.jpg',
          'https://i.ibb.co/9NPgWTZ/12.jpg',
        ]
      },
      {
        id: 12,
        name: 'Jordan 1 Retro Low OG SP Travis Scott Olive',
        imageUrl: 'https://i.ibb.co/4McjrqF/15.jpg',
        price: 110,
        galery: [
          'https://i.ibb.co/J3PW1LL/7.jpg',
          'https://i.ibb.co/Z1L2bnp/8.jpg',
          'https://i.ibb.co/PZSR7VH/9.jpg',
          'https://i.ibb.co/fCc6gr0/10.jpg',
          'https://i.ibb.co/YLPWK5W/11.jpg',
          'https://i.ibb.co/QcGGV0r/12.jpg',
          'https://i.ibb.co/8x99fZf/13.jpg',
          'https://i.ibb.co/r0CPrqf/14.jpg',
          'https://i.ibb.co/4McjrqF/15.jpg',
          'https://i.ibb.co/34ZzYhV/6.jpg',
        ]
      },
      {
        id: 13,
        name: 'Nike SB Dunk Azul',
        imageUrl: 'https://i.ibb.co/xJZmfqJ/13.jpg',
        price: 160,
        galery: [
          'https://i.ibb.co/6trP51z/4.jpg',
          'https://i.ibb.co/BrTQ4Ww/5.jpg',
          'https://i.ibb.co/TR6hNP7/6.jpg',
          'https://i.ibb.co/gWrKzFz/7.jpg',
          'https://i.ibb.co/mG0PLJd/8.jpg',
          'https://i.ibb.co/ynptCtp/9.jpg',
          'https://i.ibb.co/rs6QyF9/10.jpg',
          'https://i.ibb.co/YZTQJjY/11.jpg',
          'https://i.ibb.co/dg7kgYM/12.jpg',
        ]
      },
      {
        id: 14,
        name: 'Nike SB Dunk Cinza',
        imageUrl: 'https://i.ibb.co/kMzYdS6/13.jpg',
        price: 160,
        galery: [
          'https://i.ibb.co/f0C6ssT/5.jpg',
          'https://i.ibb.co/L0HbqwM/6.jpg',
          'https://i.ibb.co/2nxkN57/7.jpg',
          'https://i.ibb.co/ngnktcS/8.jpg',
          'https://i.ibb.co/HYP4QWb/9.jpg',
          'https://i.ibb.co/HpQYm7g/10.jpg',
          'https://i.ibb.co/tXvdztC/11.jpg',
          'https://i.ibb.co/QcNZnjL/12.jpg',
        ]
      },
      {
        id: 15,
        name: 'Nike SB Dunk Low Panda',
        imageUrl: 'https://i.ibb.co/f25t5L0/13.jpg',
        price: 160,
        galery: [
          'https://i.ibb.co/zZR3XJD/6.jpg',
          'https://i.ibb.co/yn4Ghx4/7.jpg',
          'https://i.ibb.co/5jqq4KB/9.jpg',
          'https://i.ibb.co/RcyBM2s/10.jpg',
          'https://i.ibb.co/zRjrJWv/11.jpg',
          'https://i.ibb.co/1X4tdky/12.jpg',
          'https://i.ibb.co/kKqzpTL/4.jpg',
          'https://i.ibb.co/v475MQx/5.jpg',
        ]
      },
      {
        id: 16,
        name: 'Vans Knu Old Skool',
        imageUrl: 'https://i.ibb.co/cx7N9sx/13.jpg',
        price: 190,
        galery: [
          'https://i.ibb.co/Rb1NqFJ/4.jpg',
          'https://i.ibb.co/WDrrNzt/5.jpg',
          'https://i.ibb.co/x2DYp2x/6.jpg',
          'https://i.ibb.co/vjdrcmb/7.jpg',
          'https://i.ibb.co/dDPNqhF/8.jpg',
          'https://i.ibb.co/x59dJ5H/9.jpg',
          'https://i.ibb.co/bsHMWTL/10.jpg',
          'https://i.ibb.co/V9XnFF1/11.jpg',
          'https://i.ibb.co/thN3KZp/12.jpg',
        ]
      },
    ],
  },
];

export default SHOP_DATA;
