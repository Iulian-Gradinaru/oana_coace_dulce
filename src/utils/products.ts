import product1 from '../assets/products/Tort_inzmeurat.jpg';
import product2 from '../assets/products/Tort_tiramisu.jpg';
import product3 from '../assets/products/Tort_Medovik.jpeg';
import product4 from '../assets/products/Tort_Ecler.jpeg';
import product5 from '../assets/products/Tort_Pavlova.jpeg';
import product6 from '../assets/products/Tort-RedVelvet.jpeg';
import product7 from '../assets/products/Tort_Oreo.jpg';
import product8 from '../assets/products/Tort_ciocolata.jpeg';
import product9 from '../assets/products/poza2.jpg';
import product10 from '../assets/products/Tort_capsuni.jpg';
import product11 from '../assets/products/poza5.jpg';
import product12 from '../assets/products/poza6.jpg';
import product13 from '../assets/products/poza7.jpg';
import product14 from '../assets/products/poza1.jpg';
import product15 from '../assets/products/poza2.jpg';
import product16 from '../assets/products/poza3.jpg';
import product17 from '../assets/products/poza5.jpg';
import product18 from '../assets/products/poza6.jpg';

export interface ProductData {
  id: number;
  productName: string;

  productImage?: string;
  descriptions: string;

  cakeBase?: string;
  cream?: string;
  decoration?: string;
}

