// script.js
const jsonData = {
    "ProductList": [
        {
            "TL": 6,
            "Desc": "Živá zvířata"
        },
        {
            "TL": 2,
            "Desc": "Maso a jedlé masné odpady"
        },
        {
            "TL": 3,
            "Desc": "Ryby a korýši, měkkýši a další vodní bezobratlí"
        },
        {
            "TL": 9,
            "Desc": "Mléčné výrobky; kuřecí vejce; přírodní med; jedlé výrobky živočišného původu, nezařazené"
        },
        {
            "TL": 10,
            "Desc": "Výrobky živočišného původu, nezařazené"
        },
        {
            "TL": 9,
            "Desc": "Živé stromy a jiné rostliny; cibule, kořeny a podobné; řezané květiny a okrasné listy"
        },
        {
            "TL": 7,
            "Desc": "Jedlé rostliny a některé kořeny a hlízy"
        },
        {
            "TL": 4,
            "Desc": "Jedlé ovoce a ořechy; kůra z citrusových plodů nebo melounů"
        },
        {
            "TL": 8,
            "Desc": "Káva, čaj, mate a koření"
        },
        {
            "TL": 6,
            "Desc": "Obiloviny"
        },
        {
            "TL": 6,
            "Desc": "Výrobky mlýnského průmyslu; slad; škroby; inulin; pšeničný lepek"
        },
        {
            "TL": 10,
            "Desc": "Olejnatá semena a ořechovité plody; různá zrna, semena a ovoce; průmyslové nebo léčivé rostliny; sláma a krmivo"
        },
        {
            "TL": 9,
            "Desc": "Lák; pryskyřice a jiné rostlinné šťávy a extrakty"
        },
        {
            "TL": 4,
            "Desc": "Plátno z rostlinných materiálů; rostlinné výrobky, nezařazené"
        },
        {
            "TL": 3,
            "Desc": "Živočišné nebo rostlinné tuky a oleje a jejich štěpné produkty; připravené jedlé tuky; živočišné nebo rostlinné vosky"
        },
        {
            "TL": 3,
            "Desc": "Přípravky z masa, ryb nebo korýšů, měkkýšů nebo jiných vodních bezobratlých"
        },
        {
            "TL": 1,
            "Desc": "Cukry a cukrovinky"
        },
        {
            "TL": 5,
            "Desc": "Kakao a přípravky z kakaa"
        },
        {
            "TL": 4,
            "Desc": "Přípravky z obilovin, mouky, škrobu nebo mléka; výrobky pekařů"
        },
        {
            "TL": 7,
            "Desc": "Přípravky z ovoce, zeleniny, ořechů nebo jiných částí rostlin"
        },
        {
            "TL": 8,
            "Desc": "Různé jedlé přípravky"
        },
        {
            "TL": 10,
            "Desc": "Nápoje, destiláty a ocet"
        },
        {
            "TL": 10,
            "Desc": "Odpady a zbytky z potravinářského průmyslu; připravené krmivo pro zvířata"
        },
        {
            "TL": 8,
            "Desc": "Tabák a náhražky tabáku"
        },
        {
            "TL": 2,
            "Desc": "Sůl; síra; země a kámen; sádrové materiály, vápno a cement"
        },
        {
            "TL": 2,
            "Desc": "Rudy, struska a popel"
        },
        {
            "TL": 3,
            "Desc": "Minerální paliva, minerální oleje a produkty jejich destilace; ropné látky; minerální vosky"
        },
        {
            "TL": 3,
            "Desc": "Anorganické chemikálie; organické nebo anorganické sloučeniny drahých kovů, vzácných zemin, radioaktivních prvků nebo izotopů"
        },
        {
            "TL": 3,
            "Desc": "Organické chemikálie"
        },
        {
            "TL": 4,
            "Desc": "Farmaceutické výrobky"
        },
        {
            "TL": 4,
            "Desc": "Hnojiva"
        },
        {
            "TL": 3,
            "Desc": "Oděrné nebo barvící extrakty; taniny a jejich deriváty; barviva, pigmenty a jiné barvící látky; barvy a laky; tmely a jiné lepidla; inkousty"
        },
        {
            "TL": 9,
            "Desc": "Éterické oleje a rezinoidy; parfémy, kosmetické nebo toaletní přípravky"
        },
        {
            "TL": 3,
            "Desc": "Mýdla, organické povrchově aktivní látky, čisticí přípravky, mazací přípravky, umělé vosky, připravené vosky, leštidla nebo čisticí přípravky; svíčky a podobné výrobky; modelovací pasty, dentální vosky a dentální přípravky na bázi sádry"
        },
        {
            "TL": 6,
            "Desc": "Albuminoidní látky; modifikované škroby; lepidla; enzymy"
        },
        {
            "TL": 3,
            "Desc": "Výbušniny; pyrotechnické výrobky; zápalky; pyroforické slitiny; určité hořlavé přípravky"
        },
        {
            "TL": 6,
            "Desc": "Fotografické nebo filmové zboží"
        },
        {
            "TL": 6,
            "Desc": "Různé chemické výrobky"
        },
        {
            "TL": 9,
            "Desc": "Plasty a výrobky z nich"
        },
        {
            "TL": 5,
            "Desc": "Kaučuk a výrobky z něj"
        },
        {
            "TL": 9,
            "Desc": "Syrové kůže a kůže (kromě kožešin) a kůže"
        },
        {
            "TL": 10,
            "Desc": "Výrobky z kůže; sedlářství a postroje; cestovní zavazadla, kabelky a podobné kontejnery; výrobky ze střev zvířat (kromě hedvábných střev)"
        },
        {
            "TL": 2,
            "Desc": "Kožešiny a umělá kožešina; výrobky z nich"
        },
        {
            "TL": 10,
            "Desc": "Dřevo a výrobky z něj; dřevěné dřevěné uhlí"
        },
        {
            "TL": 7,
            "Desc": "Kork a výrobky z korku"
        },
        {
            "TL": 4,
            "Desc": "Výrobky ze slámy, esparta nebo jiných pletivých materiálů; košíky a pletené výrobky"
        },
        {
            "TL": 5,
            "Desc": "Buničina nebo jiný vláknitý celulózový materiál; recyklovaný (odpad a drť) papír a lepenka"
        },
        {
            "TL": 9,
            "Desc": "Papír a lepenka; výrobky z papírové buničiny, papíru nebo lepenky"
        },
        {
            "TL": 5,
            "Desc": "Tištěné knihy, noviny, obrázky a jiné výrobky tiskárenského průmyslu; rukopisy, přepisy a plány"
        },
        {
            "TL": 7,
            "Desc": "Hedvábí"
        },
        {
            "TL": 2,
            "Desc": "Vlna, jemná nebo hrubá živočišná srst; konopné příze a tkaniny"
        },
        {
            "TL": 1,
            "Desc": "Bavlna"
        },
        {
            "TL": 6,
            "Desc": "Jiné rostlinné textilní vlákna; papírová příze a tkaniny z papírové příze"
        },
        {
            "TL": 1,
            "Desc": "Umělé filamenty"
        },
        {
            "TL": 9,
            "Desc": "Umělé staplíkové vlákna"
        },
        {
            "TL": 1,
            "Desc": "Plst, filc a netkané textilie; speciální příze; lanka, šňůry, provazy a kabely a výrobky z nich"
        },
        {
            "TL": 1,
            "Desc": "Koberce a jiné textilní podlahové krytiny"
        },
        {
            "TL": 8,
            "Desc": "Speciální tkaniny; tuftované textilní tkaniny; krajky; gobelíny; ozdoby"
        },
        {
            "TL": 8,
            "Desc": "Impregnované, pokryté, potažené nebo laminované textilní tkaniny; textilní výrobky vhodné pro průmyslové použití"
        },
        {
            "TL": 8,
            "Desc": "Pletené nebo háčkované tkaniny"
        },
        {
            "TL": 10,
            "Desc": "Články oděvu a doplňky oděvu, pletené nebo háčkované"
        },
        {
            "TL": 7,
            "Desc": "Články oděvu a doplňky oděvu, nekvetené nebo háčkované"
        },
        {
            "TL": 8,
            "Desc": "Ostatní konfekční výrobky; soupravy; opotřebované oděvy a opotřebované textilní výrobky; hadry"
        },
        {
            "TL": 5,
            "Desc": "Obuv, nákrčníky a podobné; části těchto článků"
        },
        {
            "TL": 10,
            "Desc": "Pokrývky hlavy a jejich části"
        },
        {
            "TL": 9,
            "Desc": "Deštníky, sluneční deštníky, hole, hůlky, sedací hůlky, bičky, jízdní pruty a jejich části"
        },
        {
            "TL": 5,
            "Desc": "Připravené peří a duše a výrobky z peří nebo duše; umělé květiny; výrobky z lidských vlasů"
        },
        {
            "TL": 8,
            "Desc": "Články ze dřeva, sádry, cementu, azbestu, mica nebo podobných materiálů"
        },
        {
            "TL": 4,
            "Desc": "Keramické výrobky"
        },
        {
            "TL": 10,
            "Desc": "Sklo a skleněné výrobky"
        },
        {
            "TL": 7,
            "Desc": "Přírodní nebo kultivované perly, drahé nebo polodrahé kameny, drahé kovy, kovy oplechované drahým kovem a výrobky z nich; imitace šperků; mince"
        },
        {
            "TL": 3,
            "Desc": "Železo a ocel"
        },
        {
            "TL": 9,
            "Desc": "Články z železa nebo oceli"
        },
        {
            "TL": 3,
            "Desc": "Měď a výrobky z ní"
        },
        {
            "TL": 5,
            "Desc": "Nikel a výrobky z něj"
        },
        {
            "TL": 8,
            "Desc": "Hliník a výrobky z něj"
        },
        {
            "TL": 8,
            "Desc": "Olovo a výrobky z něj"
        },
        {
            "TL": 4,
            "Desc": "Zinek a výrobky z něj"
        },
        {
            "TL": 10,
            "Desc": "Cín a výrobky z něj"
        },
        {
            "TL": 4,
            "Desc": "Jiné neželezné kovy; kermety; články z těchto kovů"
        },
        {
            "TL": 5,
            "Desc": "Nástroje, nástroje, příbor, lžíce a vidličky z neželezných kovů; jejich části z neželezných kovů"
        },
        {
            "TL": 5,
            "Desc": "Různé výrobky z neželezných kovů"
        },
        {
            "TL": 10,
            "Desc": "Jaderné reaktory, kotle, stroje a mechanická zařízení; jejich části"
        },
        {
            "TL": 8,
            "Desc": "Elektrické stroje a zařízení a jejich části; záznamníky a reproduktory zvuku,\n      televizní obrazy a zvukoví záznamníky a reproduktory a části a příslušenství takových\n      výrobků"
        },
        {
            "TL": 3,
            "Desc": "Železniční nebo tramvajové lokomotivy, kolejová vozidla a jejich části;\n      kolejové nebo tramvajové pevnostní a montážní součásti a jejich části; mechanická\n      (včetně elektromechanické) signalizační zařízení všeho druhu"
        },
        {
            "TL": 1,
            "Desc": "Vozidla jiná než železniční nebo tramvajová; a jejich části a příslušenství"
        },
        {
            "TL": 5,
            "Desc": "Letadla, kosmické lodě a jejich části"
        },
        {
            "TL": 9,
            "Desc": "Lodě, čluny a plovoucí konstrukce"
        },
        {
            "TL": 4,
            "Desc": "Optické, fotografické, kinematografické, měřicí, kontrolní, přesné, lékařské nebo\n      chirurgické nástroje a přístroje; části a příslušenství těchto výrobků"
        },
        {
            "TL": 10,
            "Desc": "Hodiny a hodinky a jejich části"
        },
        {
            "TL": 9,
            "Desc": "Hudební nástroje; části a příslušenství takových výrobků"
        },
        {
            "TL": 4,
            "Desc": "Zbraně a střelivo; části a příslušenství takových výrobků"
        },
        {
            "TL": 6,
            "Desc": "Nábytek; lůžkoviny, matrace, matracové nosiče, polštáře a podobné plněné\n      zařízení; lampy a osvětlovací tělesa, jinde neuvedené nebo zahrnuté; osvětlené\n      značky, osvětlené jmenné desky a podobné; prefabrikované budovy"
        },
        {
            "TL": 2,
            "Desc": "Hračky, hry a sportovní potřeby; části a příslušenství takových výrobků"
        },
        {
            "TL": 3,
            "Desc": "Různé výrobky"
        },
        {
            "TL": 7,
            "Desc": "Díla umění, sběratelské kusy a starožitnosti"
        }
    ]
};


