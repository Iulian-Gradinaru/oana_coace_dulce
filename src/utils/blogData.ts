// import images from all-images/blog-img directory
import img1 from '../assets/products/poza1.jpg';
import img2 from '../assets/products/poza2.jpg';
import img3 from '../assets/products/poza3.jpg';

// export const blogData = [
//   {
//     id: 1,
//     title: 'The best way to drive cars',
//     author: 'Muhib',
//     date: '12 Dec, 2020',
//     time: '9pm',
//     imgUrl: img1,
//     description:
//       ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
//     quote:
//       'Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.',
//   },

//   {
//     id: 2,
//     title: 'If your car battery is down',
//     author: 'Muhib',
//     date: '12 Dec, 2020',
//     time: '9pm',
//     imgUrl: img2,
//     description:
//       ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
//     quote:
//       'Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.',
//   },

//   {
//     id: 3,
//     title: 'The best way to give trip',
//     author: 'Muhib',
//     date: '12 Dec, 2020',
//     time: '9pm',
//     imgUrl: img3,
//     description:
//       ' Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.  Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.',
//     quote:
//       'Voluptua dolore takimata dolor sadipscing nonumy consetetur et. Stet sed dolores dolores dolores dolores eos.',
//   },
// ];

export interface PostData {
  id: number;
  image: string;
  title: string;
  text: string;
  date: string;
  link: string;
  prew?: string;
}

export const blogData: PostData[] = [
  {
    id: 1,
    image: img1,
    title: 'Crema de vanilie',
    text: 'Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    prew: 'Crema de vanilie este ....',
    date: '1 Decembrie, 2020 9pm',
    link: '/post1',
  },
  {
    id: 2,
    image: img2,
    title: 'Blatul de tort',
    text: 'Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    prew: 'Blatul de Tort se ....',
    date: '1 Ianurie, 2021 9pm',
    link: '/post2',
  },
  {
    id: 3,
    image: img3,
    title: 'Aluatul de biscuiti',
    text: 'Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    prew: ' Aluatul de biscuiti este ....',
    date: '1 Dec, 2022 9pm',
    link: '/post3',
  },
  {
    id: 4,
    image: img1,
    title: 'Tortul cu ciocolata',
    text: 'Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    prew: 'Tortul cu ciocolata este...',
    date: '1 Februarie, 2023 9pm',
    link: '/post4',
  },
  {
    id: 5,
    image: img2,
    title: 'Trucuri in cofetarie ',
    text: 'Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    prew: 'In laboratorul de cofetarie, te ajuta....',
    date: '1 Martie, 2023 9pm',
    link: '/post5',
  },
  {
    id: 6,
    image: img2,
    title: 'Eclere si minichoux',
    text: 'Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren',
    prew: 'Pentru o buna practica...',
    date: '1 Aprilie, 2023 9pm',
    link: '/post6',
  },

  // Adaugă date pentru celelalte carduri aici
];