export const PRODUCTS: ProductData[] = [
  {
    id: 1,
    productName: 'Tort Inzmeurat',
    cakeBase: 'Făină albă de grâu, Cacao, Ou, Zahăr, Zahăr Vanilinat.',
    cream:
      'Lapte, Gălbenuș, Zahăr, Păstaie de vanilie, Amidon din Porumb, Mascarpone, Unt.',
    decoration: 'Zmeură proaspătă, Afine',
    productImage: product1,
    descriptions:
      'Combină gustul aromat al cremei de vanilie făcută din gălbenuș de ou, lapte și păstaie de vanilie cu cel acrișor al zmeurei. Blatul se face la alegere: blat de vanilie sau de cacao.',
  },

  {
    id: 2,
    productName: 'Tort Tiramisu',
    cakeBase: '',
    cream: '',
    decoration: '',
    productImage: product2,
    descriptions:
      "My Euphoria is an eau de parfum that exudes femininity. Euphoria is a seductive and irresistible women's fragrance that brings the promise of unforgettable memories, awakens your zest for life and inspires you to gain new experiences.Calvin Klein fragrance is inspired by the simple yet elegant orchid. The scent opens with seductive persimmon fruit and pomegranate. The eau de parfum then unfolds in the heart in intense tones of lotus blossom and orchid, with a base of liquid amber and luxurious mahogany.",
  },
  {
    id: 3,
    productName: 'Tort Medovik',
    cakeBase: 'Miere de albine, Unt, Ou, Zahăr.',
    cream: 'Smântână, Frișcă, Zahăr pudră, Zmeură',
    decoration: 'Firmituri obținute din blat',
    productImage: product3,
    descriptions:
      'Când spunem Medovik, spunem multe-multe foi și cremă acrișoară de smântână în care punem zmeură. O alegere bună pentru zilele călduroase de vară, dar nu numai.',
  },
  {
    id: 4,
    productName: 'Tort Ecler',
    cakeBase: 'lapte, Apă, Unt, Făină, Ou.',
    cream:
      'Lapte, Gălbenuș, Zahăr, Păstaie de vanilie, Unt, Amidon din porumb, Pastă de alune de pădure 100%, Fără zahăr adăugat.',
    decoration: 'Fructe proaspete de sezon și Migdale coapte',
    productImage: product4,
    descriptions:
      'Acest tort este turnat în formă rotundă însă rețetă coajei de ecler se respectă în totalitate',
  },
  {
    id: 5,
    productName: 'Tort Coffe Pavlova',
    cakeBase:
      'Albuș de ou, Zahar, Un praf de sare, Suc de lămâie, Amidon din porumb',
    cream:
      'Lapte, Gălbenuș, Zahăr, Păstaie de vanilie, Unt, Amidon din porumb, Cafea solubilă. ',
    decoration: 'Afine proaspete ',
    productImage: product5,
    descriptions:
      'Pavlova este acel tort care ne vorbește despre sensibilitate și fragilitate. Este tortul care are blat de bezea crocant la exterior și moale la interior. ',
  },
  {
    id: 6,
    productName: 'Tort Red Velvet',
    cakeBase:
      'Făină albă de grâu, Ou, Zahăr, Zahar vanilinat, Colorant pudră roșu.',
    cream:
      'Lapte, Gălbenuș, Zahăr, Păstaie de vanilie, Cremă de brânză, Zahăr pudră ',
    decoration: 'Fructe proaspete de sezon',
    productImage: product6,
    descriptions:
      'Ca o catifea fină este acest tort, atât blatul cât și crema acestuia. ',
  },
  {
    id: 7,
    productName: 'Tort Oreo',
    cakeBase: 'Cacao: Făină albă de grâu, Ou, Cacao, Zahăr, Zahar vanilinat.',
    cream:
      'Lapte, Gălbenuș, Zahăr, Păstaie de vanilie, Unt, Amidon din porumb, Frișcă, Biscuiți Oreo sfărâmați ',
    decoration: 'Mini-biscuiți Oreo',
    productImage: product7,
    descriptions:
      'Este o replică mai mare a biscuiților Oreo, însă cu mai multe blaturi și cremă din plin. ',
  },
  {
    id: 8,
    productName: 'Tort de Ciocolata',
    cakeBase: 'Cacao: Făină albă de grâu, Ou, Zahăr, Zahăr vanilinat.',
    cream:
      'Picături de ciocolata neagră, Picături de ciocolată cu lapte, Frișcă.',
    decoration: 'Bucăți de ciocolata Kit-Kat, Ferrero Rocher',
    productImage: product8,
    descriptions:
      'Pentru iubitorii de ciocolată acest tort aduce în farfurie gustul delicios al ciocolatei Callebaut.',
  },
  {
    id: 9,
    productName: 'Tort Krantz',

    productImage: product9,
    descriptions:
      'The bottle of the new Divine perfume preserves Jean Paul Gaultier\'s creative heritage, inspired by the sensual bottle in the shape of a female torso, present in all editions of the "Classique" fragrance. This bottle is complemented by another iconic symbol of the designer: the conical corset, a piece of clothing created by Jean Paul Gaultier for Madonna\'s "Blond Ambition" world tour. Divine opens with notes of lily, marshmallow, marine notes and white flowers. These notes combine harmoniously to create a fragrance full of refinement and elegance. The lily notes add a delicate and sophisticated floral note, while the marshmallow adds a subtle sweetness. Marine notes bring a refreshing freshness, and white flower adds a touch of femininity and elegance.',
  },

  {
    id: 10,
    productName: 'Tort încăpșunat',
    cakeBase: 'Făină albă de grâu, Cacao, Ou, Zahăr, Zahăr Vanilinat.',
    cream:
      'Lapte, Gălbenuș, Zahăr, Păstaie de vanilie, Amidon din Porumb, Mascarpone, Unt.',
    decoration: 'Căpșuni proaspete, Afine',
    productImage: product10,
    descriptions:
      'Combină gustul aromat al cremei de vanilie făcută din gălbenuș de ou, lapte și păstaie de vanilie cu cel acrișor al zmeurei. Blatul se face la alegere: blat de vanilie sau de cacao.',
  },

  // {
  //   id: 10,
  //   productName: 'Mugler',
  //   type: 'Alien Goddess Supra Florale',
  //   price: 109.99,
  //   discount: 120.99,
  //   productImage: product10,
  //   descriptions:
  //     'Alien Goddess Supra Florale is a complex fragrance with multiple layers and olfactory nuances that aims to create a unique and memorable experience for the wearer. The eau de parfum evokes a unique combination of elements, from the life force of cactus blossoms to the succulent breeze of pears to the white flowers of jasmine and strawberry, with slightly salty nuances. It suggests a complex composition, with floral and fruity notes blending harmoniously. These aromas are underscored by final notes of amber and mineral moss, which add depth and persistence to the fragrance.',
  // },
  // {
  //   id: 11,
  //   productName: 'NewJeanPaulGaultier',
  //   type: 'Le Male Elixir Parfum',
  //   price: 49.99,
  //   discount: 79.99,
  //   productImage: product11,
  //   descriptions:
  //     "Le Male Elixir fragrance is an intense and sensual olfactory experience, perfect for men who want to enhance their sex appeal and attract attention in an irresistible way. The design of the bottle in the shape of a man's torso, decorated with elegant golden stripes, is an expression of masculinity and attractiveness. It is reminiscent of a sailor shirt and adds an element of originality and style to the bottle. The composition of this fragrance seems to be rich and varied. From tropical tonka bean aromas to notes of lavender, mint and bergamot, the fragrance promises an intriguing olfactory journey. Its complex composition and distinctive packaging make this fragrance a great option for those who want to feel irresistible and confident.",
  // },
  // {
  //   id: 12,
  //   productName: 'Paco Rabanne',
  //   type: 'Fame Parfum',
  //   price: 78.99,
  //   discount: 98.99,
  //   productImage: product12,
  //   descriptions:
  //     "Created with the utmost refinement, FAME Parfum de la Rabanne is responsibly formulated with the most precious, ethically sourced ingredients. Precious jasmine seduces you at first sight, and the scent of incense simply mesmerizes you. The final notes of mysterious musk intensify and entice you! Inspired by Rabanne's legendary Rabanne dress, the new Fame fragrance is an irresistible and daring new design piece. A precious, iconic jewel, a glossy black dress in keeping with the intensity of the perfume inside.",
  // },
  // {
  //   id: 13,
  //   productName: 'Prada-Milano',
  //   type: 'Paradoxe Intense',
  //   price: 67.99,
  //   discount: 89.99,
  //   productImage: product13,
  //   descriptions:
  //     "Prada Paradoxe Intense women's fragrance becomes your new addiction that you will never give up. It charms you from the very first moment and convinces you time and time again that it more than deserves its place on your dressing table.",
  // },
  // {
  //   id: 14,
  //   productName: 'Ubaya',
  //   type: 'Rain Breeze',
  //   price: 19.99,
  //   discount: 35.99,
  //   productImage: product14,
  //   descriptions:
  //     'Let your senses be awakened by RAIN BREEZE, a scent that will bring you the promise of rain, charged with deep sensations. An ode to a love story as rare as rain in the desert, as passionate as a storm, as intense as the connection between heaven and earth. Soar above the clouds in the thrilling adventure of your love story, with a blend of oud that melts into energizing cardamom and inhale the freshness-filled aura of the green blend built around notes of patchouli. UBAYA will deepen your passion for oriental fragrances with the new collection that will draw on your skin a fascinating story of the Hidden Oasis, the place that reveals itself only to those who truly feel, deeply and intensely. Dare to dream with Ubaya White Collection: Silk Shadows, Magnetic Shine and Rain Breeze.',
  // },
  // {
  //   id: 15,
  //   productName: 'Valentino',
  //   type: 'Born In Rome Coral Donna',
  //   price: 75.99,
  //   discount: 95.99,
  //   productImage: product15,
  //   descriptions:
  //     'Intense and bright, the fragrance begins with a juicy and refreshing kiwi accord, nuanced by orange essence. As it moves towards the heart of the fragrance, an infusion of jasmine flowers creates a modern bouquet that accentuates femininity. Finally, Ambrette seeds bring warmth and softness to the fragrance, complemented by the woody accord of musk. Inspired by the beautiful colours of the sunset, the fragrance bottle perfectly describes the way the sun falls on the streets of Rome at the most magical hour of the day.',
  // },
  // {
  //   id: 16,
  //   productName: 'YvesSaintLaurent',
  //   type: 'Libre',
  //   price: 40.99,
  //   discount: 59.99,
  //   productImage: product16,
  //   descriptions:
  //     'Yves Saint Laurent urges you to break down any barriers and live your life by your own rules. Libre is the scent of freedom, a floral fragrance that focuses on lavender, jasmine and orange blossom. These are enveloped by mandarin, blackcurrant, cedarwood, musk and Madagascar vanilla. The bottle containing the elixir of liberation is decorated with exquisite gold and black elements. Be brave and bold with the new Yves Saint Laurent Libre fragrance!',
  // },
  // {
  //   id: 17,
  //   productName: 'Stories Of Oud',
  //   type: 'Zaina',
  //   price: 39.99,
  //   discount: 59.99,
  //   productImage: product17,
  //   descriptions:
  //     'Zaina is a fragrance that will awaken the most seductive version of you, calling you into a world full of mystery and sensuality. The blend of oud and the sweetness of rose will captivate your senses, while the blend of bergamot and amber will draw you into a dance of passion and desire. Discover Stories of Oud, an opulent collection of oriental fragrances inspired by the rich culture and breathtaking landscapes of the Middle East. A series of stories united by the rare and precious scent of oud, with each fragrance representing a celebration of the emotions that make life truly extraordinary. Choose the story you want to live: Intisar (triumphant), Alaïa (sublime), Zaina (enchanting), Emaan (victorious), Amyr (noble).',
  // },
  // {
  //   id: 18,
  //   productName: 'Ralph Lauren',
  //   type: 'Polo Red Parfum',
  //   price: 109.99,
  //   discount: 99.99,
  //   productImage: product18,
  //   descriptions:
  //     "Polo Red eau de parfum is a seductive and vibrant fragrance, part of Ralph Lauren's Polo Red family. This fragrance is created from an enticing blend of rich, natural flavours, giving it a distinct and memorable character. The main notes include essences of tree, ginger and aromatic sage, and their combination exudes warm sensuality and pure sophistication. Together, these fragrances create a masculine and charming scent that imparts elegance and attracts the attention of others.",
  // },
];