document.addEventListener("DOMContentLoaded", function () {
    const inputProductDescription = document.getElementById("inputProductDescription");
    // Iterate through the JSON data and create options
    jsonData.ProductList.forEach(product => {
        const option = document.createElement("option");
        option.value = product.TL; // Set the value of the option
        option.text = product.Desc; // Set the text of the option
        inputProductDescription.appendChild(option); // Append the option to the select element
    });

    const selectElement = document.getElementById("inputImportingFrom");
    const inputImportFromCurrency = document.getElementById("inputImportFromCurency");
    const currencies = new Set();
    fetch("https://restcountries.com/v3.1/all") //get all names
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Nepodařilo se nám získat data :(");
        })
        .then(countries => {
            // Sort countries alphabetically by name in ascending order
            countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
            // Iterate through the sorted list of countries and populate the <select> element
            countries.forEach(country => {
                // Check if the country has currency information
                if (country.currencies) {
                    // Iterate through the currencies of the current country
                    Object.keys(country.currencies).forEach(currencyCode => {
                        // Add the currency code to the uniqueCurrencies Set
                        currencies.add(currencyCode);
                    });
                }
                const option = document.createElement("option");
                option.value = country.name.official; // Set value as official name
                option.textContent = country.name.common; // Set the visible text
                selectElement.appendChild(option);
            });

            //sort uniqueCurrencies
            let sortedCurrencies = Array.from(currencies).sort();
            currencies.clear();
            sortedCurrencies.forEach(currency => {
                currencies.add(currency);
            });


            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.value = currency; // Set value as official name
                option.textContent = currency; // Set the visible text
                inputImportFromCurrency.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });


    // Add event listener for the "change" event on the <select> element
    selectElement.addEventListener("change", function (event) {
        let selectedValue = event.target.value;

        fetch(`https://restcountries.com/v3.1/name/${selectedValue}?fields=currencies`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Nepodařilo se nám získat data :(");
            })
            .then(data => {
                let currencyCode = Object.keys(data[0].currencies)[0];
                inputImportFromCurrency.value = currencyCode;
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })

    });
});

function onSubmitForm() {
    // Get the form element by its ID
    const importForm = document.getElementById('importForm');
    // Collect form data
    const formData = {
        importingFrom: document.getElementById('inputImportingFrom').value,
        importFromCurrency: document.getElementById('inputImportFromCurency').value,
        importingTo: document.getElementById('inputImportingTo').value,
        productDescription: document.getElementById('inputProductDescription').value,
        productValue: document.getElementById('inputProductValue').value,
        productQuantity: document.getElementById('inputProductQuantity').value,
        shippingCost: document.getElementById('inputShippingCost').value,
        insuranceCost: document.getElementById('inputInsuranceCost').value,
        gift: document.getElementById('inputGift').checked,
    };


    TODO: //Vypsat data a vypočítat cenu

    // If importFrom is Europe, than CLO = 0 
    // case (giftValue): 
    // 150: 10%
    // 200: 15% 

    getFinalVAT().then(finalVAT => {
        result = {
            Odkud: formData.importingFrom + " [" + formData.importFromCurrency + "]",
            Kam: formData.importingTo + " [CZK]",
            "Výše CLA": finalVAT + ",-[" + formData.importFromCurrency + "]",
            Dárek: formData.gift,
            "Celní sazba": formData.productDescription + "%"
        };
        // Display form data in the modal
        displayFormData(result);
    }).catch(error => {
        console.error("Error fetching data: ", error);
    });


    // Prevent form submission and page reload
    return false;
}

