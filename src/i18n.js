import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    sk: {
  translation: {
  navLinks: [
    {
      label: "Menu",
      href: "#menu",
    },
    {
      label: "Galéria",
      href: "#gallery",
    },
    {
      label: "Kontakt",
      href: "#contact",
    },
  ],

  hero: {
    top: "KEŽMAROK • OD ROKU 2024",
    title: "Káva & Bistro",
    subtitle: "s dušou.",
    description1: "MIESTO, KDE SA STRETÁVA VÝBEROVÁ KÁVA,",
    description2: "ČERSTVÉ JEDLO A POKOJNÁ ATMOSFÉRA.",
    primaryButton: "Pozrieť menu →",
    secondaryButton: "Galéria →",
  },
textmenu:{
  nameF:"Jedlo",
  nameD:"Nápoje",
  nameS: "Špeciality",
   our:"Naša odporúča",
    vegan:"Vegetariánske",
},


  menu: [
  
    {
      category: "Predjedlá",
      items: [
        {
          name: "Kačacia paštéta",
          description: "brusnicový džem / kváskový chlieb",
          price: "6,90 €",
          vegan: false,
          recommended: true,
        },
        {
          name: "Bryndzová nátierka",
          description: "fermentovaná cibuľa / kváskový chlieb",
          price: "6,90 €",
          vegan: false,
          recommended: false,
        },
        {
          name: "Hranolky zo sladkých zemiakov",
          description: "hľuzovková majonéza / syr",
          price: "6,90 €",
          vegan: false,
          recommended: true,
        },
        {
          name: "Burrata Caprese",
          description: "paradajky / bazalka / kváskový chlieb",
          price: "7,50 €",
          vegan: false,
          recommended: false,
        },
      ],
    },

    {
      category: "Polievky",
      items: [
        {
          name: "Polievka dňa",
          description: "Dostupné priamo v pobočke",
          price: "4,50 €",
          vegan: false,
          recommended: false,
        },
        {
          name: "Hovädzí vývar",
          description: "domáce rezance / mäso / mrkva",
          price: "4,50 €",
          vegan: false,
          recommended: true,
        },
      ],
    },

    {
      category: "Hlavné jedlá",
      items: [
        {
          name: "Domáce bryndzové halušky",
          description: "maslo / šalvia",
          price: "9,90 €",
          vegan: false,
          recommended: true,
        },
        {
          name: "Tagliatelle",
          description: "sezónne pesto / čerešňové paradajky / parmezán",
          price: "9,90 €",
          vegan: false,
          recommended: false,
        },
        {
          name: "Kuracie supreme",
          description: "grilovaná zelenina / baby zemiaky",
          price: "12,50 €",
          vegan: false,
          recommended: true,
        },
        {
          name: "Jelení guláš",
          description: "domáce knedľe / čučoriedkový džem",
          price: "14,50 €",
          vegan: false,
          recommended: false,
        },
        {
          name: "Pečený halibut",
          description: "parmezánová polenta / citrónová omáčka / fenikel",
          price: "17,50 €",
          vegan: false,
          recommended: false,
        },
        {
          name: "Viedenský teľací rezeň",
          description: "petržlenové zemiaky / brusnicový džem",
          price: "21,90 €",
          vegan: false,
          recommended: true,
        },
      ],
    },
    {
      category: "Dezerty",
      items: [
        {
          name: "Domáce ovocné pirohy",
          description: "maslo / strúhanka",
          price: "7,50 €",
          vegan: false,
          recommended: true,
        },
        {
          name: "Čerstvé dezerty",
          description: "dostupné vo vitríne",
          price: "",
          vegan: false,
          recommended: false,
        },
      ],
    },
  ],

  cafe: [
  {
    title: 'Káva',
    items: [
      {
        name: 'Espresso',
        sub: 'klasická talianska káva',
        price: '2,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Espresso Macchiato',
        sub: 'espresso s mliečnou penou',
        price: '2,40 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Dvojité Espresso',
        sub: 'silná dvojitá dávka kávy',
        price: '3,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Cappuccino',
        sub: 'espresso / naparené mlieko / pena',
        price: '3,00 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Flat White',
        sub: 'dvojité espresso / jemné mlieko',
        price: '3,60 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Caffè Latte',
        sub: 'espresso / krémové mlieko',
        price: '3,40 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Ľadové Latte',
        sub: 'espresso / mlieko / ľad',
        price: '3,80 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Filtrovaná Káva',
        sub: 'pomaly pripravovaná výberová káva',
        price: '3,50 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Bezkofeínová Káva',
        sub: 'jemná káva bez kofeínu',
        price: '2,80 €',
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    title: 'Špeciálne Nápoje',
    items: [
      {
        name: 'Chai Latte',
        sub: 'korenený čaj / naparené mlieko',
        price: '3,80 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Matcha Latte',
        sub: 'japonská matcha / mlieko',
        price: '4,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Horúca Čokoláda',
        sub: 'bohatý čokoládový nápoj',
        price: '3,50 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Domáca Limonáda',
        sub: 'čerstvé citrusy / perlivá voda',
        price: '4,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Čerstvá Pomarančová Šťava',
        sub: 'čerstvo lisované pomaranče',
        price: '4,50 €',
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    title: 'Čaj',
    items: [
      {
        name: 'Čerstvý Mätový Čaj',
        sub: 'čerstvá mäta / med',
        price: '3,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Čerstvý Zázvorový Čaj',
        sub: 'zázvor / citrón',
        price: '3,20 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Earl Grey',
        sub: 'čierny čaj / bergamot',
        price: '2,90 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Zelený Čaj',
        sub: 'ľahký a osviežujúci čaj',
        price: '2,90 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Ovocný Čaj',
        sub: 'ovocná čajová zmes',
        price: '2,90 €',
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    title: 'Signature Nápoje',
    items: [
      {
        name: 'Náš Espresso Tonic',
        sub: 'espresso / tonic / citrusy',
        price: '4,50 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Vanilkové Ľadové Latte',
        sub: 'espresso / vanilka / mlieko / ľad',
        price: '4,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Karamelové Cappuccino',
        sub: 'espresso / karamel / pena',
        price: '3,80 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Sezónny Nápoj Podniku',
        sub: 'limitovaná sezónna špecialita',
        price: '4,50 €',
        vegan: false,
        recommended: true,
      },
    ],
  },
],

special: {
  aka: "Veľkonočný týždeň",

  items: [
    {
      name: "Čerstvá ovocno-zeleninová šťava",
      weight: "0,3l",
      price: "2,90€",
      ingredients: "Jablko/mrkva/zeler (9)",
      vegan: true,
      recommended: false,
    },
    {
      name: "Špenátovo-avokádová miska s ovocím",
      weight: "250g",
      price: "6,50€",
      ingredients: "Baby špenát/avokádo/banán/domáca granola/ovocie (1,8)",
      vegan: false,
      recommended: true,
    },
    {
      name: "Chrumkavý chlieb s vajíčkovou nátierkou a lososom",
      weight: "150g",
      price: "7,50€",
      ingredients: "Chlieb/losos/vajíčko/rukola (1,3,4,7,10)",
      vegan: false,
      recommended: true,
    },
    {
      name: "Francúzsky toast",
      weight: "200g",
      price: "7,50€",
      ingredients: "Kvásková brioška/vajíčko/ovocie/mascarpone (1,3,7)",
      vegan: false,
      recommended: true,
    },
    {
      name: "Spišské párky",
      weight: "200g",
      price: "7,50€",
      ingredients: "Lokálny mäsiar/horčica/chren/kečup/pečivo (1,3)",
      vegan: false,
      recommended: false,
    },
    {
      name: "Omeleta so špargľou a parmezánom",
      weight: "200g",
      price: "7,90€",
      ingredients: "Vajíčka/špargľa/parmezán/kváskový chlieb/greens (1,3)",
      vegan: false,
      recommended: true,
    },
    {
      name: "Burrata s domácim jarným pestom a focacciou",
      weight: "150g",
      price: "8,50€",
      ingredients: "Burrata/pesto/focaccia (1,7,8)",
      vegan: false,
      recommended: true,
    },
    {
      name: "Eggs Benedict na kváskovej brioške",
      weight: "300g",
      price: "8,50€",
      ingredients: "Slanina/cheddar/stratené vajíčka/hollandaise omáčka (1,3,7)",
      vegan: false,
      recommended: true,
    },
    {
      name: "Turecké vajíčka",
      weight: "250g",
      price: "8,50€",
      ingredients: "Vajíčka/jogurtovo-kôprový základ/paprikové maslo/kváskové pečivo (1,3,7)",
      vegan: false,
      recommended: true,
    },
  ],
},

gallery:{
  maintext:"Naša",
  bigtrxt:"Galéria",
},
where:{
  maintext:"Kde nás nájdete",
  bigtrxt:" Kežmarok, Slovensko",
  about:"O nás",
}
}
    },



    en: {
     
      translation: {
        navLinks: [
          {
            label: "Menu",
            href: "#menu"
          },
          {
            label: "Gallery",
            href: "#gallery"
          },
          {
            label: "Contact",
            href: "#contact"
          }
        ],
      hero: {
      top: "KEŽMAROK • SINCE 2024",
      title: "Coffee & Bistro",
      subtitle: "with soul.",
      description1: "A PLACE WHERE SPECIALTY COFFEE,",
      description2: "FRESH FOOD AND A CALM ATMOSPHERE MEET.",
      primaryButton: "View menu →",
      secondaryButton: "Gallery →"
    },

  textmenu: {
  nameF: "Food",
  nameD: "Drinks",
  nameS: "Special",
  our: "Our Recommendation",
  vegan: "Vegetarian",
},
menu: [

  {
    category: "Starters",
    items: [
      {
        name: "Duck Pâté",
        description: "cranberry jam / sourdough bread",
        price: "6,90 €",
        vegan: false,
        recommended: true,
      },
      {
        name: "Bryndza Spread",
        description: "fermented onion / sourdough bread",
        price: "6,90 €",
        vegan: false,
        recommended: false,
      },
      {
        name: "Sweet Potato Fries",
        description: "truffle mayonnaise / cheese",
        price: "6,90 €",
        vegan: false,
        recommended: true,
      },
      {
        name: "Burrata Caprese",
        description: "tomatoes / basil / sourdough bread",
        price: "7,50 €",
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    category: "Soups",
    items: [
      {
        name: "Soup of the Day",
        description: "Available directly in the branch",
        price: "4,50 €",
        vegan: false,
        recommended: false,
      },
      {
        name: "Beef Broth",
        description: "homemade noodles / beef / carrots",
        price: "4,50 €",
        vegan: false,
        recommended: true,
      },
    ],
  },

  {
    category: "Main Courses",
    items: [
      {
        name: "Traditional Bryndza Dumplings",
        description: "butter / sage",
        price: "9,90 €",
        vegan: false,
        recommended: true,
      },
      {
        name: "Tagliatelle",
        description: "seasonal pesto / cherry tomatoes / parmesan",
        price: "9,90 €",
        vegan: false,
        recommended: false,
      },
      {
        name: "Chicken Supreme",
        description: "grilled vegetables / baby potatoes",
        price: "12,50 €",
        vegan: false,
        recommended: true,
      },
      {
        name: "Venison Goulash",
        description: "homemade dumplings / blueberry jam",
        price: "14,50 €",
        vegan: false,
        recommended: false,
      },
      {
        name: "Roasted Halibut",
        description: "parmesan polenta / lemon sauce / fennel",
        price: "17,50 €",
        vegan: false,
        recommended: false,
      },
      {
        name: "Viennese Veal Schnitzel",
        description: "parsley potatoes / cranberry jam",
        price: "21,90 €",
        vegan: false,
        recommended: true,
      },
    ],
  },

  {
    category: "Desserts",
    items: [
      {
        name: "Homemade Fruit Pierogi",
        description: "butter / breadcrumbs",
        price: "7,50 €",
        vegan: false,
        recommended: true,
      },
      {
        name: "Fresh Desserts",
        description: "available in the display case",
        price: "",
        vegan: false,
        recommended: false,
      },
    ],
  },

],
 
cafe :[
  {
    title: 'Coffee',
    items: [
      {
        name: 'Espresso',
        sub: 'classic italian coffee',
        price: '2,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Espresso Macchiato',
        sub: 'espresso with milk foam',
        price: '2,40 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Double Espresso',
        sub: 'strong double shot coffee',
        price: '3,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Cappuccino',
        sub: 'espresso / steamed milk / foam',
        price: '3,00 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Flat White',
        sub: 'double espresso / silky milk',
        price: '3,60 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Caffè Latte',
        sub: 'espresso / creamy milk',
        price: '3,40 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Iced Latte',
        sub: 'espresso / milk / ice',
        price: '3,80 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Filtered Coffee',
        sub: 'slow brewed specialty coffee',
        price: '3,50 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Decaf Coffee',
        sub: 'smooth caffeine-free coffee',
        price: '2,80 €',
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    title: 'Special Drinks',
    items: [
      {
        name: 'Chai Latte',
        sub: 'spiced tea / steamed milk',
        price: '3,80 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Matcha Latte',
        sub: 'japanese matcha / milk',
        price: '4,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Hot Chocolate',
        sub: 'rich dark chocolate drink',
        price: '3,50 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Homemade Lemonade',
        sub: 'fresh citrus / sparkling water',
        price: '4,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Fresh Orange Juice',
        sub: 'freshly squeezed oranges',
        price: '4,50 €',
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    title: 'Tea',
    items: [
      {
        name: 'Fresh Mint Tea',
        sub: 'fresh mint leaves / honey',
        price: '3,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Fresh Ginger Tea',
        sub: 'ginger / lemon',
        price: '3,20 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Earl Grey',
        sub: 'black tea / bergamot',
        price: '2,90 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Green Tea',
        sub: 'light and refreshing tea',
        price: '2,90 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Fruit Tea',
        sub: 'mixed fruit infusion',
        price: '2,90 €',
        vegan: false,
        recommended: false,
      },
    ],
  },

  {
    title: 'Signature Drinks',
    items: [
      {
        name: 'Our Espresso Tonic',
        sub: 'espresso / tonic / citrus',
        price: '4,50 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Vanilla Iced Latte',
        sub: 'espresso / vanilla / milk / ice',
        price: '4,20 €',
        vegan: false,
        recommended: true,
      },
      {
        name: 'Caramel Cappuccino',
        sub: 'espresso / caramel / foam',
        price: '3,80 €',
        vegan: false,
        recommended: false,
      },
      {
        name: 'Seasonal House Drink',
        sub: 'limited seasonal specialty',
        price: '4,50 €',
        vegan: false,
        recommended: true,
      },
    ],
  },
]
,

special: {
  aka: "Easter Week",

  items: [
  {
    name: "Fresh Fruit & Vegetable Juice",
    weight: "0,3l",
    price: "2,90€",
    ingredients: "Apple/carrot/celery (9)",
    vegan: true,
    recommended: false,
  },
  {
    name: "Spinach & Avocado Bowl with Fruit",
    weight: "250g",
    price: "6,50€",
    ingredients: "Baby spinach/avocado/banana/homemade granola/fruit (1,8)",
    vegan: false,
    recommended: true,
  },
  {
    name: "Crunchy Bread with Egg Spread & Salmon",
    weight: "150g",
    price: "7,50€",
    ingredients: "Bread/salmon/egg/arugula (1,3,4,7,10)",
    vegan: false,
    recommended: true,
  },
  {
    name: "French Toast",
    weight: "200g",
    price: "7,50€",
    ingredients: "Sourdough brioche/egg/fruit/mascarpone (1,3,7)",
    vegan: false,
    recommended: true,
  },
  {
    name: "Spiš Sausages",
    weight: "200g",
    price: "7,50€",
    ingredients: "Local butcher/mustard/horseradish/ketchup/pastry (1,3)",
    vegan: false,
    recommended: false,
  },
  {
    name: "Omelette with Asparagus & Parmesan",
    weight: "200g",
    price: "7,90€",
    ingredients: "Eggs/asparagus/parmesan/sourdough bread/greens (1,3)",
    vegan: false,
    recommended: true,
  },
  {
    name: "Burrata with Homemade Spring Pesto & Focaccia",
    weight: "150g",
    price: "8,50€",
    ingredients: "Burrata/pesto/focaccia (1,7,8)",
    vegan: false,
    recommended: true,
  },
  {
    name: "Eggs Benedict on Sourdough Brioche",
    weight: "300g",
    price: "8,50€",
    ingredients: "Bacon/cheddar/poached eggs/hollandaise sauce (1,3,7)",
    vegan: false,
    recommended: true,
  },
  {
    name: "Turkish Eggs",
    weight: "250g",
    price: "8,50€",
    ingredients: "Eggs/yogurt-dill base/paprika butter/sourdough pastry (1,3,7)",
    vegan: false,
    recommended: true,
  },
],
},



 gallery:{
  maintext:"Naša",
  bigtrxt:"Gallery",
},
      


      }
    }
  },

  lng: "sk",
  fallbackLng: "sk"
});

export default i18n;