let products = [
    {
        id: 1,
        name: "Collector Chest Q4 2025",
        category: "pokemon",
        expansion: "otros",
        price: 100000,
        language: ["en"],
        images: [
            "https://www.goodgamesbern.ch/images/detailed/18/2111895_XL_1.webp",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/collector-chest/inline/01-en.png",
            
        ],
        stock: "soon"
    },
    {
        id: 2,
        name: "Iono's Bellibolt EX Premium Collection",
        category: "pokemon",
        expansion: "otros",
        price: 185000,
        language: ["en"],
        images: [
            "https://cdnx.jumpseller.com/santogames/image/62365237/IMG_0841.png?1744299767",
            "https://i5.walmartimages.com/asr/600b4c2a-c166-40c1-844b-f2c46346dd6a.0be587ef9666f885c3608a694e77d914.jpeg"
        ],
        stock: "encargo"
    },
    {
        id: 3,
        name: "Shrouded Fable Kingambit Collection",
        category: "pokemon",
        expansion: "shrouded-fable",
        price: 100000,
        language: ["en"],
        images: [
            "https://www.thecardsharkemporium.com.au/cdn/shop/files/background-editor_output_6b437846-dcf5-4e1e-aa51-cabafca560c3.png?v=1733451261&width=533",
            "https://unboxunbored.com/cdn/shop/files/pokemon-tcg-shrouded-fable-kingambit-illustration-collection-470289.png?v=1741543903&width=1214"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 4,
        name: "Booster Heat Wave Arena",
        category: "pokemon",
        expansion: "heat-wave-arena",
        price: 21000,
        language: ["jp"],
        images: [
            "https://shop.orbsportscards.com/cdn/shop/files/image-20-1.png?v=1762270115",
            "https://card-binder.com/cdn/shop/files/PokemonJapanHeatwaveArenaChaseCardimages.webp?v=1741505684&width=1500"
        ],
        stock: "available",
        promo: false,
        cantidad: 15
    },
    {
        id: 5,
        name: "Booster Box Surging Sparks",
        category: "pokemon",
        expansion: "surging-sparks",
        price: 770000,
        language: ["en"],
        images: [
            "https://dracostore.co/wp-content/uploads/2024/11/Photoroom-20240902-102404.webp",
            "https://evolvecardshop.com/cdn/shop/files/SurgingBoosterBoxSide.png?v=1750954333&width=1946",
            "https://card-binder.com/cdn/shop/files/PokemonScarlet_VioletSurgingSparkssetchasecards.webp?v=1739564357&width=1500"
        ],
        stock: "agotado"
    },
    {
        id: 6,
        name: "First Partner Illustration Collection",
        category: "pokemon",
        expansion: "otros",
        price: 80000,
        language: ["en"],
        images: [
            "https://www.huntercardtcg.com/wp-content/uploads/2026/03/firstpartnerilluscoll.webp",
            "https://cardzone.es/cdn/shop/files/sobres-caja-first-partner-primer-companero-coleccion-illustration-collection-cartas-pokemon-tcg-cardzone_2e777ee9-4982-4e43-a356-1fc6946157c9.png?v=1773828172&width=4320",
            "https://www.breakthecase.de/cdn/shop/files/Inhalt_100perfektpassendeKartenschutzhuellen63x88mm_0bbbdead-d718-469c-93fb-517751473581.png?v=1773855540&width=1000"
        ],
        stock: "soon"
    },
    {
        id: 7,
        name: "Ascended Heroes Premium Poster Collection",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 235000,
        language: ["en"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Ascended-Heroes-Premium-Poster-Collection.png.webp",
            "https://www.blindbox.cz/data/products/detail_pokemon-ascended-heroes-premiu.png",
            "https://media.gamestop.com/i/gamestop/20030568_ALT05?$pdp$?w=1256&h=664&fmt=auto",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2026/me2pt5-premium-poster-collection/inline/01-en.png"
        ],
        stock: "soon"
    },
    {
        id: 8,
        name: "Mega Battle Deck -  Mega Diance EX",
        category: "pokemon",
        expansion: "otros",
        price: 65000,
        language: ["es"],
        images: [
            "https://montevideogaminghouse.com/wp-content/uploads/2025/10/Pokemon-Mega-Battle-Deck-Mega-Diancie-ex-420x420.png",
            "https://cdnx.jumpseller.com/play-tcg1/image/68968748/resize/540/600?1766368530"
        ],
        stock: "encargo"
    },
    {
        id: 9,
        name: "Mega Battle Deck -  Mega Gengar EX (Daño en caja)",
        category: "pokemon",
        expansion: "otros",
        price: 70000,
        language: ["en"],
        images: [
            "https://cdnx.jumpseller.com/rtgamer-store/image/69132027/resize/306/407?1761666898",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Mega_Gengar_ex_Deck_Promos_600x.webp?v=1762472166"
        ],
        stock: "agotado"
    },
    {
        id: 10,
        name: "ETB Perfect Order",
        category: "pokemon",
        expansion: "perfect-order",
        price: 238000,
        language: ["en"],
        images: [
            "https://media.gamestop.com/i/gamestop/20031957",
            "https://gengar.s28.cdn-upgates.com/_cache/4/a/4a8f9455c0800a5705cd06f6388fd6a5-navrh-bez-nazvu-5.webp",
            "https://images.squarespace-cdn.com/content/v1/5e3b1164feb39b444b58f15b/14aef118-d09a-4121-892d-e95b36be11e5/M3_117_R_JP_LG+%281%29.png"
        ],
        stock: "soon"
    },
    {
        id: 11,
        name: "Deluxe Battle Deck - Miraidon EX",
        category: "pokemon",
        expansion: "otros",
        price: 90000,
        language: ["en"],
        images: [
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex.webp?v=1735079323",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex_Cards_600x.webp?v=1735079323",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex_Contents_600x.webp?v=1735079323"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 12,
        name: "Protectores de cartas - 100 Unidades",
        category: "pokemon",
        expansion: "otros",
        price: 10000,
        language: ["en"],
        images: [
            "https://sc04.alicdn.com/kf/H2dbb84b4f9fc4237ab5c0e99d4ea3ad7b.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 0
    },
    {
        id: 13,
        name: "Booster Bundle Phantasmal Flames",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 125000,
        language: ["en"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/329077/457207/Copy_of_Website_Image_Template9999-7860__44031.1759343927.png",
            "https://zingaentertainment.com/cdn/shop/files/Pokemon_TCG_Mega_Evolution_Phantasmal_Flames_Booster_Wrap_Mega_Charizard_4_pack_800x.png?v=1764337750",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "agotado"
    },
    {
        id: 14,
        name: "Booster Trick or Trade (2024)",
        category: "pokemon",
        expansion: "otros",
        price: 5000,
        language: ["en"],
        images: [
            "https://www.despelvogel.com/wp-content/uploads/2024/06/trick-or-trade-2024.png",
            "https://cardzone.es/cdn/shop/files/siguemeeninstagram_1920x1920px_-2024-10-25T105103.875.png?v=1729846282&width=4800"
        ],
        stock: "available",
        promo: false,
        cantidad: 137
    },
    {
        id: 15,
        name: "Mini Tin Evoluciones Prismaticas",
        category: "pokemon",
        expansion: "prismatic-evolution",
        price: 52000,
        language: ["es"],
        images: [
            "https://cardzone.es/cdn/shop/files/mini-lata-pokemon-evoluciones-prismaticas-sobres-y-cartas-pokemon-tcg.png?v=1750152740&width=1920",
            "https://vyruztoystore.com.mx/cdn/shop/files/PokemonTCGScarlet_VioletPrismaticEvolutionsMiniTinSylveonBooster.webp?v=1747298170&width=1946"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 0
    },
    {
        id: 16,
        name: "3 Pack Blister Llamaradas Fantasmales",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 63000,
        language: ["es"],
        images: [
            "https://lacasadekartus.com/wp-content/uploads/2025/11/blister-3-fuegos-fantasmales.webp",
            "https://cdn.chaoscards.co.uk/uploads/prod_img/2_308966_e.png?v=-62169983925",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 17,
        name: "Sleeved Booster Phantasmal Flames",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 23000,
        language: ["en"],
        images: [
            "https://media.gamestop.com/i/gamestop/20027388_ALT04/Pokemon-Trading-Card-Game-Phantasmal-Flames-Sleeved-Booster-Pack?$pdp$?w=1256&h=664&fmt=auto",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 12
    },
    {
        id: 18,
        name: "3 Pack Blister Fabula Sombria",
        category: "pokemon",
        expansion: "shrouded-fable",
        price: 56000,
        language: ["es"],
        images: [
            "https://www.pokemillon.com/cdn/shop/files/Pokemon-TCG_Scarlet_Violet_Shrouded_Fable_Three-Booster_Pack_Blister.png?v=1754155188",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/pokemon-tcg-most-valuable-cards-from-shrouded-fable-cassiopeia-pecharunt-ex-and-dusknoir.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 3
    },
    {
        id: 19,
        name: "World Championship Deck 2023",
        category: "pokemon",
        expansion: "otros",
        price: 70000,
        language: ["en"],
        images: [
            "https://devirinvestments.s3.eu-west-1.amazonaws.com/img/catalog/product/820650856037-1200-face3d.jpg",
            "https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9544_699-85605_04.jpg",
            "https://m.media-amazon.com/images/I/71gr2B-wVPL._AC_UF350,350_QL80_.jpg",
            "https://i.ebayimg.com/images/g/ElQAAOSwiU1l4g~5/s-l1200.jpg",
        ],
        stock: "soon",
    },
    {
        id: 20,
        name: "Pokeball Tin Q4 2025",
        category: "pokemon",
        expansion: "otros",
        price: 65000,
        language: ["es"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/335177/476105/Gamenerdzimage7463__69770.1764691893.png"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 21,
        name: "Annihilape EX Box",
        category: "pokemon",
        expansion: "otros",
        price: 95000,
        language: ["es"],
        images: [
            "https://web.big-bang.cl/wp-content/uploads/2023/07/6w7j5prnc59bx49xcmbk6w3v-wpp1690235691437.png",
            "https://card-binder.com/cdn/shop/files/Pokemon-scarlet-violet-annihilape-ex-collection-box-pack-content.webp?v=1734120857&width=1500",
        ],
        stock: "soon",
        promo: false,
        cantidad: 2
    },
    {
        id: 22,
        name: "Sleveed Booster Journey Together",
        category: "pokemon",
        expansion: "journey-together",
        price: 23000,
        language: ["en"],
        images: [
            "https://ryu.land/cdn/shop/files/rn-image_picker_lib_temp_96ba250b-a2aa-4199-8877-bf3481b151f9.png?v=1736467969&width=1445",
            "https://preview.redd.it/hot-take-journey-together-is-an-awesome-set-with-amazing-v0-a8tz8dlzn14f1.jpeg?width=1080&crop=smart&auto=webp&s=0987bb0afbd5b52bed50197881a30602fc96759a"
        ],
        stock: "available",
        promo: false,
        cantidad: 11
    },
    {
        id: 23,
        name: "Unova Victini Illustration Collection",
        category: "pokemon",
        expansion: "black-white",
        price: 110000,
        language: ["es"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Victini-Illustration-Collection-2.png.webp",
            "https://static.wixstatic.com/media/40e109_4d3d0551e5354ef89d9f3ca910f4b279~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            "https://static.wixstatic.com/media/40e109_d8b038187d814737a50d9373e9019f74~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
        ],
        stock: "soon",
    },
    {
        id: 24,
        name: "Unova Poster Collection",
        category: "pokemon",
        expansion: "black-white",
        price: 90000,
        language: ["en"],
        images: [
            "https://tcglevel.com/cdn/shop/files/caja-coleccion-pokemon-llama-blanca-fulgor-negro-es.png?v=1753095343",
            "https://cardsrfun.de/cdn/shop/files/Black_Bolt_White_Flare_Unova_Poster_Collection.webp?v=1752854514&width=1214",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/unova-poster-collection/inline/01-en.png"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 0
    },
    {
        id: 25,
        name: "Cynthia’s Garchomp EX Premium Collection",
        category: "pokemon",
        expansion: "otros",
        price: 185000,
        language: ["es", "en"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Cynthia-Garchomp-EX-Premiaum-COllection-2.png.webp",
            "https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/series/incrementals/2025/cynthias-garchomp-ex-premium-collection/inline/01-latam.png",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/cynthias-garchomp-ex-premium-collection/inline/02.png",
            "https://pokefaust.com/cdn/shop/files/Garchomp_EX03.webp?v=1757090329&width=1946"
        ],
        stock: "encargo"
    },
    {
        id: 26,
        name: "Booster Bundle Llamaradas Fantasmales",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 115000,
        language: ["es"],
        images: [
            "https://d1i787aglh9bmb.cloudfront.net/assets/img/me-expansions/me02/collections/es-mx/me02-booster-bundle-la.png",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Mega_Evolution_Phantasmal_Flames_Booster_Packs_6_600x.webp?v=1760135927",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 27,
        name: "ETB Llamaradas Fantasmales",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 225000,
        language: ["es"],
        images: [
            "https://d1i787aglh9bmb.cloudfront.net/assets/img/me-expansions/me02/collections/es-mx/me02-etb-la.png",
            "https://grancards.com/cdn/shop/files/ETB_LLAMAS_FANTASMALES_2.png?v=1763060420&width=1445",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 0
    },
    {
        id: 28,
        name: "Mini Tin Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 52000,
        language: ["en"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Ascended-Heroes-Mini-Tin.png.webp",
            "https://preview.redd.it/ascended-heros-complete-sirs-all-22-v0-bt9e098zvb8g1.png?width=1080&crop=smart&auto=webp&s=accb4478b865b94482c042352d6cbc42e1f2de30"
        ],
        stock: "soon"
    },
    {
        id: 29,
        name: "Mega Lucario EX Figure Collection",
        category: "pokemon",
        expansion: "mega-evolution",
        price: 129000,
        language: ["en"],
        images: [
            "https://versusgamecenter.pt/cdn/shop/files/Pokemon-TCG-Mega-Lucario-Figure-Box_900x.png?v=1763557347",
            "https://www.igabiba.si/cdn/shop/files/pokemon-tcg-mega-lucario-ex-figure-collection-196214116986-1206248071_1024x.png?v=1763484541",
            "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Lucario-ex-figure-collection-box-contents.webp?v=1757577594&width=1500"
        ],
        stock: "agotado"
    },
    {
        id: 30,
        name: "Mega Lucario EX Figure Collection",
        category: "pokemon",
        expansion: "mega-evolution",
        price: 115000,
        language: ["es"],
        images: [
            "https://versusgamecenter.pt/cdn/shop/files/Pokemon-TCG-Mega-Lucario-Figure-Box_900x.png?v=1763557347",
            "https://www.igabiba.si/cdn/shop/files/pokemon-tcg-mega-lucario-ex-figure-collection-196214116986-1206248071_1024x.png?v=1763484541",
            "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Lucario-ex-figure-collection-box-contents.webp?v=1757577594&width=1500"
        ],
        stock: "encargo"
    },
    {
        id: 31,
        name: "Battle Deck Gengar o Battle Deck Diance",
        category: "pokemon",
        expansion: "otros",
        price: 65000,
        language: ["es"],
        images: [
            "https://cdnx.jumpseller.com/rtgamer-store/image/69132027/resize/306/407?1761666898",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Mega_Gengar_ex_Deck_Promos_600x.webp?v=1762472166"
        ],
        stock: "encargo"
    },
    {
        id: 32,
        name: "League Battle Deck Team Rocket's Mewtwo EX",
        category: "pokemon",
        expansion: "otros",
        price: 128000,
        language: ["en"],
        images: [
            "https://evolvecardshop.com/cdn/shop/files/MewtwoexLeagueBattleDeck.png?v=1765489371&width=1946",
            "https://media.gamestop.com/i/gamestop/20026509_ALT03?$pdp$?w=1256&h=664&fmt=auto",
            "https://media.gamestop.com/i/gamestop/20026509_ALT02?$pdp$?w=1256&h=664&fmt=auto"
        ],
        stock: "encargo"
    },
    {
        id: 33,
        name: "Mega Latias EX Box",
        category: "pokemon",
        expansion: "otros",
        price: 105000,
        language: ["en"],
        images: [
            "https://topdeck.com.co/cdn/shop/files/Mega-Latias-EX-Box.png?v=1766876190",
            "https://dragonslair.se/image/14470/Pok-mon-TCG---Mega-Latias-ex-Box3.png",
            "https://beamcardshop.com/cdn/shop/files/pokemon-mega-evolution-mega-latias-ex-box-mentastore-7265306.webp?v=1760545507"
        ],
        stock: "available",
        promo: false,
        cantidad: 2
    },
    {
        id: 34,
        name: "Lata Destinos de Paldea",
        category: "pokemon",
        expansion: "paldean-fates",
        price: 110000,
        language: ["es"],
        images: [
            "https://gamer4ever.com.co/cdn/shop/files/820650504723_a505ee07-f4f8-4dc0-be6f-7c5ab458a752.jpg?v=1708104442",
            "https://www.pokemillon.com/cdn/shop/files/Sobres-destinos-de-paldea-en-espanol.png?v=1754154605",
            "https://card-binder.com/cdn/shop/files/Pokemon_Scarlet_Violet_Paldean_Fates_set_chase_cards.png?v=1739562220&width=1500"
        ],
        stock: "available",
        promo: true,
        cantidad: 2
    },
    {
        id: 35,
        name: "Mimikyu EX Box",
        category: "pokemon",
        expansion: "otros",
        price: 95000,
        language: ["es"],
        images: [
            "https://magicomens.com/cdn/shop/products/ptcg-mimikyu-ex-box_1200x.webp?v=1678787317",
            "https://www.despelvogel.com/wp-content/uploads/2020/02/Mimikyu-Box.png",
            "https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10001/P8792_290-85218_03.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 2
    },
    {
        id: 36,
        name: "Booster Bundle Rivales Predestinados",
        category: "pokemon",
        expansion: "destined-rivals",
        price: 120000,
        language: ["es"],
        images: [
            "https://dojiw2m9tvv09.cloudfront.net/68889/product/booster-bundle-pok-mon-tcg-rivales-predestinados-espaniol0912.png",
            "https://pokemonalpha.es/wp-content/uploads/2025/03/Escarlata_y_Purpura-Rivales_Predestinados_Booster_Wraps_Cynthia_Garchomp_ES.webp",
            "https://cdn.shopify.com/s/files/1/0572/9671/5939/files/Blog_Products_1.png?v=1749269280"
        ],
        stock: "agotado"
    },
    {
        id: 37,
        name: "Sleeves Pikachu - 65 unidades",
        category: "pokemon",
        expansion: "otros",
        price: 45000,
        language: [""],
        images: [
            "https://knoldex.nl/cdn/shop/files/Pikachu65ctDeckProtectorSleeves1.png?v=1773343552",
            "https://www.shopultrapro.eu/cdn/shop/files/pikachu-standard-deck-protector-sleeves-65ct-for-pokemon-776185_grande.png?v=1737074589"
        ],
        stock: "soon",
        promo: true,
        cantidad: 1
    },
    {
        id: 38,
        name: "Mini Tin Fábula Sombria",
        category: "pokemon",
        expansion: "shrouded-fable",
        price: 45000,
        language: ["es"],
        images: [
            "https://luffytoys.cl/cdn/shop/files/2-257461-e9839_1200x.png?v=1717104973",
            "https://unboxunbored.com/cdn/shop/files/pokemon-tcg-shrouded-fable-kingambit-illustration-collection-210660.png?v=1748179440&width=1214",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/pokemon-tcg-most-valuable-cards-from-shrouded-fable-cassiopeia-pecharunt-ex-and-dusknoir.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 39,
        name: "Sleeved Booster Destined Rivals",
        category: "pokemon",
        expansion: "destined-rivals",
        price: 23000,
        language: ["en"],
        images: [
            "https://card-binder.com/cdn/shop/files/Pokemon-scarlet-violet-destined-rivals-english-team-rocket-sleeved-booster-pack.webp?v=1743581350",
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/05/three-cards-from-pokemon-tcg-destined-rivals-set-over-a-red-background.jpg?q=70&fit=crop&w=1200&h=628&dpr=1",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/06/pokemon-tcg-destined-rivals-cards-to-grade.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 3
    },
    {
        id: 40,
        name: "Pokeball Tin Q4 2025",
        category: "pokemon",
        expansion: "otros",
        price: 73000,
        language: ["en"],
        images: [
            "https://www.princedist.com/cdn/shop/files/ball_800x.png?v=1761665276"
        ],
        stock: "available",
        promo: false,
        cantidad: 4
    },
    {
        id: 41,
        name: "Funko Pop! Hantengu #1854",
        category: "funko",
        expansion: "",
        price: 45000,
        language: [""],
        images: [
            "https://realpopmania.com/cdn/shop/files/25_365c3c5f-e3a1-421f-af63-ec155e1c47d5.png?v=1734691504",
            "https://cdnx.jumpseller.com/ruma-store/image/61926375/resize/1200/630?1743376233"
        ],
        stock: "agotado",
        promo: true,
        cantidad: 1
    },
    {
        id: 42,
        name: "Funko Pop! Charmander Soft #455",
        category: "funko",
        expansion: "",
        price: 50000,
        language: [""],
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_664188-MLA91837978449_092025-O.webp",
            "https://www.mypops.ca/cdn/shop/files/char_002.png?v=1743620128"
        ],
        stock: "available",
        promo: false,
        cantidad: 1
    },
    {
        id: 43,
        name: "Funko Pop! Nobara (Painting) #1647",
        category: "funko",
        expansion: "",
        price: 35000,
        language: [""],
        images: [
            "https://garajedelmedio.com/wp-content/uploads/2025/08/nobara-funko-exclusivo-amazon.png",
            "https://www.thepopplug.com/cdn/shop/files/Nobara_Kugisaki_Art_Toys_70776f55-0b68-46a7-989f-dd81943e5caa_2.png?v=1757798261&width=480"
        ],
        stock: "available",
        promo: true,
        cantidad: 1
    },
    {
        id: 44,
        name: "Toploaders & Penny Sleeves Pikachu (25 unidades)",
        category: "pokemon",
        expansion: "otros",
        price: 31000,
        language: [""],
        images: [
            "https://cdn11.bigcommerce.com/s-vz3etek0gv/images/stencil/1200w/products/78559/108684/ULP16663_web_Box_3D_R__20845.1769636487.jpg",
            "https://primary.jwwb.nl/public/h/t/i/temp-zjpebgcobmaxydcmrfwb/pkm_pikachu_toploader_b2b_landscapedistributorcatalog_11x17-high.jpg?enable-io=true&enable=upscale&fit=bounds&width=1200"
        ],
        stock: "agotado"
    },
    {
        id: 45,
        name: "ETB Phantasmal Flames",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 235000,
        language: ["en"],
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
        id: 46,
        name: "Zapdos EX Collection 151",
        category: "pokemon",
        expansion: "151",
        price: 220000,
        language: ["en"],
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
        id: 47,
        name: "Collection Erika/Larry Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 52000,
        language: ["es"],
        images: [
            "https://kantocards.com/cdn/shop/files/rn-image_picker_lib_temp_ebd49b90-cd39-477e-82f2-ef9016eb6361.png?v=1766092149",
            "https://geeknasio.com/wp-content/uploads/2026/01/Ascended-Heroes-Erika-y-Larry-Collection-600x600.png",
            "https://preview.redd.it/ascended-heros-complete-sirs-all-22-v0-bt9e098zvb8g1.png?width=1080&crop=smart&auto=webp&s=accb4478b865b94482c042352d6cbc42e1f2de30"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 2
    },
    {
        id: 48,
        name: "Tech Sticker Collection Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 70000,
        language: ["es"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Ascended-Heroes-Tech-Sticker-Collection.png.webp",
            "https://media.gamestop.com/i/gamestop/20030567_ALT03?$pdp$?w=1256&h=664&fmt=auto",
            "https://cdn.chaoscards.co.uk/uploads/prod_img/2_319146_e.png?v=-62169983925",
            "https://preview.redd.it/ascended-heros-complete-sirs-all-22-v0-bt9e098zvb8g1.png?width=1080&crop=smart&auto=webp&s=accb4478b865b94482c042352d6cbc42e1f2de30"
        ],
        stock: "soon",
        promo: false,
        cantidad: 4
    },
    {
        id: 49,
        name: "Pokemon Day 2026 Collection",
        category: "pokemon",
        expansion: "otros",
        price: 80000,
        language: ["en"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/341956/493637/PKU101039-1__96448.1769739454.png",
            "https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/series/incrementals/2026/pokemon-day-2026-collection/inline/full/SV05_LA_51.png",
            "https://metamorphcenter.com/cdn/shop/files/Caja_Pokemon_Day_2026_-_30_Aniversario_-_Espanol-1.png?v=1769706495&width=1232"
        ],
        stock: "available",
        promo: false,
        promoEvento: "pokemon-day",
        cantidad: 9
    },
    {
        id: 50,
        name: "Ultra Premium Collection Mega Charizard X",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 530000,
        language: ["en"],
        images: [
            "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Charizard-Ultra-Premium-Collection-Box-Contents.webp?v=1757582351&width=1500",
            "https://cdnx.jumpseller.com/tcg-chile/image/68810996/resize/540/540?1760738085",
            "https://kantocards.com/cdn/shop/files/rn-image_picker_lib_temp_9ebd7f72-90ca-4708-910c-75e679730c4a.png?v=1771097615&width=1354"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 51,
        name: "Booster Astros Brillantes",
        category: "pokemon",
        expansion: "astros brillantes",
        price: 23000,
        language: ["es"],
        images: [
            "https://saccum.com/wp-content/uploads/2022/09/SobresAstrosBrillantes.png",
            "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/01/EitJnbZXkAAvp2T-1-copy-90-15.jpg",
            "https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/trading-card-game/_tiles/strategy/swsh09/top-cards/swsh09-top-cards-169-es.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 4
    },
    {
        id: 52,
        name: "Sobre Tempestad Plateada",
        category: "pokemon",
        expansion: "tempestad-plateada",
        price: 22000,
        language: ["es"],
        images: [
            "https://www.latorremagica.com/3126-large_default/sobre-cartas-pokemon-tempestad-plateada.jpg",
            "https://card-binder.com/cdn/shop/files/Pokemon_Sword_Shield_Silver_Tempest_Chase_cards.webp?v=1739714637&width=1500",
            "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/06/pokemon-tcg-most-valuable-silver-tempest.jpg"
        ],
        stock: "available",
        promo: false,
        cantidad: 15
    },
    {
        id: 53,
        name: "Cielos Evolutivos",
        category: "pokemon",
        expansion: "cielos-evolutivos",
        price: 25000,
        language: ["es"],
        images: [
            "https://www.pokemillon.com/cdn/shop/files/Sobre_Cielos_Evolutivos_Sin_Fondo_Pokemillon_a1384360-b745-41c7-a72c-1644826321b3.png?v=1768861462",
            "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/07/EitJnbZXkAAvp2T-1-copy-90-21.jpg",
            "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/07/EitJnbZXkAAvp2T-1-copy-95-23.jpg"
        ],
        stock: "agotado",
        promo: false,
        cantidad: "",
    },
    {
        id: 54,
        name: "ETB Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 238000,
        language: ["en"],
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
        id: 55,
        name: "Tin Mega Charizard",
        category: "pokemon",
        expansion: "phantasmal-flames",
        price: 115000,
        language: ["en"],
        images: [
            "https://pokesouq.com/cdn/shop/files/mega_charizard_4_tin_1_2048x.png?v=1771478020",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/full/MEP/MEP_EN_30.png",
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/full/MEP/MEP_EN_29.png"
        ],
        stock: "available",
        promo: false,
        cantidad: 6
    },
    {
        id: 56,
        name: "ETB Ascended Heroes",
        category: "pokemon",
        expansion: "ascended-heroes",
        price: 235000,
        language: ["es"],
        images: [
            "https://kantocards.com/cdn/shop/files/P11425-ME02pt5_3D_ETB_OuterSleeve_Left_EN-2711x2584-70f70a8.png?v=1764087611",
            "https://cardzone.es/cdn/shop/files/contenido-caja-de-entrenador-elite-trainer-box-etb-heroes-ascendentes-ascended-heroes-cartas-pokemon-tcg-cardzone_fe31d546-5f40-4eed-ad26-7da31d3fa915.png?v=1771327450&width=3840",
            "https://cdn.shopify.com/s/files/1/0865/2816/4189/files/Pokemon-TCG-Mega-Evolutions-Ascended-Heroes-New-Mega-Evolution-illustration-Cards.webp?v=1763715714"
        ],
        stock: "agotado",
        promo: false,
        cantidad: 1
    },
    {
        id: 57,
        name: "Sleeved Booster Mascarada Crepuscular",
        category: "pokemon",
        expansion: "twilight-masquerade",
        price: 18000,
        language: ["es"],
        images: [
            "https://acdn-us.mitiendanube.com/stores/005/946/657/products/pokemon-scarlet-violet-twilight-masquerade-sleeved-booster-pack-2-9824791f6a706bfde617706468339196-640-0.webp",
            "https://frikidenacimiento.es/wp-content/uploads/CS_Producto-28-2.png",
            "https://card-binder.com/cdn/shop/files/PokemonScarlet_VioletTwilightMasquedesetadditionchasecards.webp?v=1739563434&width=1500"
        ],
        stock: "encargo",
        promo: true,
        cantidad: 5  // Ajusta la cantidad real
    },
    {
        id: 58,
        name: "Booster Box Ninja Spinner",
        category: "pokemon",
        expansion: "ninja-spinner",
        price: 500000,
        language: ["jp"],
        images: [
            "https://cdn.snkrdunk.com/upload_bg_removed/244b2a87-ebe1-41bb-a812-6daa8aaddc80.webp?size=l",
            "https://www.supercollectors.es/wp-content/uploads/2026/03/877373.webp",
            "https://www.card-corner.de/media/image/product/4141/md/pokemon-ninja-spinner-m4-display~2.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 3
    },
    {
        id: 59,
        name: "Booster Ninja Spinner",
        category: "pokemon",
        expansion: "ninja-spinner",
        price: 20000,
        language: ["jp"],
        images: [
            "https://pokejpn.com/cdn/shop/files/spinner-5-pack.png?v=1772676862&width=700",
            "https://www.card-corner.de/media/image/product/4141/md/pokemon-ninja-spinner-m4-display~2.webp"
        ],
        stock: "soon",
        promo: false,
        cantidad: 2
    }
];


// Banderas reales de internet
const languageFlags = {
    'es': 'https://flagcdn.com/w40/es.png',
    'en': 'https://flagcdn.com/w40/us.png',
    'jp': 'https://flagcdn.com/w40/jp.png',
    'fr': 'https://flagcdn.com/w40/fr.png',
    'de': 'https://flagcdn.com/w40/de.png'
};

// Nombres de países
const countryNames = {
    'es': 'Español',
    'en': 'Inglés',
    'jp': 'Japonés',
    'fr': 'Francés',
    'de': 'Alemán'
};

// Nombres de expansiones para mostrar
const expansionNames = {
    'ascended-heroes': 'Ascended Heroes',
    'mega-evolution': 'Mega Evolution',
    'phantasmal-flames': 'Phantasmal Flames',
    'journey-together': 'Journey Together',
    'shrouded-fable': 'Shrouded Fable',
    'surging-sparks': 'Surging Sparks',
    'destined-rivals': 'Destined Rivals',
    'prismatic-evolution': 'Prismatic Evolution',
    'paldean-fates': 'Paldean Fates',
    '151': 'Colección 151',
    'heat-wave-arena': 'Heat Wave Arena',
    'black-white': 'Black Bolt & White Flare',
    'golpe-fusion': 'Golpe Fusión',
    'tempestad-plateada': 'Tempestad Plateada',
    'cielos-evolutivos': 'Cielos Evolutivos',
    'otros': 'Otros productos'
};

// Banners de preventa configurables
const preorderBanners = [
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
        active: true,
        priority: 1
    },
    {
        id: "instagram-promo",
        title: "📸 SÍGUENOS EN INSTAGRAM",
        subtitle: "¡Dinámicas y promociones especiales!",
        description: "Participa en giveaways, sorteos y sé el primero en enterarte de nuevas llegadas",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
        bgColor: "linear-gradient(135deg, #833ab4, #fd1d1d, #f77737)",
        textColor: "#ffffff",
        action: "link",
        link: "https://tr.ee/I2M2MB", // ← REEMPLAZA con tu usuario de Instagram
        showQR: true,
        qrImage: "qr-instagram.png", // ← Aquí pondrás tu imagen del QR
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
}

];
