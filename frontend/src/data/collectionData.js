// data/collectionData.js
//
// Single source of truth for the Collection pages.
//
// - app/collection/page.jsx
//      -> reads categories (preview cards)
//
// - app/collection/[category]/page.jsx
//      -> reads productSections and displays
//         heading + products under that heading
//
// - app/product/[slug]/page.jsx
//      -> looks a single product up by slug


export const categories = [
  // =========================================================
  // JOURNALS
  // =========================================================
  {
    slug: "journals",

    tabLabel: "Journals",

    label: "Journals",

    description:
      "Handcrafted Leather-covered Journals With Handmade Cotton-rag Pages. Each Journal Is A Unique Piece Designed To Inspire Daily Writing And To Last Decades.",

    specifications: [
      {
        label: "Cover Materials",
        value:
          "Full-grain Leather, Embossed Leather, Suede Leather, MDF (Laser-engraved)",
      },

      {
        label: "Page Stock",
        value:
          "Handmade Cotton-rag With Deckled Edges - 120 GSM",
      },

      {
        label: "Sizes Available",
        value:
          '6×4", 7×5", 8×6". Custom Sizes, Covers, Page Stock, And Branding On Request, MOQ 50 Units',
      },
    ],

    idealFor:
      "Retail Stationery | Corporate Gifting | Travel Journals | Artist Sketchbooks | Wedding Guest Books | Promotional Branded Journals",

    previewCards: [
      {
        name: "Leather Journals",
        image: "/images/home/26.png",
      },

      {
        name: "Paper Journals",
        image: "/images/products/4.png",
      },
    ],

    // =======================================================
    // PRODUCT SECTIONS
    // =======================================================
    productSections: [
      {
        slug: "leather-journals",
        heading: "Leather Journals",

        products: [
          {
            slug: "swede-leather-journal-vintage-1",
            name: "Leather Journels ",
            desc:
              "Leather Journels With Handmade Paper",
            meta: [
              'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
              
            ],
            image: "/images/newproducts/1.jpg",
          },

          {
            slug: "swede-leather-journal-vintage-2",
            name: "Embosed Leather Journels",
            desc:
              "Embosed Leather Journels With Stones",
            meta: [
            'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
           
            ],
            image: "/images/newproducts/2.jpg",
          },
             {
            slug: "swede-leather-journal-vintage-2",
            name: "Leaser Engraved  Swede Leather Journels",
            desc:
              "Leaser Engraved  Swede Leather Journels",
            meta: [
             'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
            ],
            image: "/images/newproducts/3.jpg",
          },
             {
            slug: "swede-leather-journal-vintage-2",
            name: "Leaser Engraved Leather Journels",
            desc:
              "Leaser Engraved Leather Journels",
            meta: [
               'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
            ],
            image: "/images/newproducts/4.jpg",
          },

             {
            slug: "swede-leather-journal-vintage-2",
            name: "Leather Journels",
            desc:
              "Leather Journels",
            meta: [
              'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
            ],
            image: "/images/newproducts/5.jpg",
          },
             {
            slug: "swede-leather-journal-vintage-2",
            name: "Leather Journels",
            desc:
              "Leather Journels with Handstrip ",
            meta: [
          'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
            ],
            image: "/images/newproducts/6.jpg",
          },
             {
            slug: "swede-leather-journal-vintage-2",
            name: "Leather Journels with Key Lock ",
            desc:
              "Leather Journels with Key Lock ",
            meta: [
             'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
            ],
            image: "/images/newproducts/7.jpg",
          },
          // ADD MORE LEATHER JOURNALS HERE
          // {
          //   slug: "leather-journal-3",
          //   name: "Your Product Name",
          //   desc: "Your product description.",
          //   meta: [
          //     'Size: 7 x 5" | Item Code: COJL-013',
          //     "120 GSM | MOQ: 50 units",
          //   ],
          //   image: "/images/products/your-image.png",
          // },
        ],
      },

      {
        slug: "paper-journals",
        heading: "Paper Journals",

        products: [
          {
            slug: "swede-leather-journal-vintage-3",
            name: "Block Printed Journels",
            desc:
              "Block Printed Journels",
            meta: [
            'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
            ],
            image: "/images/newproducts/8.jpg",
          },

          {
      slug: "block-printed-journals-2",
      name: "Block Printed Journels",
      desc:
        "Block Printed Journels",
      meta: [
        'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
      ],
      image: "/images/newproducts/9.jpg",
    },

    {
      slug: "block-printed-hard-cover-journals",
      name: "Block Printed Hard Cover Journels",
      desc:
        "Block Printed Hard Cover Journels",
      meta: [
        'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
      ],
      image: "/images/newproducts/10.jpg",
    },

    {
      slug: "digital-printed-soft-cover-journals",
      name: "Digital Printed Soft Cover Journels",
      desc:
        "Digital Printed Soft Cover Journels",
      meta: [
        'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
      ],
      image: "/images/newproducts/11.jpg",
    },

    {
      slug: "digital-printed-soft-cover-seed-paper-journals-1",
      name: "Digital Printed Soft Cover Seed Paper Journels",
      desc:
        "Digital Printed Soft Cover Seed Paper Journels",
      meta: [
        'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
      ],
      image: "/images/newproducts/12.jpg",
    },

    {
      slug: "digital-printed-soft-cover-seed-paper-journals-2",
      name: "Digital Printed Soft Cover Seed Paper Journels",
      desc:
        "Digital Printed Soft Cover Seed Paper Journels",
      meta: [
        'Size 7 x 5" 8 x 6 " 6 x 4"  9 x 6" A4" A3"',
      ],
      image: "/images/newproducts/13.jpg",
    },

          // ADD MORE PAPER JOURNALS HERE
          // {
          //   slug: "paper-journal-3",
          //   name: "Your Product Name",
          //   desc: "Your product description.",
          //   meta: [
          //     'Size: 7 x 5" | Item Code: COJP-003',
          //     "120 GSM | MOQ: 50 units",
          //   ],
          //   image: "/images/products/your-image.png",
          // },
        ],
      },
    ],
  },


  // =========================================================
  // DECORATION
  // =========================================================
  {
    slug: "decoration",

    tabLabel: "Decoration",

    label: "Decoration",

    description:
      "Architectural Paper Sculpture Produced By Hand In 36 Distinct Shapes Across 9 Sizes. Used Extensively In Home Décor, Retail Window Display, Event Design, And Seasonal Product Ranges.",

    specifications: [
      {
        label: "Design",
        value:
          "36+ Designs Including Ornaments, Angels, Trees, Eggs, Bells, And Abstract Forms",
      },

      {
        label: "9 Sizes",
        value:
          "XS (8 cm) Through 5XL (30 cm)",
      },

      {
        label: "Available",
        value:
          "In A Full Range Of Colours",
      },

      {
        label: "Ships Flat",
        value:
          "Assembles In Seconds",
      },

      {
        label: "Suitable",
        value:
          "For Hanging, Tabletop, And Display Use",
      },
    ],

    idealFor:
      "Christmas And Seasonal Décor | Retail Display | Event Décor | Interior Styling | Product Photography | Gift Shop Retail",

    previewCards: [
      {
        name: "Honeycomb Decoration",
        image: "/images/products/12.png",
      },

      {
        name: "Garlands Decoration",
        image: "/images/products/2.png",
      },
    ],

   productSections: [
  {
    slug: "honeycomb-decoration",
    heading: "Honeycomb Decoration",

    products: [
      {
        slug: "paper-honeycomb-01",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/14.jpg",
      },

      {
        slug: "paper-honeycomb-02",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/15.jpg",
      },

      {
        slug: "paper-honeycomb-03",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/16.jpg",
      },

      {
        slug: "paper-honeycomb-04",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/17.jpg",
      },

      {
        slug: "paper-honeycomb-05",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/18.jpg",
      },

      {
        slug: "paper-honeycomb-06",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/19.jpg",
      },

      {
        slug: "paper-honeycomb-07",
        name: "Paper Honeycombs",
        desc: "Paper Honeycombs",
        meta: [
          'Size: XS 8 cm | S 10 cm | M 12.5 cm | L 15 cm | XL 17.5 cm | XXL 20 cm | 3XL 22.5 cm | 4XL 25 cm | 5XL 30 cm',
        ],
        image: "/images/newproducts/20.jpg",
      },
    ],
  },


      {
  slug: "garlands-decoration",
  heading: "Garlands Decoration",

  products: [
    {
      slug: "paper-garland-01",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/21.jpg",
    },

    {
      slug: "paper-garland-02",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/22.jpg",
    },

    {
      slug: "paper-garland-03",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/23.jpg",
    },

    {
      slug: "paper-garland-04",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/24.jpg",
    },

    {
      slug: "paper-garland-05",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/25.jpg",
    },

    {
      slug: "paper-garland-06",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/26.jpg",
    },

    {
      slug: "paper-garland-07",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/27.jpg",
    },

    {
      slug: "paper-garland-08",
      name: "Paper Garlands",
      desc:
        "Handcrafted paper garland designed to add a colourful and elegant decorative touch to any space.",
      meta: [
        "Size: 1.5 m",
      ],
      image: "/images/newproducts/28.jpg",
    },
  ],
},
    ],
  },


  // =========================================================
  // LIGHTINGS
  // =========================================================
  {
    slug: "lightings",

    tabLabel: "Lightings",

    label: "Lightings",

    description:
      "Pendant Lampshades Crafted From MDF, Cord, And Paper, With Geometric String-art Patterns And Minimalist Aesthetic. Each Shade Creates A Warm, Patterned Glow That Transforms A Space.",

    specifications: [
      {
        label: "Materials",
        value:
          "MDF (Pine Mdf From Waste Wood Powder And Waste Paper), Cord, Paper",
      },

      {
        label: "Designs",
        value:
          "Geometric Frame With Interwoven Thread Patterns",
      },

      {
        label: "Available",
        value:
          "In MDF Pendant Lamp (Structural) And MDF Pendant Lamp With Cord (String-wrapped)",
      },

      {
        label: "Colour And Size",
        value:
          "Custom Colour And Size Available",
      },

      {
        label: "Suitable",
        value:
          "For Residential And Commercial Interiors",
      },
    ],

    idealFor:
      "Home Décor | Restaurant And Café Interiors | Boutique Retail Display | Hospitality Design | Gift Retail",

    previewCards: [
      {
        name: "Paper Lamps - Lightings",
        image: "/images/Products/5.png",
      },

      {
        name: "MDF Lamps - Lightings",
        image: "/images/Products/6.png",
      },
    ],

    // =======================================================
    // PAPER + MDF PRODUCT GROUPS
    // =======================================================
    productSections: [
      {
        slug: "paper-pendant-lamps",
        heading: " Paper Lamps",

        products: [
          {
      slug: "paper-pendant-lamp-01",
      name: "Paper Pendant Lamp",
      desc:
        "Handcrafted paper pendant lamp with a lightweight design, creating a warm and elegant ambience for interiors.",
      meta: [
        "Size: 40 × 20 cm",
      ],
      image: "/images/newproducts/29.jpg",
    },

    {
      slug: "paper-pendant-lamp-02",
      name: "Paper Pendant Lamp",
      desc:
        "Handcrafted paper pendant lamp with a graceful form, designed to bring a soft and decorative glow to any space.",
      meta: [
        "Size: 40 × 25 cm",
      ],
      image: "/images/newproducts/30.jpg",
    },

    {
      slug: "paper-pendant-lamp-03",
      name: "Paper Pendant Lamp",
      desc:
        "Decorative handcrafted paper pendant lamp with an artistic structure, ideal for adding character and warmth to interiors.",
      meta: [
        "Size: 33 × 40 cm",
      ],
      image: "/images/newproducts/31.jpg",
    },

    {
      slug: "paper-table-lamp",
      name: "Table Lamp",
      desc:
        "Handcrafted paper table lamp designed to create a warm ambient glow while adding a refined decorative element to any interior.",
      meta: [
        "Size: 50 × 33 cm",
      ],
      image: "/images/newproducts/32.jpg",
    },

          // ADD PAPER LAMP 3 HERE
          // {
          //   slug: "paper-lamp-3",
          //   name: "Geometric Paper Pendant Lamp",
          //   desc: "Your description.",
          //   meta: [
          //     "Size: 30 cm | Item Code: COLT-004",
          //     "Paper + Cord | MOQ: 20 units",
          //   ],
          //   image: "/images/products/your-image.png",
          // },

          // ADD PAPER LAMP 4 HERE
        ],
      },

      {
        slug: "mdf-pendant-lamps",
        heading: "MDF Lamps",

        products: [
          {
      slug: "mdf-table-lamp-01",
      name: "Table Lamp",
      desc:
        "Handcrafted MDF table lamp with a refined design that adds warmth and elegance to any interior space.",
      meta: [],
      image: "/images/products/16.png",
    },

    {
      slug: "mdf-pendant-lamp-01",
      name: "MDF Pendant Lamp",
      desc:
        "Handcrafted MDF pendant lamp with a geometric design and elegant structure, perfect for creating a warm and stylish ambience.",
      meta: [],
      image: "/images/newproducts/33.jpg",
    },

    {
      slug: "mdf-pendant-lamp-02",
      name: "MDF Pendant Lamp",
      desc:
        "Handcrafted MDF pendant lamp with a natural finish, designed to bring a warm and earthy charm to interiors.",
      meta: [],
      image: "/images/products/18.png",
    },

    {
      slug: "mdf-pendant-lamp-03",
      name: "MDF Pendant Lamp",
      desc:
        "Handcrafted MDF pendant lamp with a contemporary design that enhances the ambience with soft and decorative lighting.",
      meta: [],
      image: "/images/newproducts/34.jpg",
    },

          // ADD MDF LAMP 3 HERE

          // ADD MDF LAMP 4 HERE
        ],
      },
    ],
  },


  // =========================================================
  // HANDMADE PAPER
  // =========================================================
  {
    slug: "handmade-paper",

    tabLabel: "Handmade Paper",

    label: "Handmade Paper",

    description:
      "Born In A Vat Of Pure Cotton Fibre, Dried Under Rajasthan's Open Sky, Finished By A Craftsperson Who Has Spent A Lifetime Perfecting A Single Gesture. Every Sheet Is Unrepeatable. Every Deckle Edge Is A Signature.",

    specifications: [
      {
        label: "Material",
        value:
          "100% Recycled Cotton Rag, No Wood Pulp, No Trees",
      },

      {
        label: "Weight",
        value:
          "120 GSM To 250 GSM Custom Weights Available",
      },

      {
        label: "Sizes Available",
        value:
          'Up To 22" × 30" Custom Dimensions',
      },

      {
        label: "Edges",
        value:
          "Natural Deckle On All Four Sides",
      },

      {
        label: "Finish",
        value:
          "Soft, Uncoated, Richly Textured Acid-Free & Archival",
      },

      {
        label: "Colours",
        value:
          "Natural White, Soft Pastels, Floral Embedded & Custom-Dyed Shades",
      },
    ],

    idealFor:
      "Fine Art & Watercolour | Calligraphy & Letterpress | Wedding Invitations | Book Publishing | Luxury Packaging | Archival Documents | Artist Sketchbooks | Gift Wrapping",

    previewCards: [
      {
        name: "Handmade Paper",
        image: "/images/products/7.png",
      },
    ],

    productSections: [
      {
        slug: "handmade-paper",
        heading: "Handmade Paper",

        products: [
          {
  slug: "handmade-cotton-rag-paper-01",
  name: "Handmade Cotton Rag Paper",
  desc:
    "Premium handmade cotton rag paper with a natural textured finish, ideal for stationery, invitations, and creative applications.",
  meta: [
    "Size - A4, A3, A5, A6, DL, Place Card || Colour :Natural, White, Multi colored, Vintage ",
    "GSM - 90, 120, 150, 250, 300, 450, 500 GSM"
    ,
  ],
  image: "/images/newproducts/35.jpg",
},

{
  slug: "handmade-cotton-rag-paper-02",
  name: "Handmade Cotton Rag Paper",
  desc:
    "Handcrafted cotton rag paper with a soft organic texture and elegant finish, suitable for premium stationery and personalised paper products.",
  meta: [
    "Size - A4, A3, A5, A6, DL, Place Card || Colour :Natural, White, Multi colored, Vintage ",
    "GSM - 90, 120, 150, 250, 300, 450, 500 GSM",
  ],
  image: "/images/newproducts/36.jpg",
},

{
  slug: "handmade-cotton-rag-paper-03",
  name: "Handmade Cotton Rag Paper",
  desc:
    "Eco-friendly handmade cotton rag paper with a distinctive natural texture, perfect for artistic, decorative, and premium paper applications.",
  meta: [
    "Size - A4, A3, A5, A6, DL, Place Card || Colour :Natural, White, Multi colored, Vintage ",
    "GSM - 90, 120, 150, 250, 300, 450, 500 GSM",
  ],
  image: "/images/newproducts/37.jpg",
},

{
  slug: "handmade-cotton-rag-paper-04",
  name: "Handmade Cotton Seed Paper",
  desc:
    "Beautifully handcrafted cotton rag paper offering a refined natural texture, ideal for luxury stationery, invitations, packaging, and creative projects.",
  meta: [
    "Size - A4, A3, A5, A6, DL, Place Card || Colour :Natural, White, Multi colored, Vintage ",
    "GSM - 90, 120, 150, 250, 300, 450, 500 GSM",
  ],
  image: "/images/newproducts/38.jpg",
},
        ],
      },
    ],
  },


  // =========================================================
  // LEATHER BAGS
  // =========================================================
  {
    slug: "leather-bags",

    tabLabel: "Leather Bags",

    label: "Leather Bags",

    description:
      "Hand-stitched Bags In Vegetable-tanned Leather. Designed For Everyday Use And Built To Improve With Age.",

    specifications: [
      {
        label: "COLB-01",
        value:
          'Green Leather Laptop Backpack for Women, 14×15×5"',
      },

      {
        label: "COLB-02",
        value:
          'Brown Leather Laptop Backpack for Women, 13×15×5"',
      },

      {
        label: "COLB-03",
        value:
          'Brown Leather Women\'s Tote Bag, 16.5×12×6"',
      },

      {
        label: "COLB-04",
        value:
          'Black Leather Women\'s Tote Bag, 16.75×12.5×4.5"',
      },

      {
        label: "COLB-05",
        value:
          'Brown Leather Laptop Bag for Men, 15×14×5"',
      },

      {
        label: "COLB-06",
        value:
          'Brown Leather Messenger / Satchel Bag, 16.75×12.5×4.5"',
      },

      {
        label: "Custom",
        value:
          "Sizes And Colours On Request, MOQ 50 Units",
      },
    ],

    idealFor:
      "Fashion Retail | Gift Stores | Corporate Gifting | Branded Leather Goods",

    previewCards: [
      {
        name: "Leather Bags",
        image: "/images/products/1.png",
      },
    ],

    productSections: [
      {
        slug: "leather-bags",
        heading: "Leather Bags",

        products: [
          {
      slug: "leather-laptop-bag-01",
      name: "Leather Laptop Bag",
      desc:
        "Premium handcrafted leather laptop bag designed to carry your laptop and everyday essentials with style and durability.",
      meta: [
        'Size: 14 x 15 x 5"',
      ],
      image: "/images/products/1.png",
    },

    {
      slug: "leather-backpack-01",
      name: "Leather Backpack",
      desc:
        "Handcrafted leather backpack with a practical and spacious design, perfect for carrying everyday essentials comfortably.",
      meta: [
        'Size: 16.5 x 12 x 6"',
      ],
      image: "/images/products/9.png",
    },

    {
      slug: "leather-laptop-bag-02",
      name: "Leather Laptop Bag",
      desc:
        "Elegant handcrafted leather laptop bag with a spacious design, ideal for carrying laptops, documents, and daily essentials.",
      meta: [
        'Size: 16.75 x 12.5 x 4.5"',
      ],
      image: "/images/products/10.png",
    },

    {
      slug: "leather-backpack-02",
      name: "Leather Backpack",
      desc:
        "Stylish handcrafted leather backpack designed for comfortable everyday carrying with a functional and versatile design.",
      meta: [
        'Size: 13 x 15 x 5"',
      ],
      image: "/images/newproducts/39.jpg",
    },

    {
      slug: "leather-womens-tote-bag-01",
      name: "Leather Women's Tote Bag",
      desc:
        "Handcrafted women's leather tote bag with a spacious design, perfect for carrying everyday essentials in effortless style.",
      meta: [
        'Size: 16.5 x 12 x 6"',
      ],
      image: "/images/newproducts/40.jpg",
    },

    {
      slug: "leather-womens-tote-bag-02",
      name: "Leather Women's Tote Bag",
      desc:
        "Elegant handcrafted women's leather tote bag designed with ample space for daily essentials and a timeless finish.",
      meta: [
        'Size: 16.75 x 12.5 x 4.5"',
      ],
      image: "/images/newproducts/41.jpg",
    },

    {
      slug: "leather-travel-bag",
      name: "Leather Travel Bag",
      desc:
        "Spacious handcrafted leather travel bag designed to keep your travel essentials organised while offering a timeless look.",
      meta: [
        'Size: 14 x 4 x 24"',
      ],
      image: "/images/newproducts/42.jpg",
    },

    {
      slug: "leather-toiletry-bag",
      name: "Leather Toiletry Bag",
      desc:
        "Compact handcrafted leather toiletry bag designed to neatly organise personal care essentials while travelling.",
      meta: [
        'Size: 11.5 x 6.5 x 3"',
      ],
      image: "/images/newproducts/43.jpg",
    },

    {
      slug: "leather-backpack-03",
      name: "Leather Backpack",
      desc:
        "Handcrafted leather backpack with a versatile design, offering convenient storage for everyday essentials and personal belongings.",
      meta: [
        'Size: 9.45 x 5 x 10"',
      ],
      image: "/images/newproducts/44.jpg",
    },
        ],
      },
    ],
  },


  // =========================================================
  // GIFTING SEGMENT
  // =========================================================
  {
    slug: "gifting-segment",

    tabLabel: "Gifting Segment",

    label: "Gifting Segment",

    description:
      "Hand-finished Gifting Essentials In Handmade Paper And Kraft Board. Designed To Package And Present Products Beautifully, From Retail Boxes To Plantable Seed-paper Cards.",

    specifications: [
      {
        label: "Materials",
        value:
          "Handmade Cotton Rag Paper, Kraft Board, Seed-embedded Paper",
      },

      {
        label: "Formats",
        value:
          "Nested Gift Boxes, Paper Bags, Envelopes, Greeting Cards, Seed-paper Stationery",
      },

      {
        label: "Print",
        value:
          "Plain Or Custom-printed On Request",
      },

      {
        label: "Custom",
        value:
          "Sizes, Colours, And Branding On Request, MOQ 100 Units",
      },
    ],

    idealFor:
      "Retail Packaging | Corporate Gifting | Wedding Favours | E-commerce Packaging | Seasonal Gift Sets",

    previewCards: [
      // {
      //   name: "Boxes",
      //   image: "/images/collection/gifting-segment/boxes.jpg",
      // },

      // {
      //   name: "Paper Bags",
      //   image: "/images/collection/gifting-segment/paper-bags.jpg",
      // },

      // {
      //   name: "Envelopes",
      //   image: "/images/collection/gifting-segment/envelopes.jpg",
      // },

      // {
      //   name: "Greeting Cards",
      //   image: "/images/collection/gifting-segment/greeting-cards.jpg",
      // },

      {
        name: "Seed Paper - Pencils, Pens & Cards",
        image: "/images/products/8.png",
      },
    ],

    productSections: [
      {
        slug: "gifting-products",
        heading: "Gifting Products",

        products: [
         {
      slug: "gifting-bags-01",
      name: "Gifting Bags",
      image: "/images/newproducts/45.jpg",
    },

    {
      slug: "gifting-bags-02",
      name: "Gifting Bags",
      image: "/images/newproducts/46.jpg",
    },

    {
      slug: "gift-boxes-01",
      name: "Gift Boxes",
      image: "/images/newproducts/47.jpg",
    },

    {
      slug: "gift-boxes-02",
      name: "Gift Boxes",
      image: "/images/newproducts/48.jpg",
    },

    {
      slug: "gift-boxes-03",
      name: "Gift Boxes",
      image: "/images/newproducts/49.jpg",
    },

    {
      slug: "gifting-cards-01",
      name: "Gifting Cards",
      image: "/images/newproducts/50.jpg",
    },

    {
      slug: "gifting-cards-02",
      name: "Gifting Cards",
      image: "/images/newproducts/51.jpg",
    },

    {
      slug: "gifting-cards-03",
      name: "Gifting Cards",
      image: "/images/newproducts/52.jpg",
    },

    {
      slug: "gifting-cards-04",
      name: "Gifting Cards",
      image: "/images/newproducts/53.jpg",
    },
        ],
      },
    ],
  },
];


// ===========================================================
// GET CATEGORY
// ===========================================================

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null;
}


// ===========================================================
// GET ALL PRODUCTS
//
// Important:
// Products are now inside productSections.
// So we flatten all sections here.
// This keeps /product/[slug] working.
// ===========================================================

export function getAllProducts() {
  return categories.flatMap((category) =>
    category.productSections.flatMap((section) =>
      section.products.map((product) => ({
        ...product,

        categorySlug: category.slug,

        categoryLabel: category.label,

        sectionSlug: section.slug,

        sectionHeading: section.heading,
      }))
    )
  );
}


// ===========================================================
// GET SINGLE PRODUCT
// ===========================================================

export function getProductBySlug(slug) {
  return getAllProducts().find(
    (product) => product.slug === slug
  ) || null;
}