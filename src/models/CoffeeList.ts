export interface CoffeeList {
  _id: string;
  name: string;
  quantity: number | string;
  rating: number;
  ingredient: string;
  roasted: string;
  type: "CAPSULES" | "BEANS";
  description: string;
  image_url: string;
  link: string;
}

export const CoffeeListData: CoffeeList[] = [
  {
    _id: "65da6b9a3cd43e55cd15c558",
    name: "Cappuccino",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "Um clássico italiano pronto em questão de segundos. Você vai adorar a camada generosa e sedutora de espuma de leite integral se encontrando com um espresso intenso, feito com os melhores grãos de café.",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/3/_/3_1_4_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/cappuccino-capsulas-10",
  },
  {
    _id: "65da6bed3cd43e55cd15c55c",
    name: "Pingado",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "A harmonia perfeita da suavidade entre o café e o leite, preparado do jeitinho que você gosta. Se surpreenda com o Pingado, que tem uma espuma cremosa e é a bebida perfeita para as pausas da manhã ou da tarde!",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/x/i/xicara_reta_1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-pingado-10",
  },
  {
    _id: "65da6c503cd43e55cd15c55f",
    name: "Café caseiro",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "Um café desenvolvido especialmente para os brasileiros que traz o sabor, o frescor e o aroma único do café coado e passado na hora ao toque de um botão. Descubra essa bebida suave, de média intensidade e feita com grãos 100% Arábica.",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/c/a/cafe-caseiro-cup-capsule-side_1_1_1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-cafe-caseiro-10",
  },
  {
    _id: "65daf6b9a3cd43e55cd15c558",
    name: "Sensação",
    ingredient: "Agua",
    roasted: "Cacau",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "Uma cápsula sabor morango, outra sabor chocolate, numa bebida cremosa cheia de sensações \nA combinação perfeita de sabor, cremosidade irresistível e momentos de puro prazer.",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/s/e/sensacao_xicara_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/sensacao-10capsulas",
  },
  {
    _id: "65da6befd3cd43e55cd15c55c",
    name: "Lungo organico",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "O sabor brasileiro de um café produzido de forma orgânica nas montanhas do Sul de Minas Gerais, com grãos 100% Arábica, notas adocicadas e delicadas, e um toque frutado. Um café para paladares especiais.",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/2/0/20220623_caps_xic_caps_origem_mundo_brasil_1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/origens-do-mundo-brasil-organico-10",
  },
  {
    _id: "65da6c503fcd43e55cd15c55f",
    name: "Cappuccino moça",
    ingredient: "Agua",
    roasted: "Leite",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "O delicioso cappuccino que você já conhece, agora com um toque de sabor MOÇA® DOCE DE LEITE - porque tudo fica melhor com sabor doce de leite!",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/x/i/xicara-capsula-frente_1__1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-cappuccino-moca-doce-de-leite-10",
  },
  {
    _id: "655s6c503fcd43e55cd15c55f",
    name: "Galak",
    ingredient: "Agua",
    roasted: "Leite",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "Com o GALAK® você experimenta a textura aveludada e o sabor inigualável do chocolate branco. Descubra um novo mundo em cada xícara!",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/c/c/ccc0b909-11f4-48c2-9b3b-5ebe02735085.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-galak",
  },
];

export const BeanListData: CoffeeList[] = [
  {
    _id: "65da6b9a3cd43e55cd15bean",
    name: "Café raro",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "Café da variedade Gesha cultivado na Fazenda Santa Mônica na Alta Mogiana Mineira pelo produtor Jean Faleiros. Muito bem avaliado por degustadores profissionais, esse lote é uma verdadeira raridade. Depois de passar por um processo de fermentação natural esse café adquiriu notas de vinho branco e acidez málica! Peso líquido: 250g.",
    image_url: "https://cdn.dooca.store/63955/products/raro_620x620.jpg?v=1682469571",
    link: "https://loja.encantosdocafe.com.br/cafe-raro-250g",
  },
  {
    _id: "65da6bed3cd43e55cd15bean",
    name: "Café agrado",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "Café da variedade Bourbon Vermelho produzido pela Fazenda Irmãs Pereira no Sul de Minas. Secado por um processo natural, esse grão é oferecido com uma torra média escura. Suas notas sensoriais lembram mel e cacau. Peso líquido: 250g.",
    image_url: "https://cdn.dooca.store/63955/products/agrado_620x620.jpg?v=1682469664",
    link: "https://loja.encantosdocafe.com.br/cafe-agrado-250g",
  },
  {
    _id: "65da6b96sa3cd43e55cd15bean",
    name: "Baggio chocolate trufado",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "O café aromatizado  Chocolate Trufado  proporciona uma experiência sensorial única e agradável com seu sabor doce, intensidade média, e textura encorpada e aveludada.\nAo experimentar o  Baggio Chocolate Trufado , você sentirá um aroma delicioso de chocolate ao leite que complementa perfeitamente o sabor delicado da bebida. As notas de trufa de chocolate adicionam um toque extra de aroma e cremosidade que tornam este café ainda mais especial.",
    image_url: "https://baggiocafe.com.br/cdn/shop/products/BaggioAromasChocolateTrufado250g_1296x.png?v=1658265915",
    link: "https://baggiocafe.com.br/products/baggio-cafe-aromatizado-chocolate-trufado",
  },
  {
    _id: "65da6bed6453cd43e55cd15bean",
    name: "Baggio Bourbon",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "O Baggio Café Especial Bourbon é um café especial artesanal. Torrado artesanalmente, possui um paladar definido, com acidez sutil, para apreciadores desta variedade. Apresenta notas gustativas marcantes, corpo e doçura muito presente.",
    image_url:
      "https://baggiocafe.com.br/cdn/shop/files/BaggioBourbonEspressoTM250g_v5_c4ebe75e-3f0a-4a71-8263-c74c01cadf88_1296x.png?v=1686145870",
    link: "https://baggiocafe.com.br/products/baggio-cafe-bourbon-250g-moido",
  },
  {
    _id: "65da6c503cd43e55cd15bean",
    name: "Blend sensação",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "Blend de lotes diferentes da mesma variedade, catucaí vermelho! Cafés cultivados na mesma região e com o mesmo processo pós colheita, honey. Uma composição de sabores que leva a um café rico em doçura, fácil de beber e com notas sensoriais de mel e rapadura. Peso líquido: 250g.",
    image_url: "https://cdn.dooca.store/63955/products/sensacao_620x620.jpg?v=1682469613",
    link: "https://loja.encantosdocafe.com.br/cafe-blend-sensacao-250g",
  },
  {
    _id: "65fa6c503cd43e55cd15bean",
    name: "Café desejo",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "Café da variedade Catuaí Amarelo produzido pela Fazenda Lagoinha no Sul de Minas. Esse grão passou por um processo pós colheita com fermentação induzida por leveduras. Muito saboroso e com uma acidez exótica, esse café tem notas sensoriais de frutas vermelhas e aroma floral. Peso líquido: 250g.",
    image_url: "https://cdn.dooca.store/63955/products/desejo_620x620.jpg?v=1682469636",
    link: "https://loja.encantosdocafe.com.br/cafe-desejo-250g",
  },
];

export const FavoriteListData: CoffeeList[] = [
  {
    _id: "65da6c503fcd43e55cd15c55f",
    name: "Cappuccino moça",
    ingredient: "Agua",
    roasted: "Leite",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "O delicioso cappuccino que você já conhece, agora com um toque de sabor MOÇA® DOCE DE LEITE - porque tudo fica melhor com sabor doce de leite!",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/x/i/xicara-capsula-frente_1__1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-cappuccino-moca-doce-de-leite-10",
  },
  {
    _id: "65da6bed6453cd43e55cd15bean",
    name: "Baggio Bourbon",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "O Baggio Café Especial Bourbon é um café especial artesanal. Torrado artesanalmente, possui um paladar definido, com acidez sutil, para apreciadores desta variedade. Apresenta notas gustativas marcantes, corpo e doçura muito presente.",
    image_url:
      "https://baggiocafe.com.br/cdn/shop/files/BaggioBourbonEspressoTM250g_v5_c4ebe75e-3f0a-4a71-8263-c74c01cadf88_1296x.png?v=1686145870",
    link: "https://baggiocafe.com.br/products/baggio-cafe-bourbon-250g-moido",
  },
  {
    _id: "655s6c503fcd43e55cd15c55f",
    name: "Galak",
    ingredient: "Agua",
    roasted: "Leite",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "Com o GALAK® você experimenta a textura aveludada e o sabor inigualável do chocolate branco. Descubra um novo mundo em cada xícara!",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/c/c/ccc0b909-11f4-48c2-9b3b-5ebe02735085.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-galak",
  },
  {
    _id: "65da6bed3cd43e55cd15bean",
    name: "Café agrado",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "Café da variedade Bourbon Vermelho produzido pela Fazenda Irmãs Pereira no Sul de Minas. Secado por um processo natural, esse grão é oferecido com uma torra média escura. Suas notas sensoriais lembram mel e cacau. Peso líquido: 250g.",
    image_url: "https://cdn.dooca.store/63955/products/agrado_620x620.jpg?v=1682469664",
    link: "https://loja.encantosdocafe.com.br/cafe-agrado-250g",
  },
  {
    _id: "65da6bed3cd43e55cd15c55c",
    name: "Pingado",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "A harmonia perfeita da suavidade entre o café e o leite, preparado do jeitinho que você gosta. Se surpreenda com o Pingado, que tem uma espuma cremosa e é a bebida perfeita para as pausas da manhã ou da tarde!",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/x/i/xicara_reta_1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-pingado-10",
  },
  {
    _id: "65da6c503cd43e55cd15c55f",
    name: "Café caseiro",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "CAPSULES",
    quantity: 10,
    rating: 5,
    description:
      "Um café desenvolvido especialmente para os brasileiros que traz o sabor, o frescor e o aroma único do café coado e passado na hora ao toque de um botão. Descubra essa bebida suave, de média intensidade e feita com grãos 100% Arábica.",
    image_url:
      "https://www.nescafe-dolcegusto.com.br/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/c/a/cafe-caseiro-cup-capsule-side_1_1_1_1.webp",
    link: "https://www.nescafe-dolcegusto.com.br/sabores/capsulas-cafe-caseiro-10",
  },
  {
    _id: "65da6c503cd43e55cd15bean",
    name: "Blend sensação",
    ingredient: "Agua",
    roasted: "Arabica",
    type: "BEANS",
    quantity: "250g",
    rating: 5,
    description:
      "Blend de lotes diferentes da mesma variedade, catucaí vermelho! Cafés cultivados na mesma região e com o mesmo processo pós colheita, honey. Uma composição de sabores que leva a um café rico em doçura, fácil de beber e com notas sensoriais de mel e rapadura. Peso líquido: 250g.",
    image_url: "https://cdn.dooca.store/63955/products/sensacao_620x620.jpg?v=1682469613",
    link: "https://loja.encantosdocafe.com.br/cafe-blend-sensacao-250g",
  },
];
