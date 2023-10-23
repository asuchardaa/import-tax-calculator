// script.js
const jsonData = {
    "ProductList": [
        {
            "TL": 1,
            "Desc": "Live animals"
        },
        {
            "TL": 2,
            "Desc": "Meat and edible meat offal"
        },
        {
            "TL": 3,
            "Desc": "Fish and crustaceans, molluscs and other aquatic invertebrates"
        },
        {
            "TL": 4,
            "Desc": "Dairy produce; birds' eggs; natural honey; edible products of animal origin, not elsewhere\n      specified or included"
        },
        {
            "TL": 5,
            "Desc": "Products of animal origin, not elsewhere specified or included"
        },
        {
            "TL": 6,
            "Desc": "Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage"
        },
        {
            "TL": 7,
            "Desc": "Edible vegetables and certain roots and tubers"
        },
        {
            "TL": 8,
            "Desc": "Edible fruit and nuts; peel of citrus fruit or melons"
        },
        {
            "TL": 9,
            "Desc": "Coffee, tea, mate and spices"
        },
        {
            "TL": 10,
            "Desc": "Cereals"
        },
        {
            "TL": 11,
            "Desc": "Products of the milling industry; malt; starches; inulin; wheat gluten"
        },
        {
            "TL": 12,
            "Desc": "Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or\n      medicinal plants; straw and fodder"
        },
        {
            "TL": 13,
            "Desc": "Lac; gums, resins and other vegetable saps and extracts"
        },
        {
            "TL": 14,
            "Desc": "Vegetable plaiting materials; vegetable products not elsewhere specified or included"
        },
        {
            "TL": 15,
            "Desc": "Animal or vegetable fats and oils and their cleavage products; prepared edible fats;\n      animal or vegetable waxes"
        },
        {
            "TL": 16,
            "Desc": "Preparations of meat, of fish or of crustaceans, molluscs or other aquatic invertebrates"
        },
        {
            "TL": 17,
            "Desc": "Sugars and sugar confectionery"
        },
        {
            "TL": 18,
            "Desc": "Cocoa and cocoa preparations"
        },
        {
            "TL": 19,
            "Desc": "Preparations of cereals, flour, starch or milk; pastrycooks' products"
        },
        {
            "TL": 20,
            "Desc": "Preparations of vegetables, fruit, nuts or other parts of plants"
        },
        {
            "TL": 21,
            "Desc": "Miscellaneous edible preparations"
        },
        {
            "TL": 22,
            "Desc": "Beverages, spirits and vinegar"
        },
        {
            "TL": 23,
            "Desc": "Residues and waste from the food industries; prepared animal fodder"
        },
        {
            "TL": 24,
            "Desc": "Tobacco and manufactured tobacco substitutes"
        },
        {
            "TL": 25,
            "Desc": "Salt; sulphur; earths and stone; plastering materials, lime and cement"
        },
        {
            "TL": 26,
            "Desc": "Ores, slag and ash"
        },
        {
            "TL": 27,
            "Desc": "Mineral fuels, mineral oils and products of their distillation; bituminous substances;\n      mineral waxes"
        },
        {
            "TL": 28,
            "Desc": "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare- earth\n      metals, of radioactive elements or of isotopes"
        },
        {
            "TL": 29,
            "Desc": "Organic chemicals"
        },
        {
            "TL": 30,
            "Desc": "Pharmaceutical products"
        },
        {
            "TL": 31,
            "Desc": "Fertilisers"
        },
        {
            "TL": 32,
            "Desc": "Tanning or dyeing extracts; tannins and their derivatives; dyes, pigments and other\n      colouring matter; paints and varnishes; putty and other mastics; inks"
        },
        {
            "TL": 33,
            "Desc": "Essential oils and resinoids; perfumery, cosmetic or toilet preparations"
        },
        {
            "TL": 34,
            "Desc": "Soap, organic surface-active agents, washing preparations, lubricating preparations,\n      artificial waxes, prepared waxes, polishing or scouring preparations, candles and similar\n      articles, modelling pastes, \"dental waxes\" and dental preparations with a basis of plaster"
        },
        {
            "TL": 35,
            "Desc": "Albuminoidal substances; modified starches; glues; enzymes"
        },
        {
            "TL": 36,
            "Desc": "Explosives; pyrotechnic products; matches; pyrophoric alloys; certain combustible\n      preparations"
        },
        {
            "TL": 37,
            "Desc": "Photographic or cinematographic goods"
        },
        {
            "TL": 38,
            "Desc": "Miscellaneous chemical products"
        },
        {
            "TL": 39,
            "Desc": "Plastics and articles thereof"
        },
        {
            "TL": 40,
            "Desc": "Rubber and articles thereof"
        },
        {
            "TL": 41,
            "Desc": "Raw hides and skins (other than furskins) and leather"
        },
        {
            "TL": 42,
            "Desc": "Articles of leather; saddlery and harness; travel goods, handbags and similar containers;\n      articles of animal gut (other than silk- worm gut)"
        },
        {
            "TL": 43,
            "Desc": "Furskins and artificial fur; manufactures thereof"
        },
        {
            "TL": 44,
            "Desc": "Wood and articles of wood; wood charcoal"
        },
        {
            "TL": 45,
            "Desc": "Cork and articles of cork"
        },
        {
            "TL": 46,
            "Desc": "Manufactures of straw, of esparto or of other plaiting materials; basketware and\n      wickerwork"
        },
        {
            "TL": 47,
            "Desc": "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper\n      and paperboard"
        },
        {
            "TL": 48,
            "Desc": "Paper and paperboard; articles of paper pulp, of paper or of paperboard"
        },
        {
            "TL": 49,
            "Desc": "Printed books, newspapers, pictures and other products of the printing industry;\n      manuscripts, typescripts and plans"
        },
        {
            "TL": 50,
            "Desc": "Silk"
        },
        {
            "TL": 51,
            "Desc": "Wool, fine or coarse animal hair; horsehair yarn and woven fabric"
        },
        {
            "TL": 52,
            "Desc": "Cotton"
        },
        {
            "TL": 53,
            "Desc": "Other vegetable textile fibres; paper yarn and woven fabrics of paper yarn"
        },
        {
            "TL": 54,
            "Desc": "Man-made filaments"
        },
        {
            "TL": 55,
            "Desc": "Man-made staple fibres"
        },
        {
            "TL": 56,
            "Desc": "Wadding, felt and nonwovens; special yarns; twine, cordage, ropes and cables and articles\n      thereof"
        },
        {
            "TL": 57,
            "Desc": "Carpets and other textile floor coverings"
        },
        {
            "TL": 58,
            "Desc": "Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery"
        },
        {
            "TL": 59,
            "Desc": "Impregnated, coated, covered or laminated textile fabrics; textile articles of a kind\n      suitable for industrial use"
        },
        {
            "TL": 60,
            "Desc": "Knitted or crocheted fabrics"
        },
        {
            "TL": 61,
            "Desc": "Articles of apparel and clothing accessories, knitted or crocheted"
        },
        {
            "TL": 62,
            "Desc": "Articles of apparel and clothing accessories, not knitted or crocheted"
        },
        {
            "TL": 63,
            "Desc": "Other made up textile articles; sets; worn clothing and worn textile articles; rags"
        },
        {
            "TL": 64,
            "Desc": "Footwear, gaiters and the like; parts of such articles"
        },
        {
            "TL": 65,
            "Desc": "Headgear and parts thereof"
        },
        {
            "TL": 66,
            "Desc": "Umbrellas, sun umbrellas, walking- sticks, seat- sticks, whips, riding- crops and parts\n      thereof"
        },
        {
            "TL": 67,
            "Desc": "Prepared feathers and down and articles made of feathers or of down; artificial flowers;\n      articles of human hair"
        },
        {
            "TL": 68,
            "Desc": "Articles of stone, plaster, cement, asbestos, mica or similar materials"
        },
        {
            "TL": 69,
            "Desc": "Ceramic products"
        },
        {
            "TL": 70,
            "Desc": "Glass and glassware"
        },
        {
            "TL": 71,
            "Desc": "Natural or cultured pearls, precious or semi- precious stones, precious metals, metals\n      clad with precious metal, and articles thereof; imitation jewellery; coin"
        },
        {
            "TL": 72,
            "Desc": "Iron and steel"
        },
        {
            "TL": 73,
            "Desc": "Articles of iron or steel"
        },
        {
            "TL": 74,
            "Desc": "Copper and articles thereof"
        },
        {
            "TL": 75,
            "Desc": "Nickel and articles thereof"
        },
        {
            "TL": 76,
            "Desc": "Aluminium and articles thereof"
        },
        {
            "TL": 78,
            "Desc": "Lead and articles thereof"
        },
        {
            "TL": 79,
            "Desc": "Zinc and articles thereof"
        },
        {
            "TL": 80,
            "Desc": "Tin and articles thereof"
        },
        {
            "TL": 81,
            "Desc": "Other base metals; cermets; articles thereof"
        },
        {
            "TL": 82,
            "Desc": "Tools, implements, cutlery, spoons and forks, of base metal; parts thereof of base metal"
        },
        {
            "TL": 83,
            "Desc": "Miscellaneous articles of base metal"
        },
        {
            "TL": 84,
            "Desc": "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof"
        },
        {
            "TL": 85,
            "Desc": "Electrical machinery and equipment and parts thereof; sound recorders and reproducers,\n      television image and sound recorders and reproducers, and parts and accessories of such\n      articles"
        },
        {
            "TL": 86,
            "Desc": "Railway or tramway locomotives, rolling- stock and parts thereof; railway or tramway track\n      fixtures and fittings and parts thereof; mechanical (including electro- mechanical) traffic\n      signalling equipment of all kinds"
        },
        {
            "TL": 87,
            "Desc": "Vehicles other than railway or tramway rolling- stock, and parts and accessories thereof"
        },
        {
            "TL": 88,
            "Desc": "Aircraft, spacecraft, and parts thereof"
        },
        {
            "TL": 89,
            "Desc": "Ships, boats and floating structures"
        },
        {
            "TL": 90,
            "Desc": "Optical, photographic, cinematographic, measuring, checking, precision, medical or\n      surgical instruments and apparatus; parts and accessories thereof"
        },
        {
            "TL": 91,
            "Desc": "Clocks and watches and parts thereof"
        },
        {
            "TL": 92,
            "Desc": "Musical instruments; parts and accessories of such articles"
        },
        {
            "TL": 93,
            "Desc": "Arms and ammunition; parts and accessories thereof"
        },
        {
            "TL": 94,
            "Desc": "Furniture; bedding, mattresses, mattress supports, cushions and similar stuffed\n      furnishings; lamps and lighting fittings, not elsewhere specified or included; illuminated\n      signs, illuminated name- plates and the like; prefabricated buildings"
        },
        {
            "TL": 95,
            "Desc": "Toys, games and sports requisites; parts and accessories thereof"
        },
        {
            "TL": 96,
            "Desc": "Miscellaneous manufactured articles"
        },
        {
            "TL": 97,
            "Desc": "Works of art, collectors' pieces and antiques"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("inputProductDescription");

    // Iterate through the JSON data and create options
    jsonData.ProductList.forEach(product => {
        const option = document.createElement("option");
        option.value = product.TL; // Set the value of the option
        option.text = product.Desc; // Set the text of the option
        selectElement.appendChild(option); // Append the option to the select element
    });
});
