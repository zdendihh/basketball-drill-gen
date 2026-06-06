import type { Drill } from '../types';

export const DRILLS_CS: Drill[] = [
  {
    id: '1',
    name: 'Střelba na techniku',
    description: 'Zdokonalte svou mechaniku střelby pomocí velkého počtu opakování v blízkosti koše.',
    steps: [
      'Postavte se 1 metr od koše, přímo před něj.',
      'Držte míč pouze ve střílející ruce (zpočátku odstraňte vodící ruku).',
      'Soustřeďte se na tvar písmene „L“ v paži a míč spočívající na konečcích prstů.',
      'Vystřelte míč vysokým obloukem tak, aby čistě propadl košem.',
      'Držte střelecké zakončení (follow-through), dokud se míč nedotkne země.'
    ],
    tips: [
      'Váš loket by měl skončit nad úrovní očí.',
      'Švihněte zápěstím, jako byste sahali do sklenice pro sušenku.',
      'Mějte nohy na šířku ramen a kolena mírně pokrčená.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'low',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '2',
    name: 'Osmička s crossoverem',
    description: 'Pokročilé cvičení na ovládání míče pro zlepšení koordinace a kontroly nízkého driblinku.',
    steps: [
      'Postavte se s nohama rozkročenýma v nízkém atletickém postoji.',
      'Driblujte s míčem ve tvaru osmičky skrze nohy a kolem nich.',
      'Uprostřed používejte rychlé a nízké crossovery.',
      'Po 2 minutách změňte směr.'
    ],
    tips: [
      'Dívejte se před sebe, nesledujte míč.',
      'Čím nižší je driblink, tím rychlejší musí být vaše ruce.',
      'Používejte konečky prstů, ne dlaně.'
    ],
    category: 'dribbling',
    duration: 5,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč'],
  },
  {
    id: '3',
    name: 'Obranné slajdy (Agilita v bedně)',
    description: 'Budujte laterální rychlost a obrannou vytrvalost s využitím vymezeného území.',
    steps: [
      'Začněte v jednom rohu vymezeného území.',
      'Pohybujte se postranními slajdy na druhou stranu, aniž byste křížili nohy.',
      'Sprintujte vpřed k lokti (elbow).',
      'Slajdujte podél čáry trestného hodu.',
      'Běžte pozpátku do výchozího rohu.'
    ],
    tips: [
      'Zůstaňte nízko – zadek dole, hrudník nahoře.',
      'Veďte pohyb přední nohou a odrážejte se zadní nohou.',
      'Paže by měly být aktivní a rozpažené.'
    ],
    category: 'defense',
    duration: 15,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['žádné'],
  },
  {
    id: '4',
    name: 'Mikanovo cvičení',
    description: 'Klasické cvičení na práci nohou a zakončení pro rozvoj jemného citu kolem obruče.',
    steps: [
      'Začněte pod košem čelem k základní čáře.',
      'Vykročte levou nohou a zakončete pravou rukou o desku.',
      'Chytněte míč přímo ze síťky, aniž by dopadl na zem.',
      'Okamžitě vykročte pravou nohou a zakončete levou rukou.',
      'Opakujte v plynulém rytmu.'
    ],
    tips: [
      'Míč držte neustále nad úrovní hlavy.',
      'Soustřeďte se na jemný dotek vysoko o desku.',
      'Vypěstujte si rytmický krok pro udržení rovnováhy.'
    ],
    category: 'shooting',
    duration: 5,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '5',
    name: 'Kolem světa',
    description: 'Komplexní střelecké cvičení pokrývající 5–7 míst po obvodu.',
    steps: [
      'Začněte v jednom rohu u základní čáry.',
      'Střílejte, dokud nedáte koš, pak se přesuňte na křídlo.',
      'Pokračujte na loket, vrchol trojky, druhý loket, křídlo a druhý roh.',
      'Dokončete kolečko a poté se vraťte stejnou cestou zpět.'
    ],
    tips: [
      'Na každém místě dodržujte stejnou střeleckou rutinu.',
      'Při přesunu mezi místy se soustřeďte na práci nohou.',
      'Zkuste výzvu, kdy se počítají pouze čisté koše (swishe).'
    ],
    category: 'shooting',
    duration: 15,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '6',
    name: 'Střelba z rohu',
    description: 'Vysoký počet opakování střelby z nejefektivnější pozice v basketbalu.',
    steps: [
      'Postavte se hluboko do rohu.',
      'Přijměte přihrávku nebo si míč sami nahoďte rotací.',
      'Chyťte a vystřelte 10krát.',
      'Sprintujte do opačného rohu a opakujte.',
      'Proveďte 5 sérií po 10 úspěšných koších.'
    ],
    tips: [
      'Nenašlapujte na autovou čáru – trénujte prostorové vnímání.',
      'Připravte si nohy ještě před příletem míče.',
      'Držte střelecké zakončení i u dlouhých střel.'
    ],
    category: 'shooting',
    duration: 12,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '7',
    name: 'Střela po úniku podél základní čáry',
    description: 'Trénink obtížné střely z pohybu podél základní čáry do výskoku.',
    steps: [
      'Začněte na křídle.',
      'Driblujte směrem k základní čáře.',
      'Udělejte laterální únik (drift) podél čáry směrem od koše.',
      'Zastavte na místě a vyskočte do střely.',
      'Střídejte strany hřiště.'
    ],
    tips: [
      'Udržujte ramena směrem ke koši i během pohybu do strany.',
      'Pro zastavení hybnosti použijte tvrdý driblink (pound dribble).',
      'Soustřeďte se na vertikální výskok.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '8',
    name: 'Výzva 100 košů',
    description: 'Ultimátní test vytrvalostní střelby pro vybudování svalové paměti.',
    steps: [
      'Vyberte si 5 míst (rohy, křídla, vrchol).',
      'Na každém místě dejte 20 košů.',
      'Na další místo se můžete přesunout až po dosažení 20 úspěšných pokusů.',
      'Sledujte celkový čas potřebný k dokončení 100 košů.'
    ],
    tips: [
      'Nespěchejte – kvalita je důležitější než rychlost.',
      'Pokud minete 3krát v řadě, vydýchejte se a srovnejte si techniku.',
      'Udržujte konzistentní rytmus po celou dobu cvičení.'
    ],
    category: 'shooting',
    duration: 30,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '9',
    name: 'Střela po náběhu přes clonu',
    description: 'Simulace náběhu přes clonu pro rychlou střelu z výskoku.',
    steps: [
      'Začněte pod košem.',
      'Sprintujte k lokti a „obtočte“ se kolem pomyslné clony.',
      'Chyťte přihrávku a okamžitě se srovnejte ke koši.',
      'Vyskočte a vystřelte jedním plynulým pohybem.',
      'Střídejte náběhy doleva a doprava.'
    ],
    tips: [
      'Ukazujte ruce přihrávajícímu včas.',
      'Zapíchněte vnitřní nohu jako první, aby vám pomohla v rotaci.',
      'Při obíhání clony zůstaňte nízko.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '10',
    name: 'Střelecký klam a pull-up po jednom driblinku',
    description: 'Ovládněte umění oklamání obránce a vytvoření prostoru pro střelu ze střední vzdálenosti.',
    steps: [
      'Chyťte míč na trojkové čáře.',
      'Proveďte důrazný střelecký klam (nohy zůstávají na zemi).',
      'Udělejte jeden výbušný driblink do strany nebo vpřed.',
      'Vyskočte do vyvážené střely ze střední vzdálenosti.',
      'Trénujte pohyb doleva i doprava.'
    ],
    tips: [
      'Střelecký klam musí být v úrovni očí, aby byl uvěřitelný.',
      'Driblink by měl být nízký a silný.',
      'Nenaklánějte se – pro pull-up udržujte zpevněný střed těla.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '11',
    name: 'Výzva „Pouze čisté“',
    description: 'Extrémně přesné střelecké cvičení pro eliminaci „náhodných“ košů.',
    steps: [
      'Vyberte si 5 míst ve střední vzdálenosti.',
      'Střela se počítá pouze tehdy, pokud propadne čistě síťkou (bez dotyku obroučky).',
      'Pokud se dotkne obroučky, ale spadne tam, počítá se jako neúspěšná.',
      'Cílem je dát 3 čisté koše z každého místa.'
    ],
    tips: [
      'Soustřeďte se na vyšší oblouk pro lepší úhel dopadu.',
      'Mířte na zadní střed obroučky.',
      'Klíčová je mentální odolnost – nenechte se frustrovat čistými hity, které se dotknou obroučky.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '12',
    name: 'Step-back „Luka“ speciál',
    description: 'Moderní práce nohou pro vytvoření maximálního odstupu od obránce.',
    steps: [
      'Driblujte tvrdě směrem ke koši.',
      'Zapíchněte přední nohu a „odrazte“ se od ní směrem dozadu.',
      'Dopadněte na obě nohy současně (nebo 1-2) za trojkovou čáru.',
      'Rychle vystřelte, než se obránce stačí vzpamatovat.'
    ],
    tips: [
      'Naznačte nájezd hlavou a rameny jako první.',
      'Odraz musí být výbušný, aby vytvořil skutečný prostor.',
      'Sledujte koš i během pohybu dozadu.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '13',
    name: 'Minimalistický crossover (The Ghost)',
    description: 'Moderní výbušný prvek zaměřený na klamavé přenesení váhy těla.',
    steps: [
      'Přibližte se k pomyslnému obránci střední rychlostí.',
      'Udělejte široký klamný únik (jab step) nedominantní nohou.',
      'Přesuňte váhu celého horního těla směrem k tomuto kroku.',
      'Okamžitě přeneste míč nízkým a tvrdým crossoverem na opačnou stranu.',
      'Vystartujte ke koši jedním dlouhým krokem.'
    ],
    tips: [
      'Prodejte pohyb očima – dívejte se tam, kam naznačujete krok.',
      'Crossover musí být pod úrovní kolen pro maximální rychlost.',
      'Neztrácejte čas zbytečnými driblinky.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '14',
    name: 'Mistrovství ve střelbě o desku',
    description: 'Rozvoj střelby o desku s vysokou úspěšností z křídel.',
    steps: [
      'Postavte se na křídlo v úhlu 45 stupňů (střední vzdálenost).',
      'Mířte do horního bližšího rohu čtverce na desce.',
      'Střílejte s dostatečným obloukem, aby se míč „odrazil“ od desky do koše.',
      'Přesuňte se na druhé křídlo a opakujte.',
      'Dejte 20 košů z každé strany.'
    ],
    tips: [
      'Deska je váš přítel – absorbuje rychlost míče.',
      'Mířte o něco výše, než si myslíte, že je potřeba.',
      'Střely o desku jsou nejúčinnější po pohybu.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'low',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '15',
    name: 'Z lokte na loket',
    description: 'Kondiční střelecké cvičení s pohybem mezi rohy čáry trestného hodu.',
    steps: [
      'Začněte na levém lokti. Vystřelte z výskoku.',
      'Okamžitě sprintujte na pravý loket.',
      'Přijměte přihrávku a vystřelte další střelu z výskoku.',
      'Pokračujte v přebíhání tam a zpět po dobu 2 minut.',
      'Cílem je dát 10+ košů v časovém limitu.'
    ],
    tips: [
      'Při přesunu na další místo zůstaňte nízko.',
      'Soustřeďte se na práci nohou – neudělejte kroky při chycení míče.',
      'Při únavě dýchejte zhluboka, abyste udrželi stabilní střelu.'
    ],
    category: 'shooting',
    duration: 8,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '16',
    name: 'Driblink se dvěma míči (současně)',
    description: 'Nutí obě ruce pracovat nezávisle a zlepšuje kontrolu nad míčem.',
    steps: [
      'V každé ruce držte jeden basketbalový míč.',
      'Driblujte oběma míči současně ve výšce pasu.',
      'Zkuste driblovat oběma ve výšce kolen (nízko).',
      'Zkuste driblovat oběma ve výšce ramen (vysoko).',
      'Při driblování choďte dopředu a dozadu.'
    ],
    tips: [
      'Dívejte se před sebe – nesledujte ani jeden míč.',
      'Pokud ztratíte jeden míč, pokračujte v driblování s druhým.',
      'K udržení rovnováhy využijte střed těla.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['2 míče'],
  },
  {
    id: '17',
    name: 'Driblink se dvěma míči (střídavě)',
    description: 'Komplexní koordinační cvičení pro vybudování síly paží.',
    steps: [
      'V každé ruce držte jeden basketbalový míč.',
      'Driblujte míči ve střídavém rytmu „pístů“.',
      'Když jde jeden míč nahoru, druhý jde dolů.',
      'Střídejte nízký, rychlý driblink a vysoký, pomalý driblink.',
      'Zkuste udělat crossover s oběma míči najednou.'
    ],
    tips: [
      'Udržujte konzistentní rytmus.',
      'Soustřeďte se na míč v ruce, která se zdá být „slabší“.',
      'Sedněte si hluboko do postoje.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['2 míče'],
  },
  {
    id: '18',
    name: 'Spider Dribble (Pavouk)',
    description: 'Klasické cvičení pro bleskovou rychlost rukou.',
    steps: [
      'Postavte se do širokého postoje, kolena pokrčená.',
      'Driblujte míčem v pořadí: Vpředu-Pravá, Vpředu-Levá, Vzadu-Pravá, Vzadu-Levá.',
      'Používejte velmi rychlé doteky konečky prstů.',
      'Zkoušejte zvyšovat rychlost, dokud míč není téměř rozmazaný.',
      'Udržujte míč uprostřed mezi nohama.'
    ],
    tips: [
      'Nepoužívejte dlaně – pouze konečky prstů.',
      'Udržujte míč nízko u země.',
      'Dívejte se dopředu, ne dolů.'
    ],
    category: 'dribbling',
    duration: 5,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč'],
  },
  {
    id: '19',
    name: 'Zig-zag mezi kužely (za zády)',
    description: 'Zlepšete bezpečnost míče při změně směru v rychlosti.',
    steps: [
      'Rozmístěte 6 kuželů v cik-cak vzoru po celém hřišti.',
      'Přibližte se k prvnímu kuželu na 70 % rychlosti.',
      'U kuželu proveďte crossover za zády.',
      'Vystartujte k dalšímu kuželu a opakujte.',
      'Zakončete dvojtaktem na konci řady.'
    ],
    tips: [
      'Oviňte míč úplně kolem pasu.',
      'Mějte pokrčená kolena, abyste byli při pohybu stabilní.',
      '„Exploze“ po provedení prvku je důležitější než prvek samotný.'
    ],
    category: 'dribbling',
    duration: 12,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'kužely', 'koš'],
  },
  {
    id: '20',
    name: 'In-and-Out driblink a útok',
    description: 'Klamavý pohyb pro „zmrazení“ obránce před nájezdem.',
    steps: [
      'Driblujte směrem ke kuželu nebo obránci.',
      'Veďte míč směrem ke středu těla a pak ho „vymrštěte“ zpět ven.',
      'K oklamání směrem dovnitř použijte hlavu a ramena.',
      'Okamžitě zrychlete kolem obránce.',
      'Trénujte dominantní i nedominantní rukou.'
    ],
    tips: [
      'Míč by nikdy neměl skutečně opustit vaši ruku (pozor na nošení).',
      'Vaše noha by měla naznačit krok dovnitř, když se tam pohybuje míč.',
      'Driblink udržujte nízko a u těla.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč'],
  },
  {
    id: '21',
    name: 'Nepřetržitý driblink mezi nohama',
    description: 'Budování jistoty při driblinku mezi nohama v postoji na místě.',
    steps: [
      'Postavte se s jednou nohou vpředu (střižný postoj).',
      'Driblujte míčem mezi nohama nepřetržitě ve tvaru osmičky nebo nůžek.',
      'Každých 5–10 driblinků vyměňte nohy (přeskokem).',
      'S rostoucí jistotou zvyšujte rychlost.',
      'Snažte se držet hrudník nahoře a dívat se dopředu.'
    ],
    tips: [
      'Udržujte míč nízko – kolem výšky kolen.',
      'Používejte „tvrdý“ driblink, aby se míč rychle vracel do ruky.',
      'Neohýbejte se v zádech, pokrčte kolena.'
    ],
    category: 'dribbling',
    duration: 8,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč'],
  },
  {
    id: '22',
    name: 'Pocket Dribble (Kontrola)',
    description: 'Naučte se „pozastavit“ míč v ruce pro čtení obrany.',
    steps: [
      'Driblujte s míčem na místě.',
      'Stáhněte míč zpět do „kapsy“ (těsně nad bok).',
      'Chvíli ho tam podržte (legální čas pozastavení).',
      'Okamžitě přejděte do crossoveru nebo nájezdu.',
      'Soustřeďte se na časování a manipulaci s míčem.'
    ],
    tips: [
      'Nedávejte ruku pod míč (vyhněte se nošení).',
      'K udržení míče v ruce využijte jeho rotaci.',
      'Toto je elitní dovednost – buďte trpěliví při učení.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč'],
  },
  {
    id: '23',
    name: 'Ústupový driblink (Únik)',
    description: 'Klíčová dovednost pro zvládání zdvojování a silného tlaku.',
    steps: [
      'Driblujte tvrdě směrem ke kuželu.',
      'Prudce zastavte a udělejte 2–3 „ústupové“ driblinky dozadu.',
      'Držte tělo mezi míčem a „obráncem“.',
      'Otočte hlavu a podívejte se přes rameno na spoluhráče.',
      'Zakončete rychlým crossoverem a nájezdem na opačnou stranu.'
    ],
    tips: [
      'Během ústupu zůstaňte v nízkém, silovém postoji.',
      'Driblink by měl být během ústupu vysoký a tvrdý pro lepší kontrolu.',
      'Neotáčejte se k obraně úplně zády.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'kužely'],
  },
  {
    id: '24',
    name: 'Hesitation „Hesi“ Pull-up',
    description: 'Zastavte obránce klamným zpomalením před střelbou.',
    steps: [
      'Driblujte na 80 % rychlosti směrem k lokti.',
      'Na okamžik zpomalte a narovnejte se („hesi“).',
      'Podívejte se na koš, jako byste se chystali střílet.',
      'Pokud obránce ztuhne, vyskočte do střely.',
      'Pokud obránce vyskočí, vyrazte ke koši.'
    ],
    tips: [
      'Vaše volná ruka by se měla pohnout směrem k míči pro zvýšení důvěryhodnosti klamu.',
      'Během zaváhání mějte nohy aktivní.',
      '„Hesi“ by mělo být jemné, ale účinné.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '25',
    name: 'Smittyho obrátka',
    description: 'Klasická poloviční obrátka pro vyvedení obránce z rovnováhy.',
    steps: [
      'Driblujte pravou rukou směrem k základní čáře.',
      'Začněte obrátku po směru hodinových ručiček, ale otočte se pouze o 180 stupňů.',
      'Míč nechte v pravé ruce (nepřendavejte ho).',
      'Okamžitě se „vraťte“ cestou, kterou jste přišli, a vyrazte ke koši.',
      'Trénujte oběma rukama.'
    ],
    tips: [
      'Obrátka musí být přesvědčivá, aby přitáhla obránce.',
      'Míč držte chráněný vlastním tělem.',
      'Pracujte na práci nohou – pivotujte čistě.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč'],
  },
  {
    id: '26',
    name: 'Zrcadlové cvičení (ve dvojici)',
    description: 'Zlepšete reakční dobu a laterální rychlost napodobováním partnera.',
    steps: [
      'Postavte se 2 metry od partnera, oba v obranném postoji.',
      'Jeden je vůdce, druhý je zrcadlo.',
      'Vůdce se pohybuje do stran, dopředu a dozadu.',
      'Zrcadlo musí zůstat neustále přesně před ním.',
      'Po 1 minutě si vyměňte role.'
    ],
    tips: [
      'Udržujte vzdálenost na délku paže.',
      'Sledujte hrudník vůdce, ne jeho nohy.',
      'Pohybujte nohama, nejen rukama.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['žádné'],
  },
  {
    id: '27',
    name: 'Sed u zdi (v obranném postoji)',
    description: 'Budujte sílu nohou a mentální odolnost pro obranu.',
    steps: [
      'Opřete se zády o zeď.',
      'Sjeďte dolů, dokud nebudou vaše stehna rovnoběžně s podlahou.',
      'Rozpažte ruce, jako byste někoho bránili.',
      'V této pozici vydržte 60 sekund.',
      'Opakujte 5krát s 30sekundovým odpočinkem mezi sériemi.'
    ],
    tips: [
      'Záda držte celou plochou u zdi.',
      'Nepokládejte si ruce na kolena.',
      'Soustřeďte se na dýchání, abyste zůstali v klidu.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['zeď'],
  },
  {
    id: '28',
    name: 'Closeouty ve 4 rozích',
    description: 'Trénink vybíhání proti střelcům ve všech oblastech hřiště.',
    steps: [
      'Začněte uprostřed vymezeného území.',
      'Sprintujte ke kuželu v rohu, proveďte closeout (zastavení u střelce).',
      'Běžte pozpátku do středu.',
      'Sprintujte ke kuželu na křídle, proveďte closeout.',
      'Opakujte pro všechna 4 místa na obvodu.'
    ],
    tips: [
      'Při closeoutu mějte ruce vysoko.',
      'Při přibližování ke „střelci“ dělejte krátké, sekané kroky.',
      'Zůstaňte vyvážení, abyste mohli reagovat na případný nájezd.'
    ],
    category: 'defense',
    duration: 12,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['kužely'],
  },
  {
    id: '29',
    name: 'Nácvik bránění prorážení',
    description: 'Naučte se správnou techniku bezpečného přijetí kontaktu pro získání útočného faulu.',
    steps: [
      'Postavte se do cesty „najíždějícímu“ spoluhráči (pohybujícímu se na 40 % rychlosti).',
      'Mějte nohy pevně na zemi a ramena srovnaná.',
      'Při kontaktu padněte dozadu, dopadněte na hýždě a svalte se.',
      'Pažemi pád mírně zbrzděte, ale držte je u těla.',
      'Vykřikněte, abyste upozornili rozhodčí.'
    ],
    tips: [
      'Nenaklánějte se do kontaktu – zůstaňte vertikální.',
      'Chraňte si hlavu přitažením brady k hrudi.',
      'Buďte odvážní – je to akce, která mění hru.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['žíněnky (volitelné)'],
  },
  {
    id: '30',
    name: 'Obranný návrat (Sprint a slajd)',
    description: 'Trénink návratu do obrany po překonání nebo během rychlého protiútoku.',
    steps: [
      'Začněte na základní čáře. Sprintujte k polovině hřiště.',
      'Okamžitě přejděte do obranného slajdu celou cestu zpět.',
      'Vyměňte strany a opakujte.',
      'Soustřeďte se na přechod z plného sprintu do kontrolovaného slajdu.'
    ],
    tips: [
      'Rychle otočte boky pro přechod do slajdu.',
      'Při přechodu držte hrudník nahoře.',
      'Během přechodu se nenarovnávejte.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['žádné'],
  },
  {
    id: '31',
    name: 'Driblink o zeď podle „Kyrieho“',
    description: 'Vysokorychlostní cvičení na kontrolu konečky prstů o vertikální plochu.',
    steps: [
      'Postavte se 30 cm od zdi.',
      'Natáhněte ruku a rychle driblujte míčem o zeď.',
      'Měňte výšku od nízké po vysokou.',
      'Každých 30 sekund vyměňte ruce.',
      'Zkuste míčem o zeď „napsat“ své jméno.'
    ],
    tips: [
      'Paži mějte nataženou, ale ne propnutou.',
      'Používejte POUZE konečky prstů.',
      'Udržujte rytmus, i když vás začne pálit rameno.'
    ],
    category: 'dribbling',
    duration: 5,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč', 'zeď'],
  },
  {
    id: '32',
    name: 'Souboj o odstavení (Box-Out)',
    description: 'Fyzické cvičení na doskakování pro zvládnutí pozice a síly.',
    steps: [
      'Trenér nebo partner vystřelí na koš.',
      'Obránce musí okamžitě najít útočníka a navázat kontakt.',
      '„Zaklesněte“ paže přes jeho a tlačte ho boky dozadu.',
      'Zajistěte doskok v nejvyšším možném bodě.',
      'Po získání míče se odtlakujte pivotem směrem od soupeře.'
    ],
    tips: [
      'Nejdříve kontakt, pak pohled po míči.',
      'Zůstaňte nízko pro udržení silné základny.',
      'Nestyjte jen tak – aktivně „vnímejte“, kam se útočník pohybuje.'
    ],
    category: 'rebounding',
    duration: 12,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '33',
    name: 'Příprava na dlouhou vzdálenost podle „Lillarda“',
    description: 'Budování síly nohou a dosahu pro daleké trojky.',
    steps: [
      'Začněte na trojkové čáře.',
      'Vystřelte 5krát. Pokud dáte 3, udělejte velký krok dozadu.',
      'Pokračujte v ustupování, dokud nedosáhnete svého limitu.',
      'Soustřeďte se na přenos síly z nohou do zápěstí.'
    ],
    tips: [
      'Daleké střely vycházejí z nohou, ne z paží.',
      'Střelecký pohyb udržujte plynulý – bez zadrhnutí.',
      'Dbejte na to, aby vodící ruka nezasahovala do střely.'
    ],
    category: 'shooting',
    duration: 15,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '34',
    name: 'Kruh přihrávek od prsou a nad hlavou',
    description: 'Zlepšení rychlosti přihrávek a schopnosti měnit dráhu přihrávky.',
    steps: [
      'Postavte se 4 metry od zdi nebo partnera.',
      'Střídejte prudké přihrávky od prsou a dlouhé přihrávky nad hlavou.',
      'Soustřeďte se na „švihnutí“ míčem, aby letěl přímo.',
      'Před každou skutečnou přihrávkou přidejte klamnou přihrávku.'
    ],
    tips: [
      'Do každé přihrávky vykročte pro větší sílu.',
      'Miřte do „střelecké kapsy“ partnera.',
      'Palce by měly na konci přihrávky od prsou směřovat dolů.'
    ],
    category: 'passing',
    duration: 8,
    intensity: 'low',
    playersNeeded: 1,
    equipment: ['míč', 'zeď/partner'],
  },
  {
    id: '35',
    name: 'Sprinty v přechodu (Sedmnáctky)',
    description: 'Elitní kondiční cvičení pro vybudování vítězné vytrvalosti.',
    steps: [
      'Začněte na jedné základní čáře.',
      'Sprintujte přes celé hřiště k druhé základní čáře a zpět.',
      'Opakujte 17krát (délky hřiště).',
      'Cílem je dokončit pod 1 minutu a 15 sekund.'
    ],
    tips: [
      'Prvních 10 délek si rozvrhněte tempo, posledních 7 vyrazte naplno.',
      'Pokaždé se nohou dotkněte základní čáry.',
      'I při únavě držte hlavu nahoře.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['hřiště'],
  },
  {
    id: '36',
    name: 'Closeout a contest (Vyběhnutí a obrana)',
    description: 'Ovládněte umění zastavení střelce bez faulování.',
    steps: [
      'Začněte ve vymezeném území. Sprintujte ke střelci na křídle.',
      'Při přiblížení použijte „sekané kroky“ (krátké, rychlé kroky).',
      'Jednu ruku držte nahoře proti střele a druhou nízko proti nájezdu.',
      'Udržujte vzdálenost na délku paže.'
    ],
    tips: [
      'Neskákejte, dokud míč neopustí ruku střelce.',
      'Křikněte „STŘELA!“, abyste informovali spoluhráče.',
      'Váhu držte na přední části chodidel.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '37',
    name: 'Přehled v postu podle „Jokera“',
    description: 'Zlepšení přihrávek z postu a celkového přehledu na hřišti.',
    steps: [
      'Postavte se do dolního postu zády ke koši.',
      'Jednou nebo dvakrát zadriblujte, abyste „navnímali“ obránce.',
      'Hlavu mějte přes rameno, abyste viděli celé hřiště.',
      'Proveďte přihrávku bez koukání (no-look pass) nabíhajícímu spoluhráči.'
    ],
    tips: [
      'Používejte své tělo jako štít pro míč.',
      'Před přihrávkou počkejte na zdvojení.',
      'Buďte kreativní – přihrávejte jednou rukou, nad hlavou nebo o zem.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['míč', 'koš'],
  },
  {
    id: '38',
    name: 'Náběhy ke koši a zakončení',
    description: 'Sprinty v přechodu a zakončení přes kontakt.',
    steps: [
      'Sprintujte z poloviny hřiště ke koši.',
      'Přijměte přihrávku v plné rychlosti.',
      'Zakončete silným dvojtaktem nebo smečí.',
      'Partner by měl použít „heavy bag“ (úderník) nebo mírný kontakt pro ztížení.'
    ],
    tips: [
      'Při chytání míče nezpomalujte.',
      'Míč držte vysoko (u brady), aby vám ho nikdo nevysekl.',
      'Při každém dvojtaktu použijte desku.'
    ],
    category: 'shooting',
    duration: 12,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš', 'heavy bag (volitelné)'],
  },
  {
    id: '39',
    name: 'Cvičení s reakčním míčkem',
    description: 'Použití reakčního nebo tenisového míčku pro zlepšení koordinace ruka-oko.',
    steps: [
      'Jednou rukou driblujte s basketbalovým míčem.',
      'Druhou rukou házejte tenisový míček o zeď.',
      'Chyťte tenisový míček, aniž byste přestali driblovat.',
      'Opakujte 20krát pro každou ruku.'
    ],
    tips: [
      'Zůstaňte v hlubokém postoji.',
      'Pokud tenisový míček upustíte, pokračujte v driblování s basketbalovým míčem.',
      'Soustřeďte se na tenisový míček, driblink provádějte citem.'
    ],
    category: 'dribbling',
    duration: 8,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['basketbalový míč', 'tenisový míček', 'zeď'],
  },
  {
    id: '40',
    name: 'Trestné hody pod únavou',
    description: 'Trénink nejdůležitější střely pod fyzickým tlakem.',
    steps: [
      'Sprintujte dvě délky hřiště.',
      'Okamžitě jděte k čáře a vystřelte 2 trestné hody.',
      'Opakujte 10krát.',
      'Cíl: Dát alespoň 16/20.'
    ],
    tips: [
      'Před střelbou se snažte uklidnit dech.',
      'Pokaždé dodržujte svou rutinu.',
      'Vizualizujte si, jak míč propadá košem.'
    ],
    category: 'shooting',
    duration: 15,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '41',
    name: 'Stínování při celoplošném presu',
    description: 'Trénink udržení se před hráčem s míčem po celé délce hřiště.',
    steps: [
      'Jeden útočník dribluje od základní čáry k základní čáře.',
      'Obránce musí zůstat před ním a nutit ho ke změně směru.',
      'Obránce by se neměl pokoušet o zisk míče, pouze o „stínování“ a zdržení.',
      'Cílem je nepustit driblujícího do středu hřiště.'
    ],
    tips: [
      'Pro rychlou změnu směru používejte „drop steps“.',
      'Mějte aktivní ruce, ale nesahejte po míči.',
      'Vytlačujte driblujícího k postranním čarám.'
    ],
    category: 'defense',
    duration: 15,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'hřiště'],
  },
  {
    id: '42',
    name: 'Aktivní ruce (Vypichování přihrávek)',
    description: 'Zlepšení reakční doby a rychlosti rukou pro narušení útoku soupeře.',
    steps: [
      'Dva útočníci si přihrávají míč tam a zpět.',
      'Obránce stojí uprostřed a snaží se přihrávku tečovat nebo vypíchnout.',
      'Útočníci mohou používat klamy a různé typy přihrávek.',
      'Obránce musí zůstat nízko a pohybovat se s míčem.'
    ],
    tips: [
      'Ruce držte ve výšce ramen.',
      'Příliš neriskujte – udržujte rovnováhu.',
      'Komunikujte se spoluhráči („Míč!“, „Přihrávka!“).'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['míč'],
  },
  {
    id: '43',
    name: 'Odmítnutí přihrávky (na křídle)',
    description: 'Naučte se zabránit soupeři v příjmu míče v nebezpečných pozicích.',
    steps: [
      'Útočník je na křídle, přihrávající na vrcholu trojky.',
      'Obránce musí mít v dráze přihrávky ruku nahoře.',
      'Udržujte kontakt „hrudník na rameno“ s útočníkem.',
      'Pohybujte se podle toho, jak se útočník snaží uvolnit.'
    ],
    tips: [
      'V dráze přihrávky mějte palec dolů.',
      'Sledujte svého hráče i míč (tzv. „obranný trojúhelník“).',
      'Pokud se přihrávající dívá jinam, můžete se mírně „uvolnit“, ale zůstaňte ve střehu.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['míč'],
  },
  {
    id: '44',
    name: 'Rotace ze slabé strany',
    description: 'Trénink klíčové týmové obranné dovednosti – rotace na pomoc spoluhráči.',
    steps: [
      'Začněte na „slabé straně“ (opačná strana, než je míč).',
      'Jakmile je pomyslný nebo skutečný spoluhráč překonán, sprintujte k ose hřiště.',
      'Zastavte najíždějícího hráče předtím, než se dostane do vymezeného území.',
      'Komunikujte „Pomoc!“ a „Mám ho!“'
    ],
    tips: [
      'Vaše pozice závisí na tom, kde se nachází míč.',
      'Nečekejte, až bude spoluhráč překonán – předvídejte.',
      'Buďte připraveni se vrátit ke svému hráči, pokud dojde k přihrávce.'
    ],
    category: 'defense',
    duration: 12,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['míč', 'koš'],
  },
  {
    id: '45',
    name: 'Čtverec (Obranná práce nohou)',
    description: 'Intenzivní cvičení na práci nohou pokrývající všechny obranné pohyby na malém prostoru.',
    steps: [
      'Rozmístěte 4 kužely do čtverce 3x3 metry.',
      'Sprintujte ke kuželu 1, slajdujte ke kuželu 2, běžte pozpátku ke kuželu 3, slajdujte ke kuželu 4.',
      'Opakujte v opačném směru.',
      'Během celého cvičení zůstaňte co nejníže.'
    ],
    tips: [
      'Při slajdech se nohy nesmí dotýkat.',
      'Z každého rohu vystartujte výbušně.',
      'Každého kuželu se dotkněte rukou.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['kužely'],
  },
  {
    id: '46',
    name: 'Přihrávka jednou rukou od boku',
    description: 'Ovládněte rychlou a klamavou přihrávku používanou v moderních rychlých útocích.',
    steps: [
      'Držte míč ve střílející ruce.',
      'Jedním pohybem přímo z driblinku „postrčte“ míč směrem k cíli.',
      'Nedávejte míč k prsům.',
      'Trénujte oběma rukama na různé vzdálenosti.'
    ],
    tips: [
      'Přihrávka by měla vyjít švihem zápěstí.',
      'Přihrávejte spoluhráči do pohybu.',
      'Sledujte obranu, ne přihrávajícího.'
    ],
    category: 'passing',
    duration: 8,
    intensity: 'low',
    playersNeeded: 2,
    equipment: ['míč'],
  },
  {
    id: '47',
    name: 'Přesnost přihrávky o zem (skrz kužely)',
    description: 'Rozvíjejte přesnost potřebnou pro přihrávky skrze úzká obranná okna.',
    steps: [
      'Postavte dva kužely 1 metr od sebe (tzv. „okno“).',
      'Postavte se 4 metry od nich.',
      'Přihrajte o zem tak, aby míč prošel přesně mezi kužely.',
      'Příjemce by měl míč chytit ve výšce pasu.',
      'Měňte vzdálenost a úhel.'
    ],
    tips: [
      'Míč by se měl dotknout země asi ve 2/3 vzdálenosti k příjemci.',
      'Pro lepší kontrolu použijte zpětnou rotaci.',
      'Do přihrávky vykročte pro větší sílu.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'low',
    playersNeeded: 2,
    equipment: ['míč', 'kužely'],
  },
  {
    id: '48',
    name: 'Baseballová přihrávka přes celé hřiště',
    description: 'Zlepšení přesnosti na dlouhou vzdálenost pro příležitosti z rychlého protiútoku.',
    steps: [
      'Postavte se k jedné základní čáře.',
      'Hoďte jednou rukou „baseballovou“ přihrávku spoluhráči na protější čáru trestného hodu.',
      'Míč by měl letět v relativně přímé linii (ne příliš velký oblouk).',
      'Trénujte trefení spoluhráče do náběhu.'
    ],
    tips: [
      'Zapojte celé tělo, nejen paži.',
      'Zakončete pohyb rukou směrem k cíli.',
      'Dávejte pozor, abyste přihrávku nepřetáhli a neztratili přesnost.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['míč', 'hřiště'],
  },
  {
    id: '49',
    name: 'Obhazovaná přihrávka (Wrap-around)',
    description: 'Naučte se přihrávat kolem vysokého obránce nebo přes clonu.',
    steps: [
      'Postavte se před vysokého „obránce“ (nebo vysoký kužel).',
      'Udělejte široký krok přední nohou do strany.',
      'Jednou rukou „obhoďte“ míč kolem pasu obránce.',
      'Pošlete prudkou přihrávku o zem spoluhráči.',
      'Pracujte na levé i pravé straně.'
    ],
    tips: [
      'Čím širší krok, tím lepší úhel.',
      'Míč držte nízko, abyste se vyhnuli rukám obránce.',
      'Zpočátku použijte své tělo k ochraně míče.'
    ],
    category: 'passing',
    duration: 8,
    intensity: 'low',
    playersNeeded: 2,
    equipment: ['míč', 'vysoký kužel/obránce'],
  },
  {
    id: '50',
    name: 'Pocket Pass (v Pick & Rollu)',
    description: 'Základní přihrávka pro každého rozehrávače v situaci pick-and-roll.',
    steps: [
      'Driblujte kolem clony.',
      'Když obránce ustoupí (drop), pošlete rychlou přihrávku o zem rolujícímu pivotovi.',
      'Přihrávka by měla projít „kapsou“ mezi dvěma obránci.',
      'Časování je vše – přihrajte, jakmile se rolující hráč uvolní.'
    ],
    tips: [
      'Nedívejte se upřeně na rolujícího hráče – využijte periferní vidění.',
      'Přihrávka musí být dostatečně prudká, aby ji obrana nezachytila.',
      'Trénujte časování s různými rychlostmi náběhu.'
    ],
    category: 'passing',
    duration: 12,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['míč', 'koš'],
  },
  {
    id: '51',
    name: 'Outlet přihrávka',
    description: 'Trénink přechodu z doskoku do zahájení rychlého protiútoku.',
    steps: [
      'Nahoďte si míč o desku, vyskočte a doskočte.',
      'Ještě ve vzduchu otočte tělo směrem k postranní čáře.',
      'Jakmile dopadnete, pošlete prudkou přihrávku od prsou nebo nad hlavou spoluhráči.',
      'Spoluhráč by měl sprintovat podél postranní čáry.'
    ],
    tips: [
      'Při dopadu pivotujte na vnější noze.',
      'Přihrávka musí být okamžitá a přesná.',
      'Vykřikněte „OUTLET!“, abyste signalizovali začátek protiútoku.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '52',
    name: 'Rychlé přihrávky (Rapid Fire)',
    description: 'Zlepšení rychlosti pohybu míče eliminací času držení.',
    steps: [
      'Postavte se do kruhu se 3–4 spoluhráči.',
      'Přihrávejte si míč v kruhu co nejrychleji.',
      'Pravidla: Žádný hráč nesmí držet míč déle než 0,5 sekundy.',
      'Měňte směr a typ přihrávky (od prsou, o zem, nad hlavou).'
    ],
    tips: [
      'Buďte připraveni ještě předtím, než míč přiletí.',
      'K „přesměrování“ míče používejte konečky prstů.',
      'Mějte aktivní nohy a buďte připraveni k pohybu.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 4,
    equipment: ['míč'],
  },
  {
    id: '53',
    name: 'Přihrávka za zády',
    description: 'Přidejte do své hry kreativní přihrávku vysoké úrovně pro těsné situace.',
    steps: [
      'Driblujte pravou rukou.',
      'Oviňte míč za zády a „švihněte“ jím zápěstím.',
      'Miřte na spoluhráče po své levici.',
      'Začněte na místě, poté přejděte do nájezdu v plné rychlosti.',
      'Trénujte oběma rukama.'
    ],
    tips: [
      'Nedovolte, aby míč narazil do vašich zad.',
      'Síla vychází ze švihu zápěstím.',
      'Tato přihrávka je nejúčinnější, když obránce očekává nájezd.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['míč'],
  },
  {
    id: '54',
    name: 'Člunkové běhy (Sebevraždy)',
    description: 'Klasické basketbalové kondiční cvičení pro rychlost a vytrvalost.',
    steps: [
      'Začněte na základní čáře.',
      'Sprintujte k bližší čáře trestného hodu a zpět.',
      'Sprintujte k polovině hřiště a zpět.',
      'Sprintujte k protější čáře trestného hodu a zpět.',
      'Sprintujte k protější základní čáře and zpět.'
    ],
    tips: [
      'Pokaždé se rukou dotkněte čáry.',
      'Při obrátkách vystartujte výbušně.',
      'Držte hlavu nahoře a překonejte pocit pálení ve svalech.'
    ],
    category: 'conditioning',
    duration: 15,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['hřiště'],
  },
  {
    id: '55',
    name: 'Švihadlo (Rychlost)',
    description: 'Zlepšení práce nohou, koordinace a vytrvalosti lýtek.',
    steps: [
      'Skákejte přes švihadlo po dobu 60 sekund ve vysokém tempu.',
      'Soustřeďte se na setrvání na přední části chodidel.',
      'Pokud je to možné, zapojte „dvojskoky“ (double-unders).',
      'Odpočívejte 30 sekund a opakujte 5krát.'
    ],
    tips: [
      'Lokty držte u těla.',
      'K otáčení švihadla používejte zápěstí, ne celé paže.',
      'Udržujte stabilní rytmus.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['švihadlo'],
  },
  {
    id: '56',
    name: 'Výskoky na bednu (Výbušnost)',
    description: 'Budování vertikální síly potřebné pro doskakování a zakončení.',
    steps: [
      'Postavte se před stabilní bednu (výška 40–60 cm).',
      'Vyskočte na bednu a dopadněte měkce na obě nohy.',
      'Sestupujte dolů po jedné noze.',
      'Proveďte 3 série po 10 opakováních.'
    ],
    tips: [
      'K vytvoření vzestupné hybnosti použijte paže.',
      'Dopadněte do kontrolovaného dřepu.',
      'Soustřeďte se na „explozi“ z podlahy.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['plyometrická bedna'],
  },
  {
    id: '57',
    name: 'Angličáky s výskokem do dálky',
    description: 'Výbušné cvičení na celé tělo pro maximální sílu a kardiovaskulární zátěž.',
    steps: [
      'Proveďte standardní angličák (burpee).',
      'Při výskoku nahoru neskočte vertikálně, ale co nejdále dopředu.',
      'Dopadněte měkce a okamžitě přejděte do dalšího angličáku.',
      'Dokončete 2 délky hřiště.'
    ],
    tips: [
      'Během angličáku držte zpevněný střed těla.',
      'Při skoku tlačte kolena dopředu.',
      'Soustřeďte se na nepřetržitý pohyb.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['hřiště'],
  },
  {
    id: '58',
    name: 'Obranné slajdy se sprintem',
    description: 'Spojení laterální rychlosti s lineární rychlostí.',
    steps: [
      'Provádějte obranné slajdy přes celou šířku hřiště.',
      'Okamžitě přejděte do plného sprintu k základní čáře.',
      'Opakujte po dobu 5 minut.',
      'Soustřeďte se na rychlost přechodu.'
    ],
    tips: [
      'Při slajdech zůstaňte nízko.',
      'Do sprintu „nevyrazte“ skokem – udělejte rychlé první kroky.',
      'Udržujte intenzitu po celých 5 minut.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['hřiště'],
  },
  {
    id: '59',
    name: 'Nepřetržité dvojtakty přes celé hřiště',
    description: 'Trénink zakončení pod extrémní kardiovaskulární únavou.',
    steps: [
      'Začněte na jedné základní čáře. Driblujte plnou rychlostí na druhý konec a dejte dvojtakt.',
      'Chytněte vlastní doskok a sprintujte zpět na druhý koš.',
      'Pokračujte 4 minuty bez zastavení.',
      'Pro „splnění“ musíte dát 25+ dvojtaktů.'
    ],
    tips: [
      'Při přibližování ke koši nezpomalujte.',
      'Sledujte čtverec na desce.',
      'Při únavě dýchejte zhluboka.'
    ],
    category: 'conditioning',
    duration: 12,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč', 'koš', 'hřiště'],
  },
  {
    id: '60',
    name: '„Ulička“ (Driblink a zakončení přes celé hřiště)',
    description: 'Vysokointenzivní cvičení na ovládání míče a zakončení.',
    steps: [
      'Driblujte přes celé hřiště skrze 5 cik-cak rozmístěných kuželů.',
      'U každého kuželu proveďte jiný prvek (crossover, mezi nohama atd.).',
      'Zakončete silným dvojtaktem nebo smečí.',
      'Sprintujte zpět na začátek a opakujte.'
    ],
    tips: [
      'Při kličkování mezi kužely držte míč nízko.',
      'Z každého prvku vyrazte výbušně.',
      'Měňte prvky, aby cvičení zůstalo náročné.'
    ],
    category: 'dribbling',
    duration: 15,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč', 'kužely', 'koš'],
  },
  {
    id: '61',
    name: 'Supermanův doskok (Voleje o desku)',
    description: 'Budování síly prstů a vertikality pro útočné doskoky.',
    steps: [
      'Postavte se na jednu stranu obroučky.',
      'Nahoďte míč o desku.',
      'Vyskočte a jednou rukou „přiťukněte“ (volej) míč zpět o desku.',
      'Udělejte 10 volejů v řadě, aniž by se míč dotkl obroučky nebo země.',
      'Zakončete úspěšným dvojtaktem.'
    ],
    tips: [
      'Paži mějte nataženou.',
      'Používejte pouze konečky prstů.',
      'Zůstaňte na přední části chodidel pro rychlé výskoky.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '62',
    name: 'Doskok a outlet (Reakce)',
    description: 'Trénink zajištění míče a okamžitého nalezení volného hráče.',
    steps: [
      'Partner střílí z obvodu.',
      'Doskakující musí odstavit (box out) druhého partnera.',
      'Zajistěte doskok a okamžitě pivotujte pro nalezení „outlet“ hráče na postranní čáře.',
      'Pošlete prudkou přihrávku nad hlavou.'
    ],
    tips: [
      'Po zajištění dejte míč pod bradu.',
      'Pivotujte směrem od obránce.',
      'Přihrávka by měla odejít za méně než 1 sekundu.'
    ],
    category: 'rebounding',
    duration: 12,
    intensity: 'high',
    playersNeeded: 3,
    equipment: ['míč', 'koš'],
  },
  {
    id: '63',
    name: 'Opakované voleje (Doskok)',
    description: 'Rozvoj rychlosti „druhého a třetího výskoku“ potřebné pro doskoky.',
    steps: [
      'Nahoďte míč vysoko o desku.',
      'Vyskočte a dvakrát do něj ve vzduchu klepněte (pokud je to možné) nebo s rychlými výskoky o desku.',
      'Při třetím výskoku zajistěte míč oběma rukama.',
      'Dopadněte do silového postoje a „strhněte“ míč k hrudi.'
    ],
    tips: [
      'Nečekejte, až míč přiletí k vám – jděte mu naproti.',
      'Lokty držte roztažené pro ochranu míče.',
      'Soustřeďte se na rychlý „opakovaný“ výskok.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['míč', 'koš'],
  },
  {
    id: '64',
    name: 'Zakončení po útočném doskoku (Put-back)',
    description: 'Ovládněte umění okamžitého skórování po útočném doskoku.',
    steps: [
      'Začněte mimo vymezené území.',
      'Jakmile vyletí střela, sprintujte ke koši.',
      'Zajistěte útočný doskok ještě ve vzduchu.',
      'Snažte se míč vrátit do koše dřív, než dopadnete na zem.',
      'Pokud dopadnete, okamžitě vyskočte se silným zakončením.'
    ],
    tips: [
      'Očekávejte, že každá střela bude neúspěšná.',
      'Míč držte vysoko – nedávejte ho k pasu.',
      'Pro jemný dotek použijte desku.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  },
  {
    id: '65',
    name: 'Doskok a stržení (Bezpečnost míče)',
    description: 'Naučte se chránit míč před vypíchnutím po doskoku.',
    steps: [
      'Zajistěte doskok o desku.',
      'Při dopadu „strhněte“ (rip) míč přes tělo k protějšímu boku.',
      'Lokty držte venku a široko.',
      'Partner by se měl pokusit míč při vašem dopadu vypíchnout.',
      'Pivotujte a vytvořte si prostor.'
    ],
    tips: [
      '„Stržení“ musí být prudké a rychlé.',
      'Zůstaňte nízko a vyvážení.',
      'Nefaulujte lokty, pouze si vytvořte prostor.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['míč', 'koš'],
  }
];