function displayFormData(formData) {
    // Set the modal content with the form data
    const formDataContent = document.getElementById('formDataContent');

    // Manually build a string representation of the form data
    let formDataString = "";
    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            formDataString += `${key}: ${formData[key]}\n`;
        }
    }

    // Display the form data without curly braces
    formDataContent.textContent = formDataString;

    // Show the modal
    const formDataModal = new bootstrap.Modal(document.getElementById('formDataModal'));
    formDataModal.show();
}



async function getFinalVAT() {
    let finalVAT = 0;
    let maxPrice = 150;
    // Collect form data
    const formData = {
        importingFrom: document.getElementById('inputImportingFrom').value,
        importFromCurrency: document.getElementById('inputImportFromCurency').value,
        importingTo: document.getElementById('inputImportingTo').value,
        productDescription: document.getElementById('inputProductDescription').value,
        productValue: document.getElementById('inputProductValue').value,
        productQuantity: document.getElementById('inputProductQuantity').value,
        shippingCost: document.getElementById('inputShippingCost').value,
        insuranceCost: document.getElementById('inputInsuranceCost').value,
        gift: document.getElementById('inputGift').checked,
    };

    try {
        const region = await getRegion(formData);
        if (JSON.parse(region) === "Europe") {
            return 0;
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
    }

    if (formData.gift) {
        maxPrice = 45;
    }
    if (formData.productValue < maxPrice) {
        finalVAT = 0;
    } else {
        finalVAT = formData.productValue * formData.productDescription / 100;
    }
    return finalVAT;
}

function getRegion(formData) {
    return fetch(`https://restcountries.com/v3.1/name/${formData.importingFrom}?fields=region`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Nepodařilo se nám získat data :(");
        })
        .then(data => {
            return JSON.stringify(data[0].region);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        })
}


