document.addEventListener('DOMContentLoaded', () => {
    const worldPopulationCounter = document.getElementById('worldPopulationCounter');
    const countriesList = document.getElementById('countriesList');

    // População inicial estimada
    let initialWorldPopulation = localStorage.getItem('currentWorldPopulation') || 8279092156;
    initialWorldPopulation = parseInt(initialWorldPopulation, 10);
    
    // Taxa de nascimento global aproximada: 4,3 nascimentos por segundo
    const worldBirthRate = 4.3;
    
    // Tempo inicial (marca temporal de quando a contagem começou)
    const worldStartTime = localStorage.getItem('worldStartTime') || new Date().getTime();
    localStorage.setItem('worldStartTime', worldStartTime);
    
    function updateWorldCounter() {
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - worldStartTime) / 1000; // Tempo em segundos
        const births = Math.floor(elapsedTime * worldBirthRate);
        const currentWorldPopulation = initialWorldPopulation + births;
        localStorage.setItem('currentWorldPopulation', currentWorldPopulation);
        worldPopulationCounter.textContent = currentWorldPopulation.toLocaleString();
    }
    
    // Atualiza o contador a cada segundo
    setInterval(updateWorldCounter, 1000);
    
    // Dados de países, capitais e populações com taxa de nascimento específica
    const countriesData = [
        { name: 'Afghanistan', capital: 'Kabul', population: 38928346, birthRate: 2.3 },
        { name: 'Albania', capital: 'Tirana', population: 2877797, birthRate: 1.6 },
        { name: 'Algeria', capital: 'Algiers', population: 43851044, birthRate: 2.8 },
        { name: 'Andorra', capital: 'Andorra la Vella', population: 77265, birthRate: 1.1 },
        { name: 'Angola', capital: 'Luanda', population: 25868000, birthRate: 4.4 },
        { name: 'Antigua and Barbuda', capital: 'Saint John\'s', population: 97929, birthRate: 2.2 },
        { name: 'Argentina', capital: 'Buenos Aires', population: 45195777, birthRate: 2.1 },
        { name: 'Armenia', capital: 'Yerevan', population: 2963243, birthRate: 1.4 },
        { name: 'Australia', capital: 'Canberra', population: 25687041, birthRate: 1.7 },
        { name: 'Austria', capital: 'Vienna', population: 8917205, birthRate: 1.5 },
        { name: 'Azerbaijan', capital: 'Baku', population: 10139177, birthRate: 2.0 },
        { name: 'Bahamas', capital: 'Nassau', population: 393248, birthRate: 1.8 },
        { name: 'Bahrain', capital: 'Manama', population: 1701583, birthRate: 2.6 },
        { name: 'Bangladesh', capital: 'Dhaka', population: 166303498, birthRate: 2.1 },
        { name: 'Barbados', capital: 'Bridgetown', population: 287025, birthRate: 1.8 },
        { name: 'Belarus', capital: 'Minsk', population: 9449323, birthRate: 1.2 },
        { name: 'Belgium', capital: 'Brussels', population: 11589623, birthRate: 1.7 },
        { name: 'Belize', capital: 'Belmopan', population: 397621, birthRate: 2.6 },
        { name: 'Benin', capital: 'Porto-Novo', population: 10653654, birthRate: 4.0 },
        { name: 'Bhutan', capital: 'Thimphu', population: 771608, birthRate: 2.4 },
        { name: 'Bolivia', capital: 'Sucre', population: 11673029, birthRate: 2.8 },
        { name: 'Bosnia and Herzegovina', capital: 'Sarajevo', population: 3280819, birthRate: 1.2 },
        { name: 'Botswana', capital: 'Gaborone', population: 2141206, birthRate: 2.6 },
        { name: 'Brazil', capital: 'Brasília', population: 213993437, birthRate: 1.6 },
        { name: 'Brunei', capital: 'Bandar Seri Begawan', population: 437483, birthRate: 1.9 },
        { name: 'Bulgaria', capital: 'Sofia', population: 6951482, birthRate: 1.5 },
        { name: 'Burkina Faso', capital: 'Ouagadougou', population: 19034397, birthRate: 4.6 },
        { name: 'Burundi', capital: 'Gitega', population: 10114505, birthRate: 4.7 },
        { name: 'Cabo Verde', capital: 'Praia', population: 531239, birthRate: 2.1 },
        { name: 'Cambodia', capital: 'Phnom Penh', population: 16718971, birthRate: 2.8 },
        { name: 'Cameroon', capital: 'Yaoundé', population: 22709892, birthRate: 4.0 },
        { name: 'Canada', capital: 'Ottawa', population: 38005238, birthRate: 1.5 },
        { name: 'Central African Republic', capital: 'Bangui', population: 4998000, birthRate: 4.8 },
        { name: 'Chad', capital: 'N\'Djamena', population: 14497000, birthRate: 4.8 },
        { name: 'Chile', capital: 'Santiago', population: 19116209, birthRate: 1.8 },
        { name: 'China', capital: 'Beijing', population: 1444216107, birthRate: 1.3 },
        { name: 'Colombia', capital: 'Bogotá', population: 50882891, birthRate: 2.4 },
        { name: 'Comoros', capital: 'Moroni', population: 806153, birthRate: 3.8 },
        { name: 'Congo, Democratic Republic of the', capital: 'Kinshasa', population: 85026000, birthRate: 5.4 },
        { name: 'Congo, Republic of the', capital: 'Brazzaville', population: 4741000, birthRate: 4.0 },
        { name: 'Costa Rica', capital: 'San José', population: 5094114, birthRate: 2.1 },
        { name: 'Croatia', capital: 'Zagreb', population: 4105267, birthRate: 1.4 },
        { name: 'Cuba', capital: 'Havana', population: 11326616, birthRate: 1.6 },
        { name: 'Cyprus', capital: 'Nicosia', population: 1207359, birthRate: 1.5 },
        { name: 'Czech Republic', capital: 'Prague', population: 10708981, birthRate: 1.8 },
        { name: 'Denmark', capital: 'Copenhagen', population: 5818553, birthRate: 1.7 },
        { name: 'Djibouti', capital: 'Djibouti', population: 900000, birthRate: 2.5 },
        { name: 'Dominica', capital: 'Roseau', population: 71986, birthRate: 2.1 },
        { name: 'Dominican Republic', capital: 'Santo Domingo', population: 10847904, birthRate: 2.5 },
        { name: 'East Timor', capital: 'Dili', population: 1330160, birthRate: 2.6 },
        { name: 'Ecuador', capital: 'Quito', population: 17643054, birthRate: 2.6 },
        { name: 'Egypt', capital: 'Cairo', population: 91250000, birthRate: 3.5 },
        { name: 'El Salvador', capital: 'San Salvador', population: 6486201, birthRate: 2.2 },
        { name: 'Equatorial Guinea', capital: 'Malabo', population: 1402985, birthRate: 4.3 },
        { name: 'Eritrea', capital: 'Asmara', population: 3546064, birthRate: 4.5 },
        { name: 'Estonia', capital: 'Tallinn', population: 1326535, birthRate: 1.6 },
        { name: 'Eswatini', capital: 'Mbabane', population: 1160164, birthRate: 2.7 },
        { name: 'Ethiopia', capital: 'Addis Ababa', population: 114963588, birthRate: 4.0 },
        { name: 'Fiji', capital: 'Suva', population: 896444, birthRate: 2.2 },
        { name: 'Finland', capital: 'Helsinki', population: 5540720, birthRate: 1.4 },
        { name: 'France', capital: 'Paris', population: 65273511, birthRate: 1.8 },
        { name: 'Gabon', capital: 'Libreville', population: 2225734, birthRate: 3.7 },
        { name: 'Gambia', capital: 'Banjul', population: 2416668, birthRate: 4.5 },
        { name: 'Georgia', capital: 'Tbilisi', population: 3989167, birthRate: 1.6 },
        { name: 'Germany', capital: 'Berlin', population: 83783942, birthRate: 1.5 },
        { name: 'Ghana', capital: 'Accra', population: 31072940, birthRate: 3.2 },
        { name: 'Greece', capital: 'Athens', population: 10423054, birthRate: 1.3 },
        { name: 'Grenada', capital: 'Saint George\'s', population: 112519, birthRate: 2.0 },
        { name: 'Guatemala', capital: 'Guatemala City', population: 17915568, birthRate: 3.2 },
        { name: 'Guinea', capital: 'Conakry', population: 12935000, birthRate: 4.6 },
        { name: 'Guinea-Bissau', capital: 'Bissau', population: 1968001, birthRate: 4.8 },
        { name: 'Guyana', capital: 'Georgetown', population: 786559, birthRate: 2.3 },
        { name: 'Haiti', capital: 'Port-au-Prince', population: 11402533, birthRate: 3.7 },
        { name: 'Honduras', capital: 'Tegucigalpa', population: 9904608, birthRate: 3.0 },
        { name: 'Hungary', capital: 'Budapest', population: 9660351, birthRate: 1.6 },
        { name: 'Iceland', capital: 'Reykjavik', population: 343599, birthRate: 1.9 },
        { name: 'India', capital: 'New Delhi', population: 1393409038, birthRate: 2.2 },
        { name: 'Indonesia', capital: 'Jakarta', population: 276361783, birthRate: 1.8 },
        { name: 'Iran', capital: 'Tehran', population: 83992949, birthRate: 2.1 },
        { name: 'Iraq', capital: 'Baghdad', population: 40222493, birthRate: 3.6 },
        { name: 'Ireland', capital: 'Dublin', population: 4937786, birthRate: 1.8 },
        { name: 'Israel', capital: 'Jerusalem', population: 8655535, birthRate: 3.1 },
        { name: 'Italy', capital: 'Rome', population: 60244691, birthRate: 1.3 },
        { name: 'Jamaica', capital: 'Kingston', population: 2961167, birthRate: 2.1 },
        { name: 'Japan', capital: 'Tokyo', population: 126476461, birthRate: 1.4 },
        { name: 'Jordan', capital: 'Amman', population: 10203140, birthRate: 2.9 },
        { name: 'Kazakhstan', capital: 'Nur-Sultan', population: 18776707, birthRate: 2.4 },
        { name: 'Kenya', capital: 'Nairobi', population: 53771296, birthRate: 3.6 },
        { name: 'Kiribati', capital: 'Tarawa', population: 119446, birthRate: 2.6 },
        { name: 'Korea, North', capital: 'Pyongyang', population: 25778915, birthRate: 2.0 },
        { name: 'Korea, South', capital: 'Seoul', population: 51780579, birthRate: 1.0 },
        { name: 'Kosovo', capital: 'Pristina', population: 1831000, birthRate: 1.5 },
        { name: 'Kuwait', capital: 'Kuwait City', population: 4270563, birthRate: 2.2 },
        { name: 'Kyrgyzstan', capital: 'Bishkek', population: 6524197, birthRate: 3.0 },
        { name: 'Laos', capital: 'Vientiane', population: 7275560, birthRate: 2.8 },
        { name: 'Latvia', capital: 'Riga', population: 1886198, birthRate: 1.6 },
        { name: 'Lebanon', capital: 'Beirut', population: 6825445, birthRate: 1.9 },
        { name: 'Lesotho', capital: 'Maseru', population: 2142249, birthRate: 3.2 },
        { name: 'Liberia', capital: 'Monrovia', population: 5057681, birthRate: 4.6 },
        { name: 'Libya', capital: 'Tripoli', population: 6871292, birthRate: 2.8 },
        { name: 'Liechtenstein', capital: 'Vaduz', population: 38128, birthRate: 1.4 },
        { name: 'Lithuania', capital: 'Vilnius', population: 2722289, birthRate: 1.6 },
        { name: 'Luxembourg', capital: 'Luxembourg City', population: 634814, birthRate: 1.7 },
        { name: 'Madagascar', capital: 'Antananarivo', population: 27691018, birthRate: 4.0 },
        { name: 'Malawi', capital: 'Lilongwe', population: 19129952, birthRate: 4.2 },
        { name: 'Malaysia', capital: 'Kuala Lumpur', population: 32365999, birthRate: 1.9 },
        { name: 'Maldives', capital: 'Malé', population: 521021, birthRate: 2.9 },
        { name: 'Mali', capital: 'Bamako', population: 20250833, birthRate: 5.2 },
        { name: 'Malta', capital: 'Valletta', population: 514999, birthRate: 1.5 },
        { name: 'Marshall Islands', capital: 'Majuro', population: 59194, birthRate: 2.3 },
        { name: 'Mauritania', capital: 'Nouakchott', population: 4649658, birthRate: 3.8 },
        { name: 'Mauritius', capital: 'Port Louis', population: 1271768, birthRate: 1.8 },
        { name: 'Mexico', capital: 'Mexico City', population: 130262216, birthRate: 1.9 },
        { name: 'Micronesia', capital: 'Palikir', population: 115021, birthRate: 2.1 },
        { name: 'Moldova', capital: 'Chișinău', population: 2657637, birthRate: 1.5 },
        { name: 'Monaco', capital: 'Monaco', population: 39242, birthRate: 1.1 },
        { name: 'Mongolia', capital: 'Ulaanbaatar', population: 3278298, birthRate: 2.1 },
        { name: 'Montenegro', capital: 'Podgorica', population: 622209, birthRate: 1.7 },
        { name: 'Morocco', capital: 'Rabat', population: 36910560, birthRate: 2.7 },
        { name: 'Mozambique', capital: 'Maputo', population: 31255435, birthRate: 4.6 },
        { name: 'Myanmar', capital: 'Naypyidaw', population: 54409794, birthRate: 2.9 },
        { name: 'Namibia', capital: 'Windhoek', population: 2540905, birthRate: 2.6 },
        { name: 'Nauru', capital: 'Yaren', population: 10834, birthRate: 2.5 },
        { name: 'Nepal', capital: 'Kathmandu', population: 29136808, birthRate: 2.1 },
        { name: 'Netherlands', capital: 'Amsterdam', population: 17134872, birthRate: 1.7 },
        { name: 'New Zealand', capital: 'Wellington', population: 5084351, birthRate: 1.9 },
        { name: 'Nicaragua', capital: 'Managua', population: 6624554, birthRate: 2.6 },
        { name: 'Niger', capital: 'Niamey', population: 24206644, birthRate: 6.4 },
        { name: 'Nigeria', capital: 'Abuja', population: 211400708, birthRate: 3.6 },
        { name: 'North Macedonia', capital: 'Skopje', population: 2083459, birthRate: 1.6 },
        { name: 'Norway', capital: 'Oslo', population: 5421241, birthRate: 1.8 },
        { name: 'Oman', capital: 'Muscat', population: 5106626, birthRate: 3.0 },
        { name: 'Pakistan', capital: 'Islamabad', population: 225199937, birthRate: 3.5 },
        { name: 'Palau', capital: 'Ngerulmud', population: 18008, birthRate: 2.6 },
        { name: 'Panama', capital: 'Panama City', population: 4314768, birthRate: 2.4 },
        { name: 'Papua New Guinea', capital: 'Port Moresby', population: 8947020, birthRate: 2.7 },
        { name: 'Paraguay', capital: 'Asunción', population: 7132536, birthRate: 2.6 },
        { name: 'Peru', capital: 'Lima', population: 32971854, birthRate: 2.8 },
        { name: 'Philippines', capital: 'Manila', population: 113237000, birthRate: 2.5 },
        { name: 'Poland', capital: 'Warsaw', population: 38386000, birthRate: 1.4 },
        { name: 'Portugal', capital: 'Lisbon', population: 10196709, birthRate: 1.3 },
        { name: 'Qatar', capital: 'Doha', population: 288105, birthRate: 2.2 },
        { name: 'Romania', capital: 'Bucharest', population: 19237691, birthRate: 1.6 },
        { name: 'Russia', capital: 'Moscow', population: 145912025, birthRate: 1.6 },
        { name: 'Rwanda', capital: 'Kigali', population: 12952218, birthRate: 3.8 },
        { name: 'Saint Kitts and Nevis', capital: 'Basseterre', population: 53192, birthRate: 2.1 },
        { name: 'Saint Lucia', capital: 'Castries', population: 183627, birthRate: 2.4 },
        { name: 'Saint Vincent and the Grenadines', capital: 'Kingstown', population: 110947, birthRate: 2.1 },
        { name: 'Samoa', capital: 'Apia', population: 198410, birthRate: 2.3 },
        { name: 'San Marino', capital: 'San Marino', population: 33931, birthRate: 1.2 },
        { name: 'Sao Tome and Principe', capital: 'São Tomé', population: 219159, birthRate: 3.3 },
        { name: 'Saudi Arabia', capital: 'Riyadh', population: 34813871, birthRate: 2.8 },
        { name: 'Senegal', capital: 'Dakar', population: 16425864, birthRate: 4.0 },
        { name: 'Serbia', capital: 'Belgrade', population: 8775000, birthRate: 1.5 },
        { name: 'Seychelles', capital: 'Victoria', population: 98347, birthRate: 2.0 },
        { name: 'Sierra Leone', capital: 'Freetown', population: 7976983, birthRate: 4.5 },
        { name: 'Singapore', capital: 'Singapore', population: 5850342, birthRate: 1.1 },
        { name: 'Slovakia', capital: 'Bratislava', population: 5456362, birthRate: 1.7 },
        { name: 'Slovenia', capital: 'Ljubljana', population: 2078654, birthRate: 1.5 },
        { name: 'Solomon Islands', capital: 'Honiara', population: 686878, birthRate: 2.9 },
        { name: 'Somalia', capital: 'Mogadishu', population: 15893222, birthRate: 6.2 },
        { name: 'South Africa', capital: 'Pretoria', population: 59308690, birthRate: 2.8 },
        { name: 'South Sudan', capital: 'Juba', population: 10975970, birthRate: 5.3 },
        { name: 'Spain', capital: 'Madrid', population: 46754778, birthRate: 1.4 },
        { name: 'Sri Lanka', capital: 'Sri Jayawardenepura Kotte', population: 21413249, birthRate: 2.2 },
        { name: 'Sudan', capital: 'Khartoum', population: 43849260, birthRate: 4.0 },
        { name: 'Suriname', capital: 'Paramaribo', population: 618040, birthRate: 2.3 },
        { name: 'Sweden', capital: 'Stockholm', population: 83783942, birthRate: 1.8 },
        { name: 'Switzerland', capital: 'Bern', population: 8654622, birthRate: 1.5 },
        { name: 'Syria', capital: 'Damascus', population: 17070000, birthRate: 3.6 },
        { name: 'Taiwan', capital: 'Taipei', population: 23816775, birthRate: 1.2 },
        { name: 'Tajikistan', capital: 'Dushanbe', population: 9537645, birthRate: 3.1 },
        { name: 'Tanzania', capital: 'Dodoma', population: 59781000, birthRate: 4.7 },
        { name: 'Thailand', capital: 'Bangkok', population: 69799978, birthRate: 1.5 },
        { name: 'Togo', capital: 'Lomé', population: 8278724, birthRate: 4.0 },
        { name: 'Tonga', capital: 'Nukuʻalofa', population: 105697, birthRate: 2.1 },
        { name: 'Trinidad and Tobago', capital: 'Port of Spain', population: 1399491, birthRate: 1.5 },
        { name: 'Tunisia', capital: 'Tunis', population: 11818619, birthRate: 2.1 },
        { name: 'Turkey', capital: 'Ankara', population: 84339067, birthRate: 2.0 },
        { name: 'Turkmenistan', capital: 'Ashgabat', population: 6066665, birthRate: 2.8 },
        { name: 'Tuvalu', capital: 'Funafuti', population: 11794, birthRate: 2.4 },
        { name: 'Uganda', capital: 'Kampala', population: 45741007, birthRate: 4.9 },
        { name: 'Ukraine', capital: 'Kyiv', population: 41670800, birthRate: 1.2 },
        { name: 'United Arab Emirates', capital: 'Abu Dhabi', population: 9890402, birthRate: 2.6 },
        { name: 'United Kingdom', capital: 'London', population: 67886011, birthRate: 1.6 },
        { name: 'United States', capital: 'Washington, D.C.', population: 331002651, birthRate: 1.7 },
        { name: 'Uruguay', capital: 'Montevideo', population: 3473730, birthRate: 1.9 },
        { name: 'Uzbekistan', capital: 'Tashkent', population: 33406900, birthRate: 2.6 },
        { name: 'Vanuatu', capital: 'Port Vila', population: 307145, birthRate: 2.6 },
        { name: 'Vatican City', capital: 'Vatican City', population: 800, birthRate: 1.0 },
        { name: 'Venezuela', capital: 'Caracas', population: 28435943, birthRate: 2.6 },
        { name: 'Vietnam', capital: 'Hanoi', population: 97338583, birthRate: 2.0 },
        { name: 'Yemen', capital: 'Sana\'a', population: 29825968, birthRate: 4.4 },
        { name: 'Zambia', capital: 'Lusaka', population: 18383956, birthRate: 4.7 },
        { name: 'Zimbabwe', capital: 'Harare', population: 14862924, birthRate: 3.7 }
    ];
    
    
    function createCountryCounter(country) {
        const countryElement = document.createElement('div');
        countryElement.classList.add('country');
        
        const countryName = document.createElement('div');
        countryName.classList.add('country-name');
        countryName.textContent = country.name;
        
        const capitalName = document.createElement('div');
        capitalName.classList.add('capital-name');
        capitalName.textContent = `Capital: ${country.capital}`;
        
        const population = document.createElement('div');
        population.classList.add('population');
        population.textContent = `Population: ${country.population.toLocaleString()}`;
        population.id = `population-${country.name}`;
        
        countryElement.appendChild(countryName);
        countryElement.appendChild(capitalName);
        countryElement.appendChild(population);
        
        countriesList.appendChild(countryElement);
        
        // Função para atualizar o contador da população do país
        function updateCountryCounter() {
            const currentTime = new Date().getTime();
            const elapsedTime = (currentTime - worldStartTime) / 1000; // Tempo em segundos
            const births = Math.floor(elapsedTime * country.birthRate);
            const currentPopulation = country.population + births;
            population.textContent = `Population: ${currentPopulation.toLocaleString()}`;
        }
        
        // Atualiza o contador do país a cada segundo
        setInterval(updateCountryCounter, 1000);
    }
    
    // Renderiza os países ao carregar a página
    countriesData.forEach(country => {
        createCountryCounter(country);
    });
});
