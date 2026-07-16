let products = [
    {
        id: 22,
        name: "Sleveed Booster Journey Together",
        category: "pokemon",
        expansion: "journey-together",
        price: 23000,
        language: [
            "en"
        ],
        images: [
            "https://ryu.land/cdn/shop/files/rn-image_picker_lib_temp_96ba250b-a2aa-4199-8877-bf3481b151f9.png?v=1736467969&width=1445",
            "https://preview.redd.it/hot-take-journey-together-is-an-awesome-set-with-amazing-v0-a8tz8dlzn14f1.jpeg?width=1080&crop=smart&auto=webp&s=0987bb0afbd5b52bed50197881a30602fc96759a"
        ],
        stock: "available",
        promo: false,
        cantidad: 5
    },
    {
        id: 18,
        name: "3 Pack Blister Fabula Sombria",
        category: "pokemon",
        expansion: "shrouded-fable",
        price: 56000,
        language: [
            "es"
        ],
        images: [
            "https://www.pokemillon.com/cdn/shop/files/Pokemon-TCG_Scarlet_Violet_Shrouded_Fable_Three-Booster_Pack_Blister.png?v=1754155188",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/pokemon-tcg-most-valuable-cards-from-shrouded-fable-cassiopeia-pecharunt-ex-and-dusknoir.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 2
    },
    {
        id: 37,
        name: "Sleeves Pikachu - 65 unidades",
        category: "pokemon",
        expansion: "otros",
        price: 45000,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/sleeves-pikachu2.webp",
            "imagenes/productos/sleeves-pikachu.webp"
        ],
        stock: "available",
        promo: true,
        cantidad: 2
    },
    {
        id: 52,
        name: "Sobre Tempestad Plateada",
        category: "pokemon",
        expansion: "tempestad-plateada",
        price: 22000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/silver-tempest-pack.webp",
            "https://card-binder.com/cdn/shop/files/Pokemon_Sword_Shield_Silver_Tempest_Chase_cards.webp?v=1739714637&width=1500",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/06/pokemon-tcg-most-valuable-silver-tempest.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 2
    },
    {
        id: 74,
        name: "Unidad Toploader Ultra Pro",
        category: "otros",
        expansion: "otros",
        price: 1200,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/toploader-ultra.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 150
    },
    {
        id: 8,
        name: "Ultra Pro Sleeves azul matte - 50 Unidades",
        category: "pokemon",
        expansion: "otros",
        price: 23000,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/sleeves-mate.webp",
            "imagenes/productos/sleeves-pro-mate.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 60,
        name: "Booster Bundle Chaos Rising",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 140000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/bundle-chaos.png",
            "imagenes/productos/boosters-bundles-1.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 2,
        preorder: false,
        arrivalDate: "5 de Junio, 2026"
    },
    {
        id: 51,
        name: "Booster Astros Brillantes",
        category: "pokemon",
        expansion: "astros brillantes",
        price: 23000,
        language: [
            "es"
        ],
        images: [
            "https://saccum.com/wp-content/uploads/2022/09/SobresAstrosBrillantes.png",
            "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/01/EitJnbZXkAAvp2T-1-copy-90-15.jpg",
            "https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/trading-card-game/_tiles/strategy/swsh09/top-cards/swsh09-top-cards-169-es.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 38,
        name: "Booster Box Chaos Rising (36 Sobres)",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 730000,
        language: [
            "en"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Booster-Box-Chaos-Rising.png",
            "https://cdn.chaoscards.co.uk/uploads/prod_img/2_328480_e.png?v=-62169983925"
        ],
        stock: "available",
        preorder: false,
        arrivalDate: "5 de Junio, 2026",
        cantidad: 3
    },
    {
        id: 76,
        name: "League Battle Mega Lucario ex",
        category: "pokemon",
        expansion: "otros",
        price: 135000,
        language: [
            "es",
            "en"
        ],
        images: [
            "imagenes/productos/megalucario.png",
            "imagenes/productos/reverso-megalucario.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 4,
        preorder: false,
        arrivalDate: "22 de Mayo, 2026"
    },
    {
        id: 4,
        name: "Booster Heat Wave Arena",
        category: "pokemon",
        expansion: "heat-wave-arena",
        price: 21000,
        language: [
            "jp"
        ],
        images: [
            "https://shop.orbsportscards.com/cdn/shop/files/image-20-1.png?v=1762270115",
            "https://card-binder.com/cdn/shop/files/PokemonJapanHeatwaveArenaChaseCardimages.webp?v=1741505684&width=1500"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 75,
        name: "Set x25 Toploaders Ultra Pro",
        category: "otros",
        expansion: "otros",
        price: 25000,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/toploader-ultra-pro.webp"
        ],
        stock: "available",
        promo: true,
        cantidad: 5
    },
    {
        id: 12,
        name: "Protectores de cartas - 100 Unidades",
        category: "pokemon",
        expansion: "otros",
        price: 10000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/mlikero.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 20
    },
    {
        id: 33,
        name: "Booster Chaos Rising",
        category: "pokemon",
        expansion: "otros",
        price: 22000,
        language: [
            "en"
        ],
        images: [
            "https://cdn.chaoscards.co.uk/uploads/prod_img/2_328475_e.png?v=-62169983925",
            "https://cdn.shopify.com/s/files/1/0514/4854/5477/files/2_efdec0b9-de7b-41d6-9cd8-2c76721cf9c3.png?v=1776290628",
            "https://cdn.shopify.com/s/files/1/0514/4854/5477/files/4_c09eceb5-4b83-49b1-90c5-8d46ff08668a.png?v=1776290628"
        ],
        stock: "available",
        promo: false,
        cantidad: 25
    },
    {
        id: 29,
        name: "Booster Bundle Perfect Order",
        category: "pokemon",
        expansion: "perfect-order",
        price: 140000,
        language: [
            "en"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Bundle-Perfect-Order-500x500.png.webp",
            "https://card-binder.com/cdn/shop/files/Pokemon-Perfect-Order-Booster-Bundle-6-Booster-Packs.webp?v=1767987506&width=1500",
            "https://retrododo.com/content/images/size/w1600/2026/04/perfect-order-chase-cards.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 3
    },
    {
        id: 41,
        name: "Booster Perfect Order",
        category: "pokemon",
        expansion: "perfect-order",
        price: 22000,
        language: [
            "en"
        ],
        images: [
            "https://shop.gsc.com.my/cdn/shop/files/2_322555_e_9fdf589f-564e-4119-adc2-c4524e309272.webp?v=1775625487&width=798",
            "https://retrododo.com/content/images/size/w1600/2026/04/perfect-order-chase-cards.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 36
    },
    {
        id: 1,
        name: "Booster Box Mega Syphonia",
        category: "pokemon",
        expansion: "Mega Symphonia",
        price: 500000,
        language: [
            "jp"
        ],
        images: [
            "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Symphonia-Japan-Booster-Box.webp?v=1751875228",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/08/pokemon-tcg-most-valuable-mega-symphonia.jpg"
        ],
        stock: "available",
        promo: true,
        cantidad: 1
    },
    {
        id: 3,
        name: "Shrouded Fable Kingambit Collection",
        category: "pokemon",
        expansion: "shrouded-fable",
        price: 100000,
        language: [
            "en"
        ],
        images: [
            "https://www.thecardsharkemporium.com.au/cdn/shop/files/background-editor_output_6b437846-dcf5-4e1e-aa51-cabafca560c3.png?v=1733451261&width=533",
            "https://unboxunbored.com/cdn/shop/files/pokemon-tcg-shrouded-fable-kingambit-illustration-collection-470289.png?v=1741543903&width=1214"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 17,
        name: "Funko Pop!Super Saiyan Goku #948",
        category: "funko",
        expansion: "",
        price: 55000,
        language: [
            ""
        ],
        images: [
            "https://i.ebayimg.com/images/g/czkAAeSwAU9p~fm3/s-l1200.png",
            "https://www.mx.storedevastation.com/cdn/shop/files/1_400x_e4e02997-96b9-486d-af03-3ef6a68a0d21.webp?v=1684183380"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 25,
        name: "Booster Mega Symphonia",
        category: "pokemon",
        expansion: "mega-symphonia",
        price: 18000,
        language: [
            "jp"
        ],
        images: [
            "https://unsobremas.com/cdn/shop/files/4_66b2da43-17b8-4465-a9b9-0149ee6aba94.webp?crop=center&height=888&v=1760452997&width=985",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/08/pokemon-tcg-most-valuable-mega-symphonia.jpg"
        ],
        stock: "available",
        cantidad: 30
    },
    {
        id: 40,
        name: "Pokeball Tin Q4 2025 (Daños en lata)",
        category: "pokemon",
        expansion: "otros",
        price: 70000,
        language: [
            "en"
        ],
        images: [
            "https://www.princedist.com/cdn/shop/files/ball_800x.png?v=1761665276"
        ],
        stock: "available",
        promo: true,
        cantidad: 1
    },
    {
        id: 27,
        name: "Booster Box Perfect Order (36 Sobres)",
        category: "pokemon",
        expansion: "perfect-order",
        price: 730000,
        language: [
            "en"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Booster-Box-Perfect-Order.png",
            "https://shop.gsc.com.my/cdn/shop/files/2_322555_e_9fdf589f-564e-4119-adc2-c4524e309272.webp?v=1775625487&width=798",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2026/04/pokemon-tcg-perfect-order-valuable-cards-fi.jpg?w=1600&h=900&fit=crop"
        ],
        stock: "available",
        promo: false,
        cantidad: 2
    },
    {
        id: 49,
        name: "Pokémon Day 2026 Collection",
        category: "pokemon",
        expansion: "otros",
        price: 76000,
        language: [
            "es"
        ],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/341956/493637/PKU101039-1__96448.1769739454.png",
            "imagenes/productos/pokemon-day.webp",
            "https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/series/incrementals/2026/pokemon-day-2026-collection/inline/full/SV05_LA_51.png"
        ],
        stock: "available",
        promo: true,
        cantidad: 2
    },
    {
        id: 34,
        name: "Lata Ferrodada Destinos de Paldea",
        category: "pokemon",
        expansion: "paldean-fates",
        price: 110000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/ferrodada.webp",
            "https://www.pokemillon.com/cdn/shop/files/Sobres-destinos-de-paldea-en-espanol.png?v=1754154605",
            "https://card-binder.com/cdn/shop/files/Pokemon_Scarlet_Violet_Paldean_Fates_set_chase_cards.png?v=1739562220&width=1500"
        ],
        stock: "available",
        promo: true,
        cantidad: 2
    },
    {
        id: 19,
        name: "Ultra Pro Sleeves Verde Lima - 50 Unidades",
        category: "pokemon",
        expansion: "otros",
        price: 17000,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/sleeves-matte-lima.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 2
    },
    {
        id: 5,
        name: "Ultra Pro Sleeves Verde - 100 Unidades",
        category: "pokemon",
        expansion: "otros",
        price: 37000,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/sleeves-verde.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 16,
        name: "Mega Venusaur ex Premium Collection",
        category: "pokemon",
        expansion: "otros",
        price: 160000,
        language: [
            "es"
        ],
        images: [
            "https://www.mirajtrading.com/cdn/shop/files/Pokemon_Mega_Venusaur_EX_Premium_Collection_Box_French_mirajtrading.png?v=1758733787&width=2048",
            "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Venusaur-ex-Premium-Collection-Lenticular-promo-card.webp?v=1763119467&width=1500",
            "imagenes/productos/booster-venusaur.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 67,
        name: "Funko Pop! Nico Robin Egghead",
        category: "funko",
        expansion: "",
        price: 45000,
        language: [
            ""
        ],
        images: [
            "https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw1e81d124/images/funko/upload/1/86520_OP_S12_NicoRobin_POP_GLAM-WEB.png",
            "imagenes/productos/funko-nico.png"
        ],
        stock: "available",
        promo: true,
        cantidad: 2
    },
    {
        id: 42,
        name: "Funko Pop! Charmander Soft #455",
        category: "funko",
        expansion: "",
        price: 50000,
        language: [
            ""
        ],
        images: [
            "imagenes/productos/soft-charmander.webp",
            "https://www.mypops.ca/cdn/shop/files/char_002.png?v=1743620128"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 72,
        name: "Checkline Blister Chaos Rising",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 28000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/blister-chaos.webp",
            "imagenes/productos/chase-chaos.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 15
    },
    {
        id: 73,
        name: "Booster Pitch Black",
        category: "pokemon",
        expansion: "pitch-black",
        price: 22000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/booster-pitch.webp",
            "imagenes/productos/chase-pitch.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 10
    },
    {
        id: 70,
        name: "ETB Pitch Black",
        category: "pokemon",
        expansion: "pitch-black",
        price: 240000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/etb-pitch.webp",
            "imagenes/productos/chase-pitch.webp",
            "imagenes/productos/etb-pitch-black-abierta.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 3
    },
    {
        id: 9,
        name: "ETB Chaos Rising",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 240000,
        language: [
            "en"
        ],
        images: [
            "https://media.gamestop.com/i/gamestop/20033749",
            "https://www.mypops.ca/cdn/shop/files/ChaosRising_ETB_002.webp?v=1775573713&width=416"
        ],
        stock: "soon",
        promo: false,
        cantidad: 1,
        preorder: false,
        arrivalDate: "5 de Junio, 2026"
    },
    {
        id: 78,
        name: "First Partner Illustration Collection - Series 3",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 80000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/partner-serietres.webp",
            "imagenes/productos/chase-firsttres.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 25,
        preorder: true,
        arrivalDate: "7 de agosto, 2026"
    },
    {
        id: 71,
        name: "Booster Bundle Pitch Black",
        category: "pokemon",
        expansion: "pitch-black",
        price: 140000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/bundle-pitch.webp",
            "imagenes/productos/chase-pitch.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 6
    },
    {
        id: 36,
        name: "Goku Súper Saiyan GxMateria",
        category: "otros",
        expansion: "Banpresto",
        price: 105000,
        language: [
            ""
        ],
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprzeVlWwAd6BVJRAZNdHKVXxAQaSmYbYY7Q&s",
            "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/VBkAAOSw-c9oFeMF/$_3.JPG?set_id=880000500F"
        ],
        stock: "encargo",
        promo: true
    },
    {
        id: 64,
        name: "Funko Pop! Bertholdt Hoover AOT S3",
        category: "funko",
        expansion: "",
        price: 25000,
        language: [
            ""
        ],
        images: [
            "https://i5.walmartimages.com/asr/b53f55c5-eab6-4828-9690-e7e897eab770.8d0495811ddf55d6095993eb861212c3.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
            "https://static.insales-cdn.com/r/lp4I6SC41DY/rs:fit:250:0:1/q:80/plain/images/products/1/5332/743625940/large_funko-pop-russia-Bertholdt-Hoover-Attack-on-Titan-1167-FU57979.png@webp"
        ],
        stock: "encargo",
        promo: true,
        cantidad: 1
    },
    {
        id: 32,
        name: "League Battle Deck Team Rocket's Mewtwo EX",
        category: "pokemon",
        expansion: "otros",
        price: 128000,
        language: [
            "en"
        ],
        images: [
            "https://evolvecardshop.com/cdn/shop/files/MewtwoexLeagueBattleDeck.png?v=1765489371&width=1946",
            "https://media.gamestop.com/i/gamestop/20026509_ALT03?$pdp$?w=1256&h=664&fmt=auto",
            "https://media.gamestop.com/i/gamestop/20026509_ALT02?$pdp$?w=1256&h=664&fmt=auto"
        ],
        stock: "encargo"
    },
    {
        id: 2,
        name: "Iono's Bellibolt EX Premium Collection",
        category: "pokemon",
        expansion: "otros",
        price: 185000,
        language: [
            "en"
        ],
        images: [
            "https://cdnx.jumpseller.com/santogames/image/62365237/IMG_0841.png?1744299767",
            "https://i5.walmartimages.com/asr/600b4c2a-c166-40c1-844b-f2c46346dd6a.0be587ef9666f885c3608a694e77d914.jpeg"
        ],
        stock: "encargo"
    },
    {
        id: 44,
        name: "Toploaders & Penny Sleeves Pikachu (25 unidades)",
        category: "pokemon",
        expansion: "otros",
        price: 31000,
        language: [
            ""
        ],
        images: [
            "https://cdn11.bigcommerce.com/s-vz3etek0gv/images/stencil/1200w/products/78559/108684/ULP16663_web_Box_3D_R__20845.1769636487.jpg",
            "https://primary.jwwb.nl/public/h/t/i/temp-zjpebgcobmaxydcmrfwb/pkm_pikachu_toploader_b2b_landscapedistributorcatalog_11x17-high.jpg?enable-io=true&enable=upscale&fit=bounds&width=1200"
        ],
        stock: "agotado"
    },
    {
        id: 23,
        name: "Unova Victini Illustration Collection",
        category: "pokemon",
        expansion: "black-white",
        price: 115000,
        language: [
            "es"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Victini-Illustration-Collection-2.png.webp",
            "https://static.wixstatic.com/media/40e109_4d3d0551e5354ef89d9f3ca910f4b279~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            "https://static.wixstatic.com/media/40e109_d8b038187d814737a50d9373e9019f74~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 62,
        name: "Mega Moonlit Tin - Mega Clefable",
        category: "pokemon",
        expansion: "otros",
        price: 80000,
        language: [
            "en"
        ],
        images: [
            "https://media.gamestop.com/i/gamestop/20033969_ALT01?$pdp$?w=1256&h=664&fmt=auto",
            "https://media.gamestop.com/i/gamestop/20033969_ALT05?$pdp$?w=1256&h=664&fmt=auto"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 35,
        name: "Mimikyu EX Box",
        category: "pokemon",
        expansion: "otros",
        price: 95000,
        language: [
            "es"
        ],
        images: [
            "https://magicomens.com/cdn/shop/products/ptcg-mimikyu-ex-box_1200x.webp?v=1678787317",
            "https://www.despelvogel.com/wp-content/uploads/2020/02/Mimikyu-Box.png",
            "https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10001/P8792_290-85218_03.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 30,
        name: "Mega Lucario EX Figure Collection",
        category: "pokemon",
        expansion: "mega-evolution",
        price: 110000,
        language: [
            "es"
        ],
        images: [
            "https://versusgamecenter.pt/cdn/shop/files/Pokemon-TCG-Mega-Lucario-Figure-Box_900x.png?v=1763557347",
            "https://www.igabiba.si/cdn/shop/files/pokemon-tcg-mega-lucario-ex-figure-collection-196214116986-1206248071_1024x.png?v=1763484541",
            "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Lucario-ex-figure-collection-box-contents.webp?v=1757577594&width=1500"
        ],
        stock: "agotado",
        promo: true,
        cantidad: 1
    },
    {
        id: 20,
        name: "Pokeball Tin Q4 2025",
        category: "pokemon",
        expansion: "otros",
        price: 65000,
        language: [
            "es"
        ],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/335177/476105/Gamenerdzimage7463__69770.1764691893.png"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 13,
        name: "First Partner Illustration Collection - Series 2",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 85000,
        language: [
            "en"
        ],
        images: [
            "https://kantocards.com/cdn/shop/files/P11445-3D_First_Partner_Illustration_Collection_Series_2_Front_DOM_INTL_EN-3468x3399-09276f8-1.png?v=1775174788&width=3468",
            "https://card-binder.com/cdn/shop/files/Pokemon-First-Partner-Illustration-Collection-Series-2-Pack-Content.webp?v=1775560548&width=1500",
            "https://kantocards.com/cdn/shop/files/P11445-3D_First_Partner_Illustration_Collection_Series_2_Sticker_Sheet_GEN-2114x1967-d6ba60c.png?v=1775174784&width=2114"
        ],
        stock: "agotado",
        preorder: false,
        arrivalDate: "19 de Junio, 2026",
        cantidad: 25
    },
    {
        id: 15,
        name: "Mega Zygarde ex Premium Collection",
        category: "pokemon",
        expansion: "perfect-order",
        price: 175000,
        language: [
            "en"
        ],
        images: [
            "https://media.pocketmonsters.net/imageboard/30/17709903120059.png",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/mega-zygarde-ex-premium-collection/inline/01-en.png",
            "https://cdnx.jumpseller.com/pokemaniacos/image/73402924/resize/1000/1000?1771263602"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 58,
        name: "Booster Box Ninja Spinner",
        category: "pokemon",
        expansion: "ninja-spinner",
        price: 520000,
        language: [
            "jp"
        ],
        images: [
            "https://cdn.snkrdunk.com/upload_bg_removed/244b2a87-ebe1-41bb-a812-6daa8aaddc80.webp?size=l",
            "https://www.supercollectors.es/wp-content/uploads/2026/03/877373.webp",
            "https://www.card-corner.de/media/image/product/4141/md/pokemon-ninja-spinner-m4-display~2.webp"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 47,
        name: "30th Celebration Poster Colletion",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 76000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/poster-collection-1.png"
        ],
        stock: "soon",
        promo: false,
        cantidad: 20,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 28,
        name: "Booster Paradox Rift",
        category: "pokemon",
        expansion: "Paradox-Rift",
        price: 22000,
        language: [
            "en"
        ],
        images: [
            "https://www.gamesweb.dk/cdn/shop/files/46817_Pokemon_POKEMON_BOOSTER_PARADOX_RIFT_gamesweb_1024x1024.png?v=1713880547",
            "https://mktg-assets.tcgplayer.com/content/pokemon/11_23/08/Most-Valuable-Pokemon-Cards-Paradox-Rift-OG.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 21,
        name: "Booster Obsidian Flames",
        category: "pokemon",
        expansion: "Obsidian-Flames",
        price: 23000,
        language: [
            "en"
        ],
        images: [
            "https://www.stompinggroundstcg.com/cdn/shop/files/ObsidianFlamesPacks_1c0f3821-2abe-4d4c-8756-bdd39fd446a2_600x.webp?v=1687812143",
            "https://mktg-assets.tcgplayer.com/content/pokemon/8_23/14/Most-Valuable-Pokemon-Cards-Obsidian-Flames.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 65,
        name: "Mega ex Box iniciales",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 115000,
        language: [
            "en"
        ],
        images: [
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/70eb2903-351c-4438-aa18-e363bf765a92.png;maxHeight=828;maxWidth=400?format=webp",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2026/02/pokemon-tcg-most-valuable-ascended-heroes.jpg?w=1600&h=900&fit=crop"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 11,
        name: "Deluxe Battle Deck - Miraidon EX",
        category: "pokemon",
        expansion: "otros",
        price: 90000,
        language: [
            "en"
        ],
        images: [
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex.webp?v=1735079323",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex_Cards_600x.webp?v=1735079323",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex_Contents_600x.webp?v=1735079323"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 54,
        name: "ETB Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 238000,
        language: [
            "en"
        ],
        images: [
            "https://kantocards.com/cdn/shop/files/P11425-ME02pt5_3D_ETB_OuterSleeve_Left_EN-2711x2584-70f70a8.png?v=1764087611",
            "https://cardzone.es/cdn/shop/files/contenido-caja-de-entrenador-elite-trainer-box-etb-heroes-ascendentes-ascended-heroes-cartas-pokemon-tcg-cardzone_fe31d546-5f40-4eed-ad26-7da31d3fa915.png?v=1771327450&width=3840",
            "https://cdn.shopify.com/s/files/1/0865/2816/4189/files/Pokemon-TCG-Mega-Evolutions-Ascended-Heroes-New-Mega-Evolution-illustration-Cards.webp?v=1763715714"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 9
    },
    {
        id: 45,
        name: "ETB Phantasmal Flames",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 235000,
        language: [
            "en"
        ],
        images: [
            "https://stock-checker.com/images/products/pokemon-tcg-meg-phantasmal-flames-etb.png",
            "https://grancards.com/cdn/shop/files/ETB_LLAMAS_FANTASMALES_2.png?v=1763060420&width=1445",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 5
    },
    {
        id: 43,
        name: "Booster Ninja Spinner",
        category: "pokemon",
        expansion: "ninja-spinner",
        price: 20000,
        language: [
            ""
        ],
        images: [
            "https://www.card-corner.de/media/image/product/4141/md/pokemon-ninja-spinner-m4-display~2.webp",
            "https://www.supercollectors.es/wp-content/uploads/2026/03/877373.webp"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 30
    },
    {
        id: 68,
        name: "First Partner Illustration Collection - Series 3",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 85000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/partner-serietres.webp",
            "imagenes/productos/chase-firsttres.webp"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 25,
        preorder: true,
        arrivalDate: "7 de agosto, 2026"
    },
    {
        id: 10,
        name: "ETB Perfect Order (Daños en el plastico)",
        category: "pokemon",
        expansion: "perfect-order",
        price: 225000,
        language: [
            "en"
        ],
        images: [
            "https://media.gamestop.com/i/gamestop/20031957",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/wm/2026/04/pokemon-tcg-perfect-order-valuable-cards-fi.jpg",
            "https://images.squarespace-cdn.com/content/v1/5e3b1164feb39b444b58f15b/14aef118-d09a-4121-892d-e95b36be11e5/M3_117_R_JP_LG+%281%29.png"
        ],
        stock: "agotado",
        cantidad: 1
    },
    {
        id: 48,
        name: "Tech Sticker Collection Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 70000,
        language: [
            "es"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Ascended-Heroes-Tech-Sticker-Collection.png.webp",
            "https://media.gamestop.com/i/gamestop/20030567_ALT03?$pdp$?w=1256&h=664&fmt=auto",
            "https://cdn.chaoscards.co.uk/uploads/prod_img/2_319146_e.png?v=-62169983925",
            "https://preview.redd.it/ascended-heros-complete-sirs-all-22-v0-bt9e098zvb8g1.png?width=1080&crop=smart&auto=webp&s=accb4478b865b94482c042352d6cbc42e1f2de30"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 3
    },
    {
        id: 57,
        name: "Booster Scarlet & Violet",
        category: "pokemon",
        expansion: "Scarlet-&-violet",
        price: 23000,
        language: [
            "en"
        ],
        images: [
            "https://card-binder.com/cdn/shop/files/Scarlet-Violet-Booster-Pack-3.webp?v=1723834445&width=1500",
            "https://mktg-assets.tcgplayer.com/fit-in/1000x1000/filters:quality(75)/content/pokemon/4_23/04/The-Most-Valuable-Pokemon-Cards-in-Scarlet-Violet-OG.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 31,
        name: "Mabosstiff Ex Collection",
        category: "pokemon",
        expansion: "otros",
        price: 89000,
        language: [
            "en"
        ],
        images: [
            "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/820650504631-1200-face3d.jpg",
            "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9541_290-85589_02.jpg"
        ],
        stock: "agotado",
        cantidad: 1
    },
    {
        id: 14,
        name: "Booster Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 21000,
        language: [
            "es"
        ],
        images: [
            "https://www.distritomax.com/cdn/shop/files/D_NQ_NP_2X_796773-MLM107115185409_022026-F_383x700.webp?v=1777571032",
            "https://preview.redd.it/ascended-heros-complete-sirs-all-22-v0-bt9e098zvb8g1.png?width=1080&crop=smart&auto=webp&s=accb4478b865b94482c042352d6cbc42e1f2de30"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 8
    },
    {
        id: 24,
        name: "Ascended Heroes Pin Collection",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 130000,
        language: [
            "en"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Ascended-Heroes-First-Partners-Deluxe-Pin-Collection.png.webp",
            "https://thetcgcollect.com/cdn/shop/files/ascended-heroes-deluxe-pin-collection-box.png?v=1772132898&width=480",
            "https://preview.redd.it/ascended-heros-complete-sirs-all-22-v0-bt9e098zvb8g1.png?width=1080&crop=smart&auto=webp&s=accb4478b865b94482c042352d6cbc42e1f2de30"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 5
    },
    {
        id: 6,
        name: "First Partner Illustration Collection",
        category: "pokemon",
        expansion: "otros",
        price: 120000,
        language: [
            "es"
        ],
        images: [
            "https://www.huntercardtcg.com/wp-content/uploads/2026/03/firstpartnerilluscoll.webp",
            "https://cardzone.es/cdn/shop/files/sobres-caja-first-partner-primer-companero-coleccion-illustration-collection-cartas-pokemon-tcg-cardzone_2e777ee9-4982-4e43-a356-1fc6946157c9.png?v=1773828172&width=4320",
            "https://www.breakthecase.de/cdn/shop/files/Inhalt_100perfektpassendeKartenschutzhuellen63x88mm_0bbbdead-d718-469c-93fb-517751473581.png?v=1773855540&width=1000"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 4
    },
    {
        id: 59,
        name: "First Partner Illustration Collection - Series 2",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 80000,
        language: [
            "es"
        ],
        images: [
            "https://kantocards.com/cdn/shop/files/P11445-3D_First_Partner_Illustration_Collection_Series_2_Front_DOM_INTL_EN-3468x3399-09276f8-1.png?v=1775174788&width=3468",
            "https://card-binder.com/cdn/shop/files/Pokemon-First-Partner-Illustration-Collection-Series-2-Pack-Content.webp?v=1775560548&width=1500",
            "https://kantocards.com/cdn/shop/files/P11445-3D_First_Partner_Illustration_Collection_Series_2_Sticker_Sheet_GEN-2114x1967-d6ba60c.png?v=1775174784&width=2114"
        ],
        stock: "agotado",
        preorder: false,
        arrivalDate: "19 de Junio, 2026",
        cantidad: 25
    },
    {
        id: 66,
        name: "Funko Pop! Plus Monkey D. Luffy",
        category: "funko",
        expansion: "",
        price: 60000,
        language: [
            ""
        ],
        images: [
            "https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw896c8aa1/images/funko/upload/1/88299_OP_S12_LuffyMT_POP_PLUS_GLAM-WEB.png",
            "https://http2.mlstatic.com/D_NQ_NP_976962-MLA97097684823_112025-O.webp"
        ],
        stock: "agotado",
        promo: true,
        cantidad: 1
    },
    {
        id: 7,
        name: "Ascended Heroes Premium Poster Collection",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 220000,
        language: [
            "es"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Ascended-Heroes-Premium-Poster-Collection.png.webp",
            "https://www.blindbox.cz/data/products/detail_pokemon-ascended-heroes-premiu.png",
            "https://media.gamestop.com/i/gamestop/20030568_ALT05?$pdp$?w=1256&h=664&fmt=auto",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-premium-poster-collection/inline/01-en.png"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 2
    },
    {
        id: 53,
        name: "Booster Cielos Evolutivos",
        category: "pokemon",
        expansion: "cielos-evolutivos",
        price: 30000,
        language: [
            "es"
        ],
        images: [
            "https://www.pokemillon.com/cdn/shop/files/Sobre_Cielos_Evolutivos_Sin_Fondo_Pokemillon_a1384360-b745-41c7-a72c-1644826321b3.png?v=1768861462",
            "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/07/EitJnbZXkAAvp2T-1-copy-90-21.jpg",
            "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/07/EitJnbZXkAAvp2T-1-copy-95-23.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: "1"
    },
    {
        id: 56,
        name: "ETB Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 230000,
        language: [
            "es"
        ],
        images: [
            "https://kantocards.com/cdn/shop/files/P11425-ME02pt5_3D_ETB_OuterSleeve_Left_EN-2711x2584-70f70a8.png?v=1764087611",
            "https://cardzone.es/cdn/shop/files/contenido-caja-de-entrenador-elite-trainer-box-etb-heroes-ascendentes-ascended-heroes-cartas-pokemon-tcg-cardzone_fe31d546-5f40-4eed-ad26-7da31d3fa915.png?v=1771327450&width=3840",
            "https://cdn.shopify.com/s/files/1/0865/2816/4189/files/Pokemon-TCG-Mega-Evolutions-Ascended-Heroes-New-Mega-Evolution-illustration-Cards.webp?v=1763715714"
        ],
        stock: "agotado",
        preorder: false,
        promo: false,
        cantidad: 1
    },
    {
        id: 46,
        name: "Zapdos EX Collection 151",
        category: "pokemon",
        expansion: "151",
        price: 220000,
        language: [
            "en"
        ],
        images: [
            "https://www.goodgames.com.au/cdn/shop/products/Pokemon_TCG_Scarlet_Violet-151_ex_Box-Zapdos_ex-min.png?v=1687315692",
            "https://cardceus.com/wp-content/uploads/2024/01/English-Special-Collection-151-Zapados-EXEnglish-Special-Collection-151-Zapados-EX-4.png",
            "https://assets-prd.ignimgs.com/2025/06/26/pokemon-tcg-sv-151-most-expensive-cards-cover-1750955691114.jpg",
            "https://www.supercollectors.es/wp-content/uploads/2023/11/151a-1024x287.png"
        ],
        stock: "agotado",
        promo: true,
        cantidad: 3
    },
    {
        id: 55,
        name: "Tin Mega Charizard",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 115000,
        language: [
            "en"
        ],
        images: [
            "https://pokesouq.com/cdn/shop/files/mega_charizard_4_tin_1_2048x.png?v=1771478020",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/full/MEP/MEP_EN_30.png",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/full/MEP/MEP_EN_29.png"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 50,
        name: "Blister Chaos Rising",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 75000,
        language: [
            "en"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Blister-Chaos-Rising.png",
            "https://card-binder.com/cdn/shop/files/Pokemon-Chaos-Rising-3-Booster-Packs.webp?v=1773346562&width=1500"
        ],
        stock: "agotado",
        preorder: false,
        arrivalDate: "5 de Junio, 2026",
        promo: false,
        cantidad: 5
    },
    {
        id: 61,
        name: "Build and Battle Chaos Rising",
        category: "pokemon",
        expansion: "chaos-rising",
        price: 115000,
        language: [
            "en"
        ],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Build-And-Battle-Chaos-Rising.png",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me04-build-battle-box/me04-build-battle-box-a-169-en.png"
        ],
        stock: "agotado",
        preorder: false,
        arrivalDate: "5 de Junio, 2026",
        promo: false,
        cantidad: 5
    },
    {
        id: 79,
        name: "30th Celebration Tech Sticker Colletion",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 80000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/tech-anniversary.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 50,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 80,
        name: "30th Celebration Tech Sticker Colletion",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 70000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/tech-anniversary.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 50,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 81,
        name: "30th Celebration Poster Colletion",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 85000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/poster-collection.png"
        ],
        stock: "soon",
        promo: false,
        cantidad: 20,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 82,
        name: "30th Celebration Binder Colletion",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 180000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/binder.avif"
        ],
        stock: "soon",
        promo: false,
        cantidad: 30,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 83,
        name: "30th Celebration Binder Colletion",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 170000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/binder-1.avif"
        ],
        stock: "soon",
        promo: false,
        cantidad: 10,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 84,
        name: "30th Celebration Sylveon/Greninja ex box",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 120000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/sylveon.webp",
            "imagenes/productos/greninja.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 50,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 85,
        name: "30th Celebration Sylveon/Greninja ex box",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 110000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/greninja-1.webp",
            "imagenes/productos/sylveon-1.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 30,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 86,
        name: "30th Celebration Elite Trainer Box",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 240000,
        language: [
            "en"
        ],
        images: [
            "imagenes/productos/etb-30.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 80,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    },
    {
        id: 87,
        name: "30th Celebration Elite Trainer Box",
        category: "pokemon",
        expansion: "30th-anniversary",
        price: 235000,
        language: [
            "es"
        ],
        images: [
            "imagenes/productos/etb-30-1.webp"
        ],
        stock: "available",
        promo: false,
        cantidad: 50,
        preorder: true,
        arrivalDate: "16 de septiembre, 2026"
    }
];


// Banderas reales de internet
const languageFlags = {
    es: "https://flagcdn.com/w40/es.png",
    en: "https://flagcdn.com/w40/us.png",
    jp: "https://flagcdn.com/w40/jp.png",
    fr: "https://flagcdn.com/w40/fr.png",
    de: "https://flagcdn.com/w40/de.png"
};

// Nombres de países
const countryNames = {
    es: "Español",
    en: "Inglés",
    jp: "Japonés",
    fr: "Francés",
    de: "Alemán"
};

// Nombres de expansiones para mostrar
const expansionNames = {
    "151": "Colección 151",
    "ascended-heroes": "Ascended Heroes",
    "phantasmal-flames": "Phantasmal Flames",
    "journey-together": "Journey Together",
    "shrouded-fable": "Shrouded Fable",
    "surging-sparks": "Surging Sparks",
    "destined-rivals": "Destined Rivals",
    "paldean-fates": "Paldean Fates",
    "heat-wave-arena": "Heat Wave Arena",
    "black-white": "Black Bolt & White Flare",
    "tempestad-plateada": "Tempestad Plateada",
    "cielos-evolutivos": "Cielos Evolutivos",
    "pitch-black": "Pitch Black",
    otros: "Otros productos",
    "30th-anniversary": "30 Anniversary"
};

// Banners de preventa configurables
const preorderBanners = [
    {
        id: "preorder-general",
        title: "🔥 PREVENTAS ACTIVAS",
        subtitle: "Asegura tus productos",
        description: "Reserva ahora los lanzamientos más esperados",
        image: "https://img.icons8.com/fluency/96/000000/calendar.png",
        bgColor: "linear-gradient(135deg, #ff6b6b, #feca57, #ff9ff3)",
        overlayGradient: "linear-gradient(135deg, rgba(255,107,107,0.9), rgba(254,202,87,0.8), rgba(255,159,243,0.7))",
        textColor: "#ffffff",
        action: "filter-preorder",
        active: true,
        priority: 0
    },
    {
        id: "ascended-heroes",
        title: "ASCENDED HEROES 🔥 ",
        subtitle: "¡Disponible!",
        description: "Nueva colección con Erika, Larry y los héroes ascendentes",
        image: "https://avalongaming.com.co/wp-content/uploads/Logo-Ascended-Heroes.png.webp",
        bgColor: "linear-gradient(135deg, #ff6b6b, #ee5a24, #f9ca24)",
        backgroundImage: "https://tcg.pokemon.com/assets/img/share/en-us/ascended-heroes/share_tw.jpg",
        overlayGradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.8), rgba(238, 90, 36, 0.8), rgba(249, 202, 36, 0.7))",
        textColor: "#ffffff",
        action: "filter",
        expansionFilter: "ascended-heroes",
        active: false,
        priority: 1
    },
    {
        id: "instagram-promo",
        title: "📸 SÍGUENOS EN INSTAGRAM",
        subtitle: "¡Dinámicas y promociones especiales!",
        description: "Participa en giveaways, sorteos y sé el primero en enterarte de nuevas llegadas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        bgColor: "linear-gradient(135deg, #833ab4, #fd1d1d, #f77737)",
        backgroundImage: "https://unblast.com/wp-content/uploads/2025/07/instagram-logo-colored.jpg",
        textColor: "#ffffff",
        action: "link",
        link: "https://tr.ee/I2M2MB",
        showQR: true,
        qrImage: "qr-instagram.png",
        active: true,
        priority: 2
    },
    {
        id: "perfect-order",
        title: "PERFECT ORDER",
        subtitle: "MEGA EVOLUTION",
        description: "Prepárate para la evolución definitiva. Muy pronto podrás armar tu pedido perfecto.",
        image: "https://archives.bulbagarden.net/media/upload/thumb/a/ae/ME3_Logo_EN.png/1200px-ME3_Logo_EN.png",
        backgroundImage: "Mega-Zygarde.png",
        overlayGradient: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,170,0,0.6))",
        textColor: "#ffffff",
        action: "filter",
        expansionFilter: "perfect-order",
        active: true,
        priority: 3
    },
    {
        id: "chaos-rising-preorder",
        title: "🐸🥷 CHAOS RISING",
        subtitle: "",
        description: "Ya seas jugador competitivo o coleccionista, Chaos Rising ofrece una experiencia intensa, visualmente impactante y llena de poder… donde solo los entrenadores más preparados podrán dominar el caos.",
        image: "https://piedrabruja.cl/cdn/shop/files/Pokemon_TCG_Mega_Evolution_Chaos_Rising_Logo-PiedraBruja.png?v=1774382506&width=2648",
        bgColor: "linear-gradient(135deg, #1a237e, #3949ab, #7c4dff, #ff4081)",
        backgroundImage: "https://legends.pokemon.com/_next/image?url=%2Fstatic-assets%2Fcontent%2Fpokemon-images%2Fmega_greninja_square.png&w=1080&q=75",
        overlayGradient: "linear-gradient(135deg, rgba(26, 35, 126, 0.95), rgba(124, 77, 255, 0.85), rgba(255, 64, 129, 0.75))",
        textColor: "#ffffff",
        action: "filter",
        expansionFilter: "chaos-rising",
        active: true,
        priority: 2
    },
    {
        id: "pitch-black-preorder",
        title: "PITCH BLACK",
        subtitle: "¡Próximamente!",
        description: "Sumérgete en la oscuridad de Pitch Black, una expansión donde Darkrai desata el poder de las sombras. Prepárate para estrategias impredecibles, cartas espectaculares y combates que pondrán a prueba incluso a los entrenadores más experimentados.",
        image: "https://www.huntercardtcg.com/wp-content/uploads/2026/07/pbloogo.webp",
        bgColor: "linear-gradient(135deg, #050505, #1a0828, #4b1c6b, #8a2be2)",
        backgroundImage: "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/me_series/me05/me05-banner.png",
        overlayGradient: "linear-gradient(135deg, rgba(5,5,5,0.96), rgba(26,8,40,0.90), rgba(75,28,107,0.82), rgba(138,43,226,0.65))",
        textColor: "#ffffff",
        action: "filter",
        expansionFilter: "pitch-black",
        active: true,
        priority: 1,
        isPreorder: true,
        arrivalDate: "31 de Julio, 2026",
        preorderBadge: "PREVENTA"
    }
];
