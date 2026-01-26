const products = [
    {
        id: 1,
        name: "Elite Trainer Box Megaevolución (Gardevoir)",
        category: "pokemon",
        price: 225000, // ← Entero limpio
        language: ["es"],
        images: [
            "https://cdn.snkrdunk.com/upload_bg_removed/20250922115711-6.webp?size=l",
            "https://www.pokemoncenter.com/images/DAMRoot/High/10015/P10346_10-10047-120_02.jpg",
            "https://www.pokemoncenter.com/images/DAMRoot/High/10015/P10346_10-10047-120_03.jpg"
        ],
        stock: "agotado",  
    },
    {
        id: 2,
        name: "Iono's Bellibolt EX Premium Collection",
        category: "pokemon",
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
        price: 100000, 
        language: ["en"],
        images: [
            "https://www.thecardsharkemporium.com.au/cdn/shop/files/background-editor_output_6b437846-dcf5-4e1e-aa51-cabafca560c3.png?v=1733451261&width=533", "https://unboxunbored.com/cdn/shop/files/pokemon-tcg-shrouded-fable-kingambit-illustration-collection-470289.png?v=1741543903&width=1214"
        ],
        stock: "available",
        promo: false, 
        cantidad: 1
    },
    {
        id: 4,
        name: "Booster Heat Wave Arena",
        category: "pokemon",
        price: 21000, 
        language: ["jp"],
        images: [
            "https://shop.orbsportscards.com/cdn/shop/files/image-20-1.png?v=1762270115",
            "https://card-binder.com/cdn/shop/files/PokemonJapanHeatwaveArenaChaseCardimages.webp?v=1741505684&width=1500"
        ],
        stock: "available",
        promo: false, 
        cantidad: 19
    },
    {
        id: 5,
        name: "Booster Box Surging Sparks",
        category: "pokemon",
        price: 770000, 
        language: ["en"],
        images: [
            "https://dracostore.co/wp-content/uploads/2024/11/Photoroom-20240902-102404.webp",
            "https://evolvecardshop.com/cdn/shop/files/SurgingBoosterBoxSide.png?v=1750954333&width=1946", "https://card-binder.com/cdn/shop/files/PokemonScarlet_VioletSurgingSparkssetchasecards.webp?v=1739564357&width=1500"
        ],
        stock: "agotado"
    },
    {
        id: 6,
        name: "Booster Surging Sparks",
        category: "pokemon",
        price: 22000, 
        language: ["en"],
        images: [
            "https://www.despelvogel.com/wp-content/uploads/2020/08/Surging-Sparks-Boosters-1024x1024.png",
            "https://card-binder.com/cdn/shop/files/PokemonScarlet_VioletSurgingSparkssetchasecards.webp?v=1739564357&width=1500"
        ],
        stock: "available",
        promo: false, 
        cantidad: 1
    },
    {
        id: 7,
        name: "Team Rocket's Mewtwo EX Box",
        category: "pokemon",
        price: 120000, 
        language: ["en"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/308108/413275/PKU10167-1__55894.1750813140.png",
            "https://kantocards.com/cdn/shop/files/100-10438-3D_PIGS_Team_Rockets_Mewtwo_ex_Box_Booster_Wraps_EN_INT-2150x1473-a0dce50.png?v=1750168894&width=2150", "https://i5.walmartimages.com/asr/f312a2b2-0b45-41d0-842c-ca1230857d7e.4a22971ace45209e71f57bba7deac9f1.jpeg"
        ],
        stock: "agotado"
    },
    {
        id: 8,
        name: "Mega Battle Deck -  Mega Diance EX",
        category: "pokemon",
        price: 80000, 
        language: ["en"],
        images: [
            "https://montevideogaminghouse.com/wp-content/uploads/2025/10/Pokemon-Mega-Battle-Deck-Mega-Diancie-ex-420x420.png",
            "https://cdnx.jumpseller.com/play-tcg1/image/68968748/resize/540/600?1766368530"
        ],
        stock: "agotado"
    },
    {
        id: 9,
        name: "Mega Battle Deck -  Mega Gengar EX (Daño en caja)",
        category: "pokemon",
        price: 70000, 
        language: ["en"],
        images: [
            "https://cdnx.jumpseller.com/rtgamer-store/image/69132027/resize/306/407?1761666898",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Mega_Gengar_ex_Deck_Promos_600x.webp?v=1762472166"
        ],
        stock: "available",
        promo: false, 
        cantidad: 1
    },
    {
        id: 10,
        name: "Combo Mega Battle Deck - Mega Gengar EX (Daño en caja) y Mega Diance EX",
        category: "pokemon",
        price: 135000, 
        language: ["en"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/329427/458104/Copy_of_Website_Image_Template9999-8511__37093.1759523139.png",
            "https://cdnx.jumpseller.com/play-tcg1/image/68968748/resize/540/600?1766368530", "https://www.stompinggroundstcg.com/cdn/shop/files/Mega_Gengar_ex_Deck_Promos_600x.webp?v=1762472166"
        ],
        stock: "agotado"
    },
    {
        id: 11,
        name: "Deluxe Battle Deck - Miraidon EX",
        category: "pokemon",
        price: 90000, 
        language: ["en"],
        images: [
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex.webp?v=1735079323",
            "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex_Cards_600x.webp?v=1735079323", "https://www.stompinggroundstcg.com/cdn/shop/files/Deluxe_Battle_Deck_Miraidon_ex_Contents_600x.webp?v=1735079323"
        ],
        stock: "available",
        promo: false, 
        cantidad: 1
    },
    {
        id: 12,
        name: "Protectores de cartas - 100 Unidades",
        category: "pokemon",
        price: 10000, 
        language: ["en"],
        images: [
            "https://sc04.alicdn.com/kf/H2dbb84b4f9fc4237ab5c0e99d4ea3ad7b.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 2
    },
    {
        id: 13,
        name: "Booster Bundle Phantasmal Flames",
        category: "pokemon",
        price: 125000, 
        language: ["en"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/329077/457207/Copy_of_Website_Image_Template9999-7860__44031.1759343927.png",
            "https://zingaentertainment.com/cdn/shop/files/Pokemon_TCG_Mega_Evolution_Phantasmal_Flames_Booster_Wrap_Mega_Charizard_4_pack_800x.png?v=1764337750", "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "agotado"
    },
    {
        id: 14,
        name: "Booster Trick or Trade (2024)",
        category: "pokemon",
        price: 5000, 
        language: ["en"],
        images: [
            "https://www.despelvogel.com/wp-content/uploads/2024/06/trick-or-trade-2024.png", "https://cardzone.es/cdn/shop/files/siguemeeninstagram_1920x1920px_-2024-10-25T105103.875.png?v=1729846282&width=4800"
        ],
        stock: "available",
        promo: false, 
        cantidad: 138
    },
    {
        id: 15,
        name: "Mini Tin Evoluciones Prismaticas",
        category: "pokemon",
        price: 52000, 
        language: ["es"],
        images: [
            "https://cardzone.es/cdn/shop/files/mini-lata-pokemon-evoluciones-prismaticas-sobres-y-cartas-pokemon-tcg.png?v=1750152740&width=1920",
            "https://vyruztoystore.com.mx/cdn/shop/files/PokemonTCGScarlet_VioletPrismaticEvolutionsMiniTinSylveonBooster.webp?v=1747298170&width=1946"
        ],
        stock: "available",
        promo: false, 
        cantidad: 10
    },
    {
        id: 16,
        name: "3 Pack Blister Llamaradas Fantasmales",
        category: "pokemon",
        price: 63000, 
        language: ["es"],
        images: [
            "https://lacasadekartus.com/wp-content/uploads/2025/11/blister-3-fuegos-fantasmales.webp",
            "https://cdn.chaoscards.co.uk/uploads/prod_img/2_308966_e.png?v=-62169983925",  "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 2
    },
    {
        id: 17,
        name: "Sleeved Booster Phantasmal Flames",
        category: "pokemon",
        price: 23000, 
        language: ["en"],
        images: [
            "https://media.gamestop.com/i/gamestop/20027388_ALT04/Pokemon-Trading-Card-Game-Phantasmal-Flames-Sleeved-Booster-Pack?$pdp$?w=1256&h=664&fmt=auto",
            "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 25
    },
    {
        id: 18,
        name: "3 Pack Blister Fabula Sombria",
        category: "pokemon",
        price: 56000, 
        language: ["es"],
        images: [
            "https://www.pokemillon.com/cdn/shop/files/Pokemon-TCG_Scarlet_Violet_Shrouded_Fable_Three-Booster_Pack_Blister.png?v=1754155188", "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/pokemon-tcg-most-valuable-cards-from-shrouded-fable-cassiopeia-pecharunt-ex-and-dusknoir.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 2
    },
    {
        id: 19,
        name: "Booster Bundle Fabula Sombria",
        category: "pokemon",
        price: 112000, 
        language: ["es"],
        images: [
            "https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/trading-card-game/series/sv_series/sv6pt5/inline/sv6pt5-booster-bundle-es.png", "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/pokemon-tcg-most-valuable-cards-from-shrouded-fable-cassiopeia-pecharunt-ex-and-dusknoir.jpg"
        ],
        stock: "encargo"
    },
    {
        id: 20,
        name: "Pokeball Tin Q4 2025",
        category: "pokemon",
        price: 65000, 
        language: ["es"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/335177/476105/Gamenerdzimage7463__69770.1764691893.png",
            
        ],
        stock: "available",
        promo: false, 
        cantidad: 3
    },
    {
        id: 21,
        name: "Booster Megaevolución",
        category: "pokemon",
        price: 18000, 
        language: ["es"],
        images: [
            "https://montevideogaminghouse.com/wp-content/uploads/2025/09/Pokemon-Mega-Evolutions-sobre-cartas.png", "https://kotaku.com/app/uploads/2025/10/main-2.jpg", "https://kotaku.com/app/uploads/2025/09/mega-evolution-1.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 3

    },
    {
        id: 22,
        name: "Sleveed Booster Journey Together",
        category: "pokemon",
        price: 23000, 
        language: ["en"],
        images: [
            "https://ryu.land/cdn/shop/files/rn-image_picker_lib_temp_96ba250b-a2aa-4199-8877-bf3481b151f9.png?v=1736467969&width=1445",
            "https://preview.redd.it/hot-take-journey-together-is-an-awesome-set-with-amazing-v0-a8tz8dlzn14f1.jpeg?width=1080&crop=smart&auto=webp&s=0987bb0afbd5b52bed50197881a30602fc96759a"
        ],
        stock: "available",
        promo: false, 
        cantidad: 12

    },
    {
        id: 23,
        name: "Unova Victini Illustration Collection",
        category: "pokemon",
        price: 65000, 
        language: ["es"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Victini-Illustration-Collection-2.png.webp", "https://static.wixstatic.com/media/40e109_4d3d0551e5354ef89d9f3ca910f4b279~mv2.png/v1/fit/w_500,h_500,q_90/file.png", "https://static.wixstatic.com/media/40e109_d8b038187d814737a50d9373e9019f74~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
        ],
        stock: "encargo"
    },
    {
        id: 24,
        name: "Unova Poster Collection",
        category: "pokemon",
        price: 85000, 
        language: ["en"],
        images: [
            "https://tcglevel.com/cdn/shop/files/caja-coleccion-pokemon-llama-blanca-fulgor-negro-es.png?v=1753095343", "https://cardsrfun.de/cdn/shop/files/Black_Bolt_White_Flare_Unova_Poster_Collection.webp?v=1752854514&width=1214", "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/unova-poster-collection/inline/01-en.png"
        ],
        stock: "available",
        promo: false, 
        cantidad: 1

    },
    {
        id: 25,
        name: "Cynthia’s Garchomp EX Premium Collection",
        category: "pokemon",
        price: 165000, 
        language: ["es", "en"],
        images: [
            "https://avalongaming.com.co/wp-content/uploads/Cynthia-Garchomp-EX-Premiaum-COllection-2.png.webp", "https://www.pokemon.com/static-assets/content-assets/cms2-es-xl/img/trading-card-game/series/incrementals/2025/cynthias-garchomp-ex-premium-collection/inline/01-latam.png", "https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/cynthias-garchomp-ex-premium-collection/inline/02.png", "https://pokefaust.com/cdn/shop/files/Garchomp_EX03.webp?v=1757090329&width=1946"
        ],
        stock: "encargo"
    },
    {
        id: 26,
        name: "Booster Bundle Llamaradas Fantasmales",
        category: "pokemon",
        price: 120000, 
        language: ["es"],
        images: [
            "https://d1i787aglh9bmb.cloudfront.net/assets/img/me-expansions/me02/collections/es-mx/me02-booster-bundle-la.png", "https://montevideogaminghouse.com/wp-content/uploads/2025/10/Pokemon-Megaevolucion-Llamaradas-Fantasmales-Sobre-de-Cartas-420x420.png", "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 2

    },
    {
        id: 27,
        name: "Elite Trainer Box Llamaradas Fantasmales",
        category: "pokemon",
        price: 225000, 
        language: ["es"],
        images: [
            "https://d1i787aglh9bmb.cloudfront.net/assets/img/me-expansions/me02/collections/es-mx/me02-etb-la.png", "https://grancards.com/cdn/shop/files/ETB_LLAMAS_FANTASMALES_2.png?v=1763060420&width=1445", "https://cardchill.com/wp-content/uploads/2025/10/s-l16001-1024x1024.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 1

    },
    {
        id: 28,
        name: "Elite Trainer Box Megaevolución (Lucario)",
        category: "pokemon",
        price: 225000, 
        language: ["es"],
        images: [
            "https://cardcrack.com/wp-content/uploads/2025/10/etblucario.webp", "https://www.pokemillon.com/cdn/shop/files/ETB_Gardevoir_Mega_Evolucion_Sin_Fondo_Pokemillon.png?v=1759413816", "https://tcglevel.com/cdn/shop/files/caja-contenido-etb-pokemon-mega-lucario-es.png?v=1759241080&width=1946", "https://magicomens.com/cdn/shop/files/ptcg-meg-etb-gardevoir-contents_600x.webp?v=1759327017","https://preview.redd.it/mega-evolutions-etb-which-promo-card-are-you-choosing-v0-tleqlehbv5tf1.jpeg?width=640&crop=smart&auto=webp&s=413702ba5e39efff9691a4b99d5dfd6bc941f0f7"
        ],
        stock: "agotado"
    },
    {
        id: 29,
        name: "Mega Lucario EX Figure Collection",
        category: "pokemon",
        price: 115000, 
        language: ["en"],
        images: [
            "https://versusgamecenter.pt/cdn/shop/files/Pokemon-TCG-Mega-Lucario-Figure-Box_900x.png?v=1763557347", "https://www.igabiba.si/cdn/shop/files/pokemon-tcg-mega-lucario-ex-figure-collection-196214116986-1206248071_1024x.png?v=1763484541", "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Lucario-ex-figure-collection-box-contents.webp?v=1757577594&width=1500"
        ],
        stock: "encargo"
    },
    {
        id: 30,
        name: "Mega Lucario EX Figure Collection",
        category: "pokemon",
        price: 105000, 
        language: ["es"],
        images: [
            "https://versusgamecenter.pt/cdn/shop/files/Pokemon-TCG-Mega-Lucario-Figure-Box_900x.png?v=1763557347", "https://www.igabiba.si/cdn/shop/files/pokemon-tcg-mega-lucario-ex-figure-collection-196214116986-1206248071_1024x.png?v=1763484541", "https://card-binder.com/cdn/shop/files/Pokemon-TCG-Mega-Lucario-ex-figure-collection-box-contents.webp?v=1757577594&width=1500"
        ],
        stock: "encargo"
    },
    {
        id: 31,
        name: "Battle Deck Gengar",
        category: "pokemon",
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
        price: 135000, 
        language: ["en"],
        images: [
            "https://evolvecardshop.com/cdn/shop/files/MewtwoexLeagueBattleDeck.png?v=1765489371&width=1946", "https://media.gamestop.com/i/gamestop/20026509_ALT03?$pdp$?w=1256&h=664&fmt=auto", "https://media.gamestop.com/i/gamestop/20026509_ALT02?$pdp$?w=1256&h=664&fmt=auto"
        ],
        stock: "encargo"
    },
    {
        id: 33,
        name: "Mega Latias EX Box",
        category: "pokemon",
        price: 105000, 
        language: ["en"],
        images: [
            "https://topdeck.com.co/cdn/shop/files/Mega-Latias-EX-Box.png?v=1766876190", "https://dragonslair.se/image/14470/Pok-mon-TCG---Mega-Latias-ex-Box3.png", "https://beamcardshop.com/cdn/shop/files/pokemon-mega-evolution-mega-latias-ex-box-mentastore-7265306.webp?v=1760545507"
        ],
        stock: "available",
        promo: false, 
        cantidad: 3

    },
    {
        id: 34,
        name: "Lata Destinos de Paldea",
        category: "pokemon",
        price: 110000, 
        language: ["es"],
        images: [
            "https://gamer4ever.com.co/cdn/shop/files/820650504723_a505ee07-f4f8-4dc0-be6f-7c5ab458a752.jpg?v=1708104442", "https://www.pokemillon.com/cdn/shop/files/Sobres-destinos-de-paldea-en-espanol.png?v=1754154605", "https://card-binder.com/cdn/shop/files/Pokemon_Scarlet_Violet_Paldean_Fates_set_chase_cards.png?v=1739562220&width=1500"
        ],
        stock: "soon",


    },
    {
        id: 35,
        name: "Mimikyu EX Box",
        category: "pokemon",
        price: 80000, 
        language: ["es"],
        images: [
            "https://magicomens.com/cdn/shop/products/ptcg-mimikyu-ex-box_1200x.webp?v=1678787317", "https://www.despelvogel.com/wp-content/uploads/2020/02/Mimikyu-Box.png", "https://www.pokemoncenter.com/images/DAMRoot/Full-Size/10001/P8792_290-85218_03.jpg"
        ],
        stock: "soon"
    },
    {
        id: 36,
        name: "Booster Bundle Rivales Predestinados",
        category: "pokemon",
        price: 105000, 
        language: ["es"],
        images: [
            "https://dojiw2m9tvv09.cloudfront.net/68889/product/booster-bundle-pok-mon-tcg-rivales-predestinados-espaniol0912.png", "https://pokemonalpha.es/wp-content/uploads/2025/03/Escarlata_y_Purpura-Rivales_Predestinados_Booster_Wraps_Cynthia_Garchomp_ES.webp", "https://cdn.shopify.com/s/files/1/0572/9671/5939/files/Blog_Products_1.png?v=1749269280"
        ],
        stock: "encargo"
    },
    {
        id: 37,
        name: "Slashing Legends Tin",
        category: "pokemon",
        price: 105000, 
        language: ["en"],
        images: [
            "https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/original/products/304106/401087/PKU10374-2PK-1__97689.1747075284.png", "https://i5.walmartimages.com/asr/928cd24c-e9dc-4ad5-a9a2-f1a1587d3149.d598abc9d7e891095bf094c3d7b2312a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", "https://holograil.nl/cdn/shop/files/SlashingLegends_Tin_Contents.webp?v=1753385118&width=1000"
        ],
        stock: "available",
        promo: false, 
        cantidad: 2

    },
    {
        id: 38,
        name: "Mini Tin Fábula Sombria",
        category: "pokemon",
        price: 48000, 
        language: ["es"],
        images: [
            "https://luffytoys.cl/cdn/shop/files/2-257461-e9839_1200x.png?v=1717104973", "https://unboxunbored.com/cdn/shop/files/pokemon-tcg-shrouded-fable-kingambit-illustration-collection-210660.png?v=1748179440&width=1214", "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/08/pokemon-tcg-most-valuable-cards-from-shrouded-fable-cassiopeia-pecharunt-ex-and-dusknoir.jpg"
        ],
        stock: "available",
        promo: false, 
        cantidad: 2

    },
    {
        id: 39,
        name: "Sleeved Booster Destined Rivals",
        category: "pokemon",
        price: 23000, 
        language: ["en"],
        images: [
            "https://card-binder.com/cdn/shop/files/Pokemon-scarlet-violet-destined-rivals-english-team-rocket-sleeved-booster-pack.webp?v=1743581350", "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/05/three-cards-from-pokemon-tcg-destined-rivals-set-over-a-red-background.jpg?q=70&fit=crop&w=1200&h=628&dpr=1", "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/06/pokemon-tcg-destined-rivals-cards-to-grade.jpg"
        ],
        stock: "soon",
        promo: false, 
        cantidad: 15

    },
    {
        id: 40,
        name: "Poke Ball Tin Q4 2025",
        category: "pokemon",
        price: 73000, 
        language: ["en"],
        images: [
            "https://www.princedist.com/cdn/shop/files/ball_800x.png?v=1761665276",
            
        ],
        stock: "available",
        promo: false, 
        cantidad: 4
    },







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