import type { Drill } from '../types';

export const FITNESS_EXERCISES_CS: Drill[] = [
  // LEGS
  { 
    id: 'f1', name: 'Goblet dřepy', description: 'Síla nohou.', steps: ['Držte závaží u hrudníku.', 'Dřepněte si.', 'Vytlačte se nahoru.'], tips: ['Držte hruď nahoře.'], 
    techniqueTips: ['Váha na patách.', 'Kolena v ose špiček.'], commonMistakes: ['Kulacení zad.', 'Předklánění.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12-15' 
  },
  { 
    id: 'f2', name: 'Bulharské dřepy', description: 'Síla jedné nohy.', steps: ['Noha na lavičce.', 'Poklesněte kolenem dolů.'], tips: ['Rovnováha.'], 
    techniqueTips: ['Koleno přední nohy neuhýbá.', 'Trup vzpřímený.'], commonMistakes: ['Ztráta stability.', 'Přílišný tlak na koleno.'], category: 'legs', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '8-10' 
  },
  { 
    id: 'f3', name: 'Trap Bar mrtvý tah', description: 'Síla.', steps: ['Uchopit madla.', 'Zvednout.'], tips: ['Plochá záda.'], 
    techniqueTips: ['Osa těsně u nohou.', 'Zapojit zadek.'], commonMistakes: ['Kulacení zad.', 'Špatná koordinace.'], category: 'legs', duration: 12, intensity: 'high', playersNeeded: 1, equipment: ['trap bar'], sets: 4, reps: '6-8' 
  },
  { 
    id: 'f4', name: 'Laterální odrazy', description: 'Výbušnost.', steps: ['Skočit do strany.'], tips: ['Měkký dopad.'], 
    techniqueTips: ['Explozivní odraz.', 'Stabilní dopad.'], commonMistakes: ['Koleno dovnitř.', 'Nestabilita.'], category: 'legs', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },
  { 
    id: 'f16', name: 'Výskoky na bednu', description: 'Vertikální síla.', steps: ['Výskok na bednu.'], tips: ['Plné propnutí.'], 
    techniqueTips: ['Tichý dopad.', 'Naplno propnout kyčle.'], commonMistakes: ['Dopad na paty.', 'Zahrbená záda.'], category: 'legs', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['box'], sets: 3, reps: '8' 
  },
  { 
    id: 'f21', name: 'Split dřepy s výskokem', description: 'Síla nohou.', steps: ['Lunge.', 'Výměna nohou.'], tips: ['Zapojit ruce.'], 
    techniqueTips: ['Vysoký výskok.', 'Plynulá výměna.'], commonMistakes: ['Koleno o zem.', 'Pomalý pohyb.'], category: 'legs', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },
  { 
    id: 'f25', name: 'Speed Skaters', description: 'Agilita.', steps: ['Skoky do stran.'], tips: ['Široké skoky.'], 
    techniqueTips: ['Udržet těžiště nízko.', 'Držet balanc.'], commonMistakes: ['Příliš rychlý pohyb bez kontroly.', 'Vyrovnávání rukama.'], category: 'legs', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12' 
  },
  { 
    id: 'f30', name: 'Výpady', description: 'Stabilita.', steps: ['Krok vpřed.', 'Poklesnout.'], tips: ['Trup vzpřímený.'], 
    techniqueTips: ['Koleno v ose špičky.', 'Stabilní krok.'], commonMistakes: ['Koleno moc vpředu.', 'Příliš úzký postoj.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },
  { 
    id: 'f31', name: 'Angličáky', description: 'Kardio.', steps: ['Dřep.', 'Plank.', 'Výskok.'], tips: ['Výbušnost.'], 
    techniqueTips: ['Plný dřep.', 'Výskok nad hlavu.'], commonMistakes: ['Nedotažený plank.', 'Krátký výskok.'], category: 'legs', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },
  { 
    id: 'f40', name: 'Wall Sit', description: 'Vytrvalost.', steps: ['Dřep o zeď.'], tips: ['90 stupňů.'], 
    techniqueTips: ['Záda celou plochou na zdi.', 'Pevné břicho.'], commonMistakes: ['Ruce na kolenou.', 'Příliš vysoko.'], category: 'legs', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '60s' 
  },
  { 
    id: 'f41', name: 'Výstupy na bednu', description: 'Síla.', steps: ['Krok na box.', 'Vytlačit.'], tips: ['Propnutí.'], 
    techniqueTips: ['Plné propnutí v kyčlích.', 'Kontrolovaný sestup.'], commonMistakes: ['Odraz zadní nohou.', 'Nestabilita.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['box'], sets: 3, reps: '10' 
  },
  { 
    id: 'f42', name: 'Glute Bridges', description: 'Zadek.', steps: ['Pánev nahoru.'], tips: ['Stisknout zadek.'], 
    techniqueTips: ['Maximální kontrakce hýždí.', 'Zpevněný střed.'], commonMistakes: ['Prohýbání v bedrech.', 'Příliš široký postoj.'], category: 'legs', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' 
  },
  { 
    id: 'f47', name: 'Zadní výpady', description: 'Stabilita.', steps: ['Krok vzad.', 'Dřep.'], tips: ['Kontrolovaně.'], 
    techniqueTips: ['Stabilní zadní noha.', 'Rovnováha.'], commonMistakes: ['Příliš rychlý krok.', 'Nestabilní koleno.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },
  { 
    id: 'f48', name: 'Sumo dřepy', description: 'Vnitřní stehna.', steps: ['Široký postoj.'], tips: ['Hruď nahoře.'], 
    techniqueTips: ['Kolena do stran.', 'Držet trup vzpřímeně.'], commonMistakes: ['Kolena dovnitř.', 'Sklon trupu.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f52', name: 'Box Step-Overs', description: 'Vytrvalost.', steps: ['Překroky přes box.'], tips: ['Rychlost.'], 
    techniqueTips: ['Rychlý krok.', 'Pevný střed.'], commonMistakes: ['Ztráta tempa.', 'Sklouznutí.'], category: 'legs', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['box'], sets: 3, reps: '30s' 
  },

  // ARMS
  { 
    id: 'f5', name: 'Výrazový tlak', description: 'Síla.', steps: ['Tlak nad hlavu.'], tips: ['Zapojit nohy.'], 
    techniqueTips: ['Explozivní pohyb nohama.', 'Zpevněný střed.'], 
    commonMistakes: ['Přílišné zaklánění.', 'Chybějící aktivace nohou.'], 
    category: 'arms', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10-12' 
  },
  { 
    id: 'f7', name: 'Odhozy medicinbalu', description: 'Síla.', steps: ['Slam o zem.'], tips: ['Vydech.'], 
    techniqueTips: ['Zapojte břišní svaly při hodu.', 'Chyťte míč bezpečně.'], 
    commonMistakes: ['Kulacení zad.', 'Nebezpečný dopad míče.'], 
    category: 'arms', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '15' 
  },
  { 
    id: 'f26', name: 'Kliky', description: 'Hrudník/Triceps.', steps: ['Plank.', 'Klik.'], tips: ['Zpevněný střed.'], 
    techniqueTips: ['Lokty 45 stupňů.', 'Tělo v jedné linii.'], 
    commonMistakes: ['Zvedání pánve.', 'Nedostatečná hloubka.'], 
    category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15-20' 
  },
  { 
    id: 'f27', name: 'Bench press s JČ', description: 'Hrudník.', steps: ['Tlak v leže.'], tips: ['Kontrola.'], 
    techniqueTips: ['Lopatky u sebe.', 'Kontrolovaný pohyb dolů.'], 
    commonMistakes: ['Odlepování zad.', 'Příliš rychlé tempo.'], 
    category: 'arms', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells', 'bench'], sets: 3, reps: '10' 
  },
  { 
    id: 'f29', name: 'Tlaky na ramena', description: 'Ramena.', steps: ['Press nad hlavu.'], tips: ['Brace core.'], 
    techniqueTips: ['Ruce v ose ramen.', 'Plynulý pohyb.'], 
    commonMistakes: ['Prohýbání v bedrech.', 'Příliš široký úchop.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10-12' 
  },
  { 
    id: 'f32', name: 'Bicepsový zdvih', description: 'Biceps.', steps: ['Curl.'], tips: ['Nekývat.'], 
    techniqueTips: ['Lokty drží u těla.', 'Kontrolovaný pohyb dolů.'], 
    commonMistakes: ['Švihání trupem.', 'Příliš velká váha.'], 
    category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f33', name: 'Tricepsové kliky', description: 'Triceps.', steps: ['Klik na lavičce.'], tips: ['Lokty u těla.'], 
    techniqueTips: ['Zadkem blízko lavičky.', 'Plný rozsah.'], 
    commonMistakes: ['Ramena u uší.', 'Příliš široké lokty.'], 
    category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '12' 
  },
  { 
    id: 'f35', name: 'Incline kliky', description: 'Horní hrudník.', steps: ['Ruce na bench.'], tips: ['Střed.'], 
    techniqueTips: ['Stabilní lavička.', 'Pevný postoj.'], 
    commonMistakes: ['Prohýbání zad.', 'Špatná výška lavičky.'], 
    category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '15' 
  },
  { 
    id: 'f36', name: 'Decline kliky', description: 'Dolní hrudník.', steps: ['Nohy na bench.'], tips: ['Stabilita.'], 
    techniqueTips: ['Hlava v neutrální pozici.', 'Zapojený střed.'], 
    commonMistakes: ['Zvedání ramen.', 'Nestabilní nohy.'], 
    category: 'arms', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '12' 
  },
  { 
    id: 'f37', name: 'Rozpažování', description: 'Hrudník.', steps: ['Otevřít ruce.'], tips: ['Pokrčené lokty.'], 
    techniqueTips: ['Plynulý pohyb.', 'Vnímejte tah v hrudníku.'], 
    commonMistakes: ['Příliš napnuté ruce.', 'Pohyb rameny.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f43', name: 'Kladivové zdvihy', description: 'Biceps.', steps: ['Curl kladivový.'], tips: ['Lokty v klidu.'], 
    techniqueTips: ['Dlaně směřují k sobě.', 'Stabilní lokty.'], 
    commonMistakes: ['Švihání.', 'Pohyb rameny.'], 
    category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f44', name: 'Francouzský tlak', description: 'Triceps.', steps: ['Spouštění za hlavu.'], tips: ['Lokty dovnitř.'], 
    techniqueTips: ['Lokty drží na jednom místě.', 'Pomalý pohyb dolů.'], 
    commonMistakes: ['Rozjíždění loktů.', 'Švihání váhou.'], 
    category: 'arms', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10' 
  },
  { 
    id: 'f45', name: 'Upažování', description: 'Ramena.', steps: ['Zvednout do stran.'], tips: ['Lokty vedou.'], 
    techniqueTips: ['Pohyb s malíčkem výše.', 'Kontrolovaně dolů.'], 
    commonMistakes: ['Příliš velká váha.', 'Zapojování trapézů.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '15' 
  },
  { 
    id: 'f46', name: 'Předpažování', description: 'Ramena.', steps: ['Zvednout vpřed.'], tips: ['Nekývat.'], 
    techniqueTips: ['Ruce do výšky ramen.', 'Pevný trup.'], 
    commonMistakes: ['Švihání.', 'Předklánění.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' },
  { 
    id: 'f53', name: 'Tricepsový tlak nad hlavu', description: 'Triceps.', steps: ['Závaží za hlavu.'], tips: ['Lokty u hlavy.'], 
    techniqueTips: ['Lokty směřují vpřed.', 'Plný rozsah.'], 
    commonMistakes: ['Rozbíhání loktů.', 'Prohýbání v zádech.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12' 
  },
  { 
    id: 'f55', name: 'T-kliky', description: 'Core/Hrudník.', steps: ['Klik, rotace.'], tips: ['Rovnováha.'], 
    techniqueTips: ['Rotace s pevným středem.', 'Pohled za rukou.'], 
    commonMistakes: ['Špatná stabilita.', 'Pád z rotace.'], 
    category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },

  // BACK
  { 
    id: 'f6', name: 'Přítahy JČ', description: 'Síla zad.', steps: ['Ruka na lavičce.', 'Přítah závaží k boku.'], tips: ['Stisk lopatek.'], 
    techniqueTips: ['Záda vodorovně.', 'Loket těsně u těla.'], commonMistakes: ['Rotace trupu.', 'Tahání bicepsem.'], category: 'back', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12' 
  },
  { 
    id: 'f8', name: 'Shyby', description: 'Tah horní části.', steps: ['Úchop nadhmatem.', 'Tah k hrazdě.'], tips: ['Nekývat.'], 
    techniqueTips: ['Plný rozsah pohybu.', 'Lopatky stáhnuté dolů.'], commonMistakes: ['Švihání nohama.', 'Nedostatečný rozsah.'], category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['pull-up bar'], sets: 3, reps: 'AMRAP' 
  },
  { 
    id: 'f38', name: 'Superman', description: 'Posílení beder.', steps: ['Leh na břiše.', 'Zvednout paže a nohy.'], tips: ['Pohled k zemi.'], 
    techniqueTips: ['Pomalu nahoru i dolů.', 'Aktivní zadek.'], commonMistakes: ['Příliš prudký pohyb.', 'Záklon hlavy.'], category: 'back', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' 
  },
  { 
    id: 'f54', name: 'Přítahy gumy', description: 'Síla zad.', steps: ['Upevnit gumu.', 'Přítahy k pasu.'], tips: ['Stáhnout lopatky.'], 
    techniqueTips: ['Lokty v jedné ose.', 'Zpevněný střed.'], commonMistakes: ['Shrbená záda.', 'Rychlý pohyb.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' 
  },
  { 
    id: 'f60', name: 'Renegade Row', description: 'Záda a core.', steps: ['Plank s JČ.', 'Přítah.'], tips: ['Pevné boky.'], 
    techniqueTips: ['Stabilní plank.', 'Minimální rotace.'], commonMistakes: ['Vrtění boky.', 'Příliš těžká váha.'], category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10' 
  },
  { 
    id: 'f61', name: 'Mrtvý tah', description: 'Síla zad a nohou.', steps: ['Uchop osy.', 'Zvednutí.'], tips: ['Rovná záda.'], 
    techniqueTips: ['Osa těsně u nohou.', 'Zapojit zadek.'], commonMistakes: ['Kulacení zad.', 'Špatná koordinace.'], category: 'back', duration: 12, intensity: 'high', playersNeeded: 1, equipment: ['barbell'], sets: 3, reps: '8' 
  },
  { 
    id: 'f62', name: 'Chin-Ups', description: 'Šířka zad.', steps: ['Podhmat.', 'Tah.'], tips: ['Full range.'], 
    techniqueTips: ['Bradu nad hrazdu.', 'Plné propnutí v dolní fázi.'], commonMistakes: ['Švihání.', 'Krátký rozsah.'], category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['pull-up bar'], sets: 3, reps: 'AMRAP' 
  },
  { 
    id: 'f63', name: 'Face Pulls', description: 'Zadní ramena.', steps: ['Tah k obličeji.'], tips: ['Squeeze.'], 
    techniqueTips: ['Lokty vysoko.', 'Tah k očím.'], commonMistakes: ['Tah k hrudníku.', 'Pohyb zády.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' 
  },
  { 
    id: 'f64', name: 'Good Mornings', description: 'Bedra.', steps: ['Hinge.'], tips: ['Rovná záda.'], 
    techniqueTips: ['Mírné pokrčení kolen.', 'Hlídejte si páteř.'], commonMistakes: ['Zakulacení zad.', 'Přílišný záklon.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12' 
  },
  { 
    id: 'f65', name: 'Pulldown s gumou', description: 'Široký sval zádový.', steps: ['Tah dolů.'], tips: ['Control.'], 
    techniqueTips: ['Ramena dole.', 'Plynule.'], commonMistakes: ['Ramena u uší.', 'Pohyb trupem.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' 
  },

  // CORE
  { 
    id: 'f9', name: 'Med Ball Rotace', description: 'Síla středu.', steps: ['Otočit trup.'], tips: ['Brace core.'], 
    techniqueTips: ['Síla z břicha.', 'Oči sledují míč.'], commonMistakes: ['Rotace v kolenou.', 'Špatné dýchání.'], category: 'core', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '10' 
  },
  { 
    id: 'f10', name: 'Dotyky ramen', description: 'Stabilita.', steps: ['Vysoký plank.'], tips: ['Widen feet.'], 
    techniqueTips: ['Boky ani nehnutě.', 'Zpevněný střed.'], commonMistakes: ['Vrtění zadkem.', 'Příliš rychlý pohyb.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '45s' 
  },
  { 
    id: 'f11', name: 'Pallof Press', description: 'Antirotace.', steps: ['Resist band.'], tips: ['Square.'], 
    techniqueTips: ['Ramena srovnaná.', 'Výdech při tlaku.'], commonMistakes: ['Rotace trupu.', 'Ramena u uší.'], category: 'core', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '12' 
  },
  { 
    id: 'f17', name: 'Mrtvý brouk', description: 'Stabilita.', steps: ['Protější končetiny.'], tips: ['Back pressed.'], 
    techniqueTips: ['Bedra stále na zemi.', 'Pomalý pohyb.'], commonMistakes: ['Zvedání beder.', 'Příliš rychlý pohyb.'], category: 'core', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12' 
  },
  { 
    id: 'f23', name: 'Horolezec', description: 'Kardio/Core.', steps: ['Drive knees.'], tips: ['Fast.'], 
    techniqueTips: ['Zpevněný střed.', 'Pohled do země.'], commonMistakes: ['Vysoko zadek.', 'Prohýbání.'], category: 'core', duration: 4, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '45s' 
  },
  { 
    id: 'f24', name: 'Ruský twist', description: 'Obliques.', steps: ['Rotate.'], tips: ['Core.'], 
    techniqueTips: ['Pohled za ruce.', 'Pevný střed.'], commonMistakes: ['Rotace jen rukama.', 'Kulená záda.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' 
  },
  { 
    id: 'f28', name: 'Plank', description: 'Core.', steps: ['Hold.'], tips: ['Don\'t arch.'], 
    techniqueTips: ['Aktivní břicho.', 'Pevný zadek.'], commonMistakes: ['Zvedání boků.', 'Prohýbání.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '60s' 
  },
  { 
    id: 'f34', name: 'Boční plank', description: 'Obliques.', steps: ['Bokem.'], tips: ['Straight.'], 
    techniqueTips: ['Rameno nad loktem.', 'Vysoko boky.'], commonMistakes: ['Pokles boků.', 'Rotace trupu.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '30s' 
  },
  { 
    id: 'f49', name: 'Plank Jacks', description: 'Kardio.', steps: ['Jump.'], tips: ['Stable hips.'], 
    techniqueTips: ['Pevný střed.', 'Plynulý skok.'], commonMistakes: ['Vrtění boky.', 'Přílišné skoky.'], category: 'core', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' 
  },
  { 
    id: 'f50', name: 'V-Ups', description: 'Břicho.', steps: ['Touch toes.'], tips: ['Kontrola.'], 
    techniqueTips: ['Současný pohyb.', 'Kontrolovaný návrat.'], commonMistakes: ['Švihání.', 'Zadržování dechu.'], category: 'core', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' 
  },
  { 
    id: 'f70', name: 'Zvedání nohou', description: 'Břicho.', steps: ['Raise.'], tips: ['Spodní záda.'], 
    techniqueTips: ['Bedra na zemi.', 'Pomalý pohyb.'], commonMistakes: ['Zvedání beder.', 'Rychlý dopad nohou.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' 
  },
  { 
    id: 'f71', name: 'Kolo', description: 'Břicho.', steps: ['Pedal.'], tips: ['Loket ke koleni.'], 
    techniqueTips: ['Rotace trupu.', 'Nekývat hlavou.'], commonMistakes: ['Rychlé tempo.', 'Špatná technika rotace.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' },

  // MOBILITY
  { id: 'f12', name: 'Mobilita kyčlí', description: 'Mobilita.', steps: ['Rotate.'], tips: ['Tall spine.'], techniqueTips: ['Plynule.', 'Spína rovně.'], commonMistakes: ['Rychlost.', 'Zahrbená záda.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '2 min' },
  { id: 'f13', name: 'World Stretch', description: 'Mobilita.', steps: ['Lunge.'], tips: ['Open.'], techniqueTips: ['Hluboký výpad.', 'Otevření hrudníku.'], commonMistakes: ['Nedostatečný rozsah.', 'Zadržování dechu.'], category: 'mobility', duration: 8, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '6' },
  { id: 'f14', name: 'Mobilita kotníků', description: 'Kotníky.', steps: ['Tlak.'], tips: ['Pata na zemi.'], techniqueTips: ['Pata drží.', 'Cítit tah.'], commonMistakes: ['Pata zvednutá.', 'Malý rozsah.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['wall'], sets: 2, reps: '15' },
  { id: 'f22', name: 'Inchworms', description: 'Flexibilita.', steps: ['Walk out.'], tips: ['Straight legs.'], techniqueTips: ['Rovná záda.', 'Pomalé ruce.'], commonMistakes: ['Pokrčená kolena.', 'Švih.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '8' },
  { id: 'f80', name: 'Cat Cow', description: 'Páteř.', steps: ['Arch/Round.'], tips: ['Breathe.'], techniqueTips: ['Pohyb s dechem.', 'Plynule.'], commonMistakes: ['Příliš rychlý pohyb.', 'Nedostatečný rozsah.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10' },
  { id: 'f81', name: 'Thoracic rotace', description: 'Páteř.', steps: ['Open.'], tips: ['Look hand.'], techniqueTips: ['Pohyb z hrudníku.', 'Pánev drží.'], commonMistakes: ['Rotace v bedrech.', 'Příliš velká rychlost.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10' },
  { id: 'f82', name: 'Pozice dítěte', description: 'Záda.', steps: ['Relax.'], tips: ['Stretch.'], techniqueTips: ['Dlouhé nádechy.', 'Uvolnit ramena.'], commonMistakes: ['Napětí v krku.', 'Přílišný tlak.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '1 min' },
  { id: 'f83', name: 'Holubí pozice', description: 'Kyčle.', steps: ['Stretch.'], tips: ['Breath.'], techniqueTips: ['Srovnaná pánev.', 'Plynule.'], commonMistakes: ['Rotace pánve.', 'Přílišná bolest.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '1 min' },
  { id: 'f84', name: 'Mobilita krku', description: 'Krční páteř.', steps: ['Tilt.'], tips: ['Gentle.'], techniqueTips: ['Pomalu.', 'Ramena dole.'], commonMistakes: ['Trhavý pohyb.', 'Přílišný tlak.'], category: 'mobility', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10' },
  { id: 'f85', name: 'Kruhy pažemi', description: 'Ramena.', steps: ['Circles.'], tips: ['Slow.'], techniqueTips: ['Velké kruhy.', 'Aktivně.'], commonMistakes: ['Příliš rychlý pohyb.', 'Ramena u uší.'], category: 'mobility', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '20' },

  // STABILITY
  { id: 'f15', name: 'Rumunský mrtvý tah', description: 'Hamstringy.', steps: ['Hinge.'], tips: ['Hips.'], techniqueTips: ['Rovná záda.', 'Kyčle dozadu.'], commonMistakes: ['Zakulacení.', 'Příliš pokrčená kolena.'], category: 'stability', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' },
  { id: 'f18', name: 'Bird Dog', description: 'Stabilita.', steps: ['Extension.'], tips: ['Flat back.'], techniqueTips: ['Pomalý pohyb.', 'Napnutí.'], commonMistakes: ['Rotace trupu.', 'Nedostatek napnutí.'], category: 'stability', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' },
  { id: 'f19', name: 'Kodaňský plank', description: 'Třísla.', steps: ['Bench support.'], tips: ['Hips.'], techniqueTips: ['Střed těla zpevněný.', 'Vysoko boky.'], commonMistakes: ['Prohýbání v bedrech.', 'Špatná stabilita.'], category: 'stability', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 2, reps: '30s' },
  { id: 'f20', name: 'Turecký vztyč', description: 'Stabilita.', steps: ['Get-up.'], tips: ['Watch weight.'], techniqueTips: ['Kontrola v každé fázi.', 'Pohled na činku.'], commonMistakes: ['Spěchání.', 'Pád ze stabilní pozice.'], category: 'stability', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['kettlebell'], sets: 2, reps: '5' },
  { id: 'f90', name: 'Balanc na jedné', description: 'Balanc.', steps: ['Stand.'], tips: ['Focus.'], techniqueTips: ['Pevný bod.', 'Střed.'], commonMistakes: ['Ztráta koncentrace.', 'Špatný postoj.'], category: 'stability', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '1 min' },
  { id: 'f91', name: 'Y-Raise', description: 'Držení těla.', steps: ['Raise.'], tips: ['Back.'], techniqueTips: ['Stáhnout lopatky.', 'Plynule.'], commonMistakes: ['Ramena u uší.', 'Švih.'], category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12' },
  { id: 'f92', name: 'Dead Bug s míčem', description: 'Stabilita.', steps: ['Press ball.'], tips: ['Flat.'], techniqueTips: ['Bedra stále na zemi.', 'Pevný střed.'], commonMistakes: ['Zvedání beder.', 'Přílišný tlak.'], category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '12' },
  { id: 'f93', name: 'Dřep na jedné', description: 'Stabilita.', steps: ['Squat 1 leg.'], tips: ['Slow.'], techniqueTips: ['Koleno neuhýbá.', 'Kontrolovaný pohyb.'], commonMistakes: ['Ztráta rovnováhy.', 'Přílišná rychlost.'], category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '8' },
  { id: 'f94', name: 'Boční výpad', description: 'Stabilita.', steps: ['Lunge.'], tips: ['Balance.'], techniqueTips: ['Hluboký výpad.', 'Zadní noha pevná.'], commonMistakes: ['Pata odlepená.', 'Ztráta stability.'], category: 'stability', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' },
  { 
    id: 'f95', name: 'Medvědí chůze', description: 'Celková.', steps: ['Crawl.'], tips: ['Control.'], 
    techniqueTips: ['Rovná záda.', 'Pomalé kroky.'], commonMistakes: ['Boky vysoko.', 'Nepřirozený pohyb.'], 
    category: 'stability', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20m' 
  },

  // NEW LEGS (10)
  { 
    id: 'f101', name: 'Rumunský mrtvý tah', description: 'Síla hamstringů.', steps: ['Předklon v kyčlích.', 'Rovná záda.', 'Závaží k holeni.'], tips: ['Cítit tah.'], 
    techniqueTips: ['Mírně pokrčená kolena.', 'Osa těsně u nohou.'], commonMistakes: ['Kulatá záda.', 'Přílišný předklon.'], 
    category: 'legs', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f102', name: 'Výpony na lýtkách', description: 'Síla lýtek.', steps: ['Stoj na hraně schodu.', 'Výpon na špičky.', 'Pomalý návrat.'], tips: ['Plný rozsah.'], 
    techniqueTips: ['Kontrolovaný pohyb.', 'Vteřina nahoře.'], commonMistakes: ['Rychlý pohyb.', 'Malý rozsah.'], 
    category: 'legs', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['step'], sets: 3, reps: '20' 
  },
  { 
    id: 'f103', name: 'Boční výpady', description: 'Laterální síla.', steps: ['Krok stranou.', 'Druhá noha rovně.', 'Návrat doprostřed.'], tips: ['Prsa nahoře.'], 
    techniqueTips: ['Pata na zemi.', 'Pevný postoj.'], commonMistakes: ['Předklánění.', 'Zvedání paty.'], 
    category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 na stranu' 
  },
  { 
    id: 'f104', name: 'Zvedání pánve (se závažím)', description: 'Síla hýždí.', steps: ['Leh na zádech.', 'Závaží na pánvi.', 'Zvednout vysoko.'], tips: ['Squeeze glutes.'], 
    techniqueTips: ['Váha na patách.', 'Neprohýbat bedra.'], commonMistakes: ['Příliš rychlé tempo.', 'Malý rozsah.'], 
    category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '15' 
  },
  { 
    id: 'f105', name: 'Pistol squat (s oporou)', description: 'Síla jedné nohy.', steps: ['Držet se tyče.', 'Dřep na jedné.', 'Vytlačit zpět.'], tips: ['Kontrola dolů.'], 
    techniqueTips: ['Záda co nejrovněji.', 'Pomalý sestup.'], commonMistakes: ['Pád do dřepu.', 'Koleno uhýbá dovnitř.'], 
    category: 'legs', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '6-8 na nohu' 
  },
  { 
    id: 'f106', name: 'Depth Jumps', description: 'Reaktivní síla.', steps: ['Sestup z bedny.', 'Okamžitý výskok.', 'Měkký dopad.'], tips: ['Krátký kontakt.'], 
    techniqueTips: ['Odraz hned po dopadu.', 'Zapojení paží.'], commonMistakes: ['Dlouhý pobyt na zemi.', 'Tvrdý dopad.'], 
    category: 'legs', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['box'], sets: 3, reps: '5-8' 
  },
  { 
    id: 'f107', name: 'Bruslařské skoky', description: 'Laterální výbušnost.', steps: ['Skok do strany.', 'Dopad na jednu.', 'Udržet balanc.'], tips: ['Švih pažemi.'], 
    techniqueTips: ['Měkký dopad do kolene.', 'Stabilita.'], commonMistakes: ['Ztráta rovnováhy.', 'Malé skoky.'], 
    category: 'legs', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12 na stranu' 
  },
  { 
    id: 'f108', name: 'Wall Sit (se závažím)', description: 'Izometrická výdrž.', steps: ['Opřít o zeď.', 'Sed 90 stupňů.', 'Závaží na klíně.'], tips: ['Tlačit do zdi.'], 
    techniqueTips: ['Nohy na šířku ramen.', 'Pevný střed.'], commonMistakes: ['Zvedání pat.', 'Příliš vysoký posed.'], 
    category: 'legs', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '45-60s' 
  },
  { 
    id: 'f109', name: 'Curtsy Lunges', description: 'Stabilita kyčlí.', steps: ['Krok vzad a křížem.', 'Přední noha rovně.', 'Vytlačit nahoru.'], tips: ['Rovnováha.'], 
    techniqueTips: ['Plynulý pohyb.', 'Vzpřímený trup.'], commonMistakes: ['Vytáčení pánve.', 'Ztráta balancu.'], 
    category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12 na nohu' 
  },
  { 
    id: 'f110', name: 'Předkopávání na jedné', description: 'Izolace kvadricepsu.', steps: ['Sed a propnutí.', 'Zatnout sval.', 'Pomalý návrat.'], tips: ['Nezamykat koleno.'], 
    techniqueTips: ['Kontrolovaný pohyb.', 'Konstantní napětí.'], commonMistakes: ['Švihání.', 'Příliš velká váha.'], 
    category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15 na nohu' 
  },

  // NEW ARMS (10)
  { 
    id: 'f111', name: 'Diamantové kliky', description: 'Zaměření na triceps.', steps: ['Diamant z rukou.', 'Hruď k rukám.', 'Tlak nahoru.'], tips: ['Lokty u těla.'], 
    techniqueTips: ['Dlaně pod hrudníkem.', 'Zpevněný střed.'], commonMistakes: ['Prohýbání.', 'Rozjíždění loktů.'], 
    category: 'arms', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10-15' 
  },
  { 
    id: 'f112', name: 'Kladivové zdvihy', description: 'Síla předloktí a bicepsu.', steps: ['Dlaně k sobě.', 'Zdvih k ramenům.', 'Pomalu dolů.'], tips: ['Lokty v klidu.'], 
    techniqueTips: ['Nekývat tělem.', 'Plný rozsah.'], commonMistakes: ['Švihání.', 'Pohyb rameny.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f113', name: 'Tricepsové kliky (se závažím)', description: 'Síla tricepsu.', steps: ['Váha na klíně.', 'Sestup z lavičky.', 'Tlak nahoru.'], tips: ['Plný rozsah.'], 
    techniqueTips: ['Záda blízko lavičky.', 'Lokty dozadu.'], commonMistakes: ['Ramena u uší.', 'Krátký pohyb.'], 
    category: 'arms', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['bench', 'weight'], sets: 3, reps: '8-10' 
  },
  { 
    id: 'f114', name: 'Bench press s úzkým úchopem', description: 'Triceps a vnitřní hrudník.', steps: ['Úzký úchop.', 'Spustit k hrudi.', 'Vytlačit.'], tips: ['Kontrola váhy.'], 
    techniqueTips: ['Lokty u těla.', 'Plynulý tlak.'], commonMistakes: ['Odlepování zad.', 'Příliš rychlý dopad.'], 
    category: 'arms', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells', 'bench'], sets: 3, reps: '10' 
  },
  { 
    id: 'f115', name: 'Upažování (Laterals)', description: 'Šířka ramen.', steps: ['Zdvih do stran.', 'Mírně v loktech.', 'Pomalu dolů.'], tips: ['Bez švihu.'], 
    techniqueTips: ['Lokty vedou pohyb.', 'Malíčky mírně výš.'], commonMistakes: ['Pohyb trupem.', 'Zapojení trapézů.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '15' 
  },
  { 
    id: 'f116', name: 'Předpažování', description: 'Přední delty.', steps: ['Zdvih vpřed.', 'Do výšky ramen.', 'Pomalu dolů.'], tips: ['Zpevněný střed.'], 
    techniqueTips: ['Nekývat.', 'Pevný postoj.'], commonMistakes: ['Záklon trupu.', 'Švihání.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' 
  },
  { 
    id: 'f117', name: 'Extenze nad hlavou', description: 'Délka tricepsu.', steps: ['Činka nad hlavou.', 'Spustit za hlavu.', 'Zdvih zpět.'], tips: ['Lokty u uší.'], 
    techniqueTips: ['Lokty směřují vpřed.', 'Stabilní postoj.'], commonMistakes: ['Rozjíždění loktů.', 'Prohýbání zad.'], 
    category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12' 
  },
  { 
    id: 'f118', name: 'Koncentrovaný zdvih', description: 'Izolace bicepsu.', steps: ['Sed, loket o nohu.', 'Zdvih činky.', 'Squeeze biceps.'], tips: ['Bez švihu.'], 
    techniqueTips: ['Loket se nepohybuje.', 'Plná kontrakce.'], commonMistakes: ['Pomoc druhou rukou.', 'Špatná stabilita.'], 
    category: 'arms', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12 na ruku' 
  },
  { 
    id: 'f119', name: 'Bicepsových 21', description: 'Maximální napumpování.', steps: ['7 spodní polovina.', '7 horní polovina.', '7 plný rozsah.'], tips: ['Intenzivní.'], 
    techniqueTips: ['Bez pauzy mezi fázemi.', 'Kontrola.'], commonMistakes: ['Švihání ke konci.', 'Nedokončení opakování.'], 
    category: 'arms', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 2, reps: '21' 
  },
  { 
    id: 'f120', name: 'Kliky v "Pike" pozici', description: 'Síla ramen.', steps: ['Boky vysoko.', 'Hlava k zemi.', 'Tlak nahoru.'], tips: ['Dívat se na nohy.'], 
    techniqueTips: ['Lokty nejdou příliš do stran.', 'Pevný střed.'], commonMistakes: ['Ploché tělo.', 'Špatný úhel tlaku.'], 
    category: 'arms', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10-12' 
  },

  // NEW BACK (10)
  { 
    id: 'f121', name: 'Face Pulls (s gumou)', description: 'Zadní delty a horní záda.', steps: ['Tah gumy k obličeji.', 'Lokty vysoko.', 'Stáhnout lopatky.'], tips: ['Kontrola pohybu.'], 
    techniqueTips: ['Mířit k očím.', 'Vteřina v kontrakci.'], commonMistakes: ['Tah k hrudi.', 'Pohyb trupem.'], 
    category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' 
  },
  { 
    id: 'f122', name: 'Stahování gumy (Lat pulldown)', description: 'Šířka zad.', steps: ['Guma vysoko.', 'Tah k hrudi.', 'Squeeze záda.'], tips: ['Bez švihu.'], 
    techniqueTips: ['Ramena dole.', 'Lokty k bokům.'], commonMistakes: ['Ramena u uší.', 'Krátký rozsah.'], 
    category: 'back', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '12-15' 
  },
  { 
    id: 'f123', name: 'Superman - výdrž', description: 'Vytrvalost beder.', steps: ['Leh na břiše.', 'Zvednout končetiny.', 'Výdrž 3-5s.'], tips: ['Pohled dolů.'], 
    techniqueTips: ['Plynulý pohyb.', 'Aktivní hýždě.'], commonMistakes: ['Záklon hlavy.', 'Švihání.'], 
    category: 'back', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' 
  },
  { 
    id: 'f124', name: 'Bird-Dog (se závažím)', description: 'Stabilita zad a středu.', steps: ['Vzpor klečmo.', 'Natažení končetin.', 'Činka v ruce.'], tips: ['Boky rovně.'], 
    techniqueTips: ['Pomalý pohyb.', 'Zpevněný střed.'], commonMistakes: ['Vrtění boky.', 'Prohýbání zad.'], 
    category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '10 na stranu' 
  },
  { 
    id: 'f125', name: 'Renegade Rows (střídavě)', description: 'Síla zad a jádra.', steps: ['Plank na činkách.', 'Přítah k boku.', 'Výměna stran.'], tips: ['Žádná rotace.'], 
    techniqueTips: ['Široký postoj nohou.', 'Stabilní boky.'], commonMistakes: ['Vytáčení boků.', 'Zvedání ramen.'], 
    category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '8 na ruku' 
  },
  { 
    id: 'f126', name: 'Výdrž ve shybu (isometrie)', description: 'Síla úchopu a zad.', steps: ['Přítah nahoru.', 'Maximální výdrž.', 'Pomalý sestup.'], tips: ['Prsa nahoře.'], 
    techniqueTips: ['Aktivní lopatky.', 'Nepouštět se naráz.'], commonMistakes: ['Ramena u uší.', 'Zadržování dechu.'], 
    category: 'back', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['pull-up bar'], sets: 3, reps: 'Max čas' 
  },
  { 
    id: 'f127', name: 'Invertované přítahy', description: 'Horizontální tahová síla.', steps: ['Leh pod nízkou tyčí.', 'Tah hrudi k tyči.', 'Rovné tělo.'], tips: ['Úprava výšky.'], 
    techniqueTips: ['Lopatky k sobě.', 'Pevný střed.'], commonMistakes: ['Prohýbání.', 'Krátký rozsah.'], 
    category: 'back', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['low bar'], sets: 3, reps: '10-12' 
  },
  { 
    id: 'f128', name: 'Přítah gumy jednou rukou', description: 'Unilaterální síla zad.', steps: ['Mírný stoj rozkročný.', 'Tah k boku.', 'Rameno dole.'], tips: ['Squeeze latissimus.'], 
    techniqueTips: ['Rotace dlaně k tělu.', 'Pevný postoj.'], commonMistakes: ['Tahání bicepsem.', 'Shrbená záda.'], 
    category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '12 na ruku' 
  },
  { 
    id: 'f129', name: 'Good Mornings (s gumou)', description: 'Síla zadního řetězce.', steps: ['Stoupnout na gumu.', 'Předklon v bocích.', 'Návrat nahoru.'], tips: ['Rovná záda.'], 
    techniqueTips: ['Mírně pokrčená kolena.', 'Tah v hamstringech.'], commonMistakes: ['Kulatá záda.', 'Přílišný předklon.'], 
    category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' 
  },
  { 
    id: 'f130', name: 'Krčení ramen (Shrugs)', description: 'Rozvoj trapézů.', steps: ['Činky u boků.', 'Zvednout k uším.', 'Pomalu dolů.'], tips: ['Nekroužit.'], 
    techniqueTips: ['Jen vertikální pohyb.', 'Plynule.'], commonMistakes: ['Kroužení rameny.', 'Předklon hlavy.'], 
    category: 'back', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '15' 
  },

  // NEW CORE (10)
  { 
    id: 'f131', name: 'V-Ups (se závažím)', description: 'Pokročilá síla jádra.', steps: ['Leh se závažím.', 'Dotyk u špiček.', 'Kontrola dolů.'], tips: ['Výdech nahoru.'], 
    techniqueTips: ['Současný pohyb končetin.', 'Plynulost.'], commonMistakes: ['Švihání.', 'Odlepování beder.'], 
    category: 'core', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '12' 
  },
  { 
    id: 'f132', name: 'Ruský twist (se závažím)', description: 'Síla šikmých břišních.', steps: ['Nohy nad zemí.', 'Rotace ze strany na stranu.', 'Sledovat váhu.'], tips: ['Zpevněný střed.'], 
    techniqueTips: ['Otočení celého trupu.', 'Pevná záda.'], commonMistakes: ['Rotace jen pažemi.', 'Kulatá záda.'], 
    category: 'core', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '20' 
  },
  { 
    id: 'f133', name: 'Plank Jacks (rychle)', description: 'Core a kardio.', steps: ['Pozice planku.', 'Roznožování skokem.', 'Rovná záda.'], tips: ['Stabilní boky.'], 
    techniqueTips: ['Minimální vertikální pohyb.', 'Pevný střed.'], commonMistakes: ['Vysoko zadek.', 'Prohýbání.'], 
    category: 'core', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '30s' 
  },
  { 
    id: 'f134', name: 'Horolezec (pomalý)', description: 'Zaměření na stabilitu.', steps: ['Vysoký plank.', 'Koleno k hrudi.', 'Pomalá výměna.'], tips: ['Aktivní břicho.'], 
    techniqueTips: ['Kontrolovaný pohyb.', 'Dýchejte.'], commonMistakes: ['Zrychlování.', 'Ztráta formy.'], 
    category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '45s' 
  },
  { 
    id: 'f135', name: 'Hollow Body Hold', description: 'Vytrvalost jádra.', steps: ['Leh na zádech.', 'Zvednout nohy a ramena.', 'Tlačit bedra do země.'], tips: ['Paže nad hlavu.'], 
    techniqueTips: ['Maximální napětí.', 'Nohy nízko.'], commonMistakes: ['Odlepování beder.', 'Krátká výdrž.'], 
    category: 'core', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '30-45s' 
  },
  { 
    id: 'f136', name: 'Mrtvý brouk (se závažím)', description: 'Koordinace a stabilita.', steps: ['Váha nad hrudí.', 'Natažení opačných končetin.', 'Rovná záda.'], tips: ['Pomalá kontrola.'], 
    techniqueTips: ['Závaží drží stabilně.', 'Plynulost.'], commonMistakes: ['Zvedání beder.', 'Rychlý pohyb.'], 
    category: 'core', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12 na stranu' 
  },
  { 
    id: 'f137', name: 'Zvedání nohou ve visu', description: 'Spodní břicho.', steps: ['Vis na hrazdě.', 'Zvednout nohy do 90°.', 'Pomalu dolů.'], tips: ['Bez houpání.'], 
    techniqueTips: ['Aktivní ramena.', 'Kontrolovaný návrat.'], commonMistakes: ['Švihání.', 'Nedostatečný rozsah.'], 
    category: 'core', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['pull-up bar'], sets: 3, reps: '10' 
  },
  { 
    id: 'f138', name: 'Kolo (pomalu)', description: 'Šikmé i přímé svaly.', steps: ['Loket k protějšímu koleni.', 'Pomalá rotace.', 'Natažení druhé nohy.'], tips: ['Kvalita nad rychlost.'], 
    techniqueTips: ['Plná rotace trupu.', 'Nepřetahujte krk.'], commonMistakes: ['Přílišné tempo.', 'Krátký rozsah.'], 
    category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' 
  },
  { 
    id: 'f139', name: 'Boční plank - poklesy', description: 'Laterální síla jádra.', steps: ['Boční plank.', 'Pokles boků k zemi.', 'Zvednout zpět.'], tips: ['V jedné linii.'], 
    techniqueTips: ['Loket pod ramenem.', 'Vteřina nahoře.'], commonMistakes: ['Rotace trupu.', 'Pád boků dozadu.'], 
    category: 'core', duration: 6, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '12 na stranu' 
  },
  { 
    id: 'f140', name: 'Woodchoppers (s gumou)', description: 'Rotační síla.', steps: ['Tah gumy šikmo.', 'Rotace trupu.', 'Kontrolovaný návrat.'], tips: ['Vytočit zadní nohu.'], 
    techniqueTips: ['Pevné paže.', 'Síla z břicha.'], commonMistakes: ['Pohyb jen pažemi.', 'Rychlý návrat.'], 
    category: 'core', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '12 na stranu' 
  },

  // NEW MOBILITY (10)
  { 
    id: 'f141', name: 'Holubí protažení (aktivní)', description: 'Mobilita kyčlí.', steps: ['Jedna noha vpřed, pokrčená.', 'Pokles pánve k zemi.', 'Jemné pérování.'], tips: ['Boky srovnané.'], 
    techniqueTips: ['Přední noha 90° (pokud lze).', 'Dýchejte do protažení.'], commonMistakes: ['Vytáčení pánve.', 'Zadržování dechu.'], 
    category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '1 min na stranu' 
  },
  { 
    id: 'f142', name: 'World\'s Greatest Stretch', description: 'Celková mobilita těla.', steps: ['Hluboký výpad.', 'Loket k zemi.', 'Rotace paže k nebi.'], tips: ['Soustředění na rotaci.'], 
    techniqueTips: ['Pohled za rukou.', 'Zadní noha natažená.'], commonMistakes: ['Zvedání paty.', 'Krátký rozsah.'], 
    category: 'mobility', duration: 8, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '6 na stranu' 
  },
  { 
    id: 'f143', name: 'Kroužení v kotnících', description: 'Zdraví kotníků.', steps: ['V sedě nebo ve stoje.', 'Kruhy v kotníku.', 'Výměna směrů.'], tips: ['Pomalu a široce.'], 
    techniqueTips: ['Maximální rozsah.', 'Bez pohybu kolene.'], commonMistakes: ['Přílišná rychlost.', 'Malé kruhy.'], 
    category: 'mobility', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '15 na stranu' 
  },
  { 
    id: 'f144', name: 'Hip Flips (90/90)', description: 'Vnitřní/vnější rotace kyčlí.', steps: ['Sed, nohy v 90°.', 'Přetočení kolen na druhou stranu.', 'Trup vzpřímeně.'], tips: ['Bez pomoci rukou.'], 
    techniqueTips: ['Pata drží na místě.', 'Plynulý pohyb.'], commonMistakes: ['Zahrbení zad.', 'Pomoc rukama.'], 
    category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10 na stranu' 
  },
  { 
    id: 'f145', name: 'Škorpion', description: 'Rotace páteře.', steps: ['Leh na břiše.', 'Noha k opačné ruce.', 'Hruď u země.'], tips: ['Jemné protažení.'], 
    techniqueTips: ['Ramena drží u země.', 'Plynulost.'], commonMistakes: ['Zvedání hrudi.', 'Prudký pohyb.'], 
    category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10 na stranu' 
  },
  { 
    id: 'f146', name: 'T-páteř rotace (v kleče)', description: 'Mobilita hrudní páteře.', steps: ['Vzpor klečmo, ruka na hlavě.', 'Rotace lokte k nebi.', 'Sledovat očima.'], tips: ['Boky se nehýbou.'], 
    techniqueTips: ['Rotace pouze v horní části zad.', 'Zpevněný střed.'], commonMistakes: ['Pohyb pánví.', 'Tahání krkem.'], 
    category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '12 na stranu' 
  },
  { 
    id: 'f147', name: 'Shoulder Dislocates (s gumou)', description: 'Mobilita ramen.', steps: ['Široký úchop gumy.', 'Oblouk nad hlavou.', 'K bedrům a zpět.'], tips: ['Propnuté paže.'], 
    techniqueTips: ['Plynulý pohyb.', 'Nezvedat ramena k uším.'], commonMistakes: ['Krčení v loktech.', 'Prohýbání v zádech.'], 
    category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['resistance band'], sets: 2, reps: '15' 
  },
  { 
    id: 'f148', name: 'Žába (Frog stretch)', description: 'Mobilita třísel.', steps: ['Široká kolena na zemi.', 'Pokles pánve dozadu.', 'Výdrž a dech.'], tips: ['Chodidla v linii s koleny.'], 
    techniqueTips: ['Pomalý návrat.', 'Hluboké nádechy.'], commonMistakes: ['Přílišný tlak.', 'Zahrbená záda.'], 
    category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '1-2 min' 
  },
  { 
    id: 'f149', name: 'Couch Stretch', description: 'Flexory kyčlí a kvadriceps.', steps: ['Noha na oporu/stěnu.', 'Koleno na zemi.', 'Vzpřímený trup.'], tips: ['Zatnout hýždě.'], 
    techniqueTips: ['Tlačit pánev vpřed.', 'Zpevněný střed.'], commonMistakes: ['Prohýbání beder.', 'Předklon.'], 
    category: 'mobility', duration: 6, intensity: 'low', playersNeeded: 1, equipment: ['wall'], sets: 2, reps: '1 min na nohu' 
  },
  { 
    id: 'f150', name: 'Kroužení zápěstím', description: 'Zdraví zápěstí.', steps: ['Proplést prsty.', 'Kroužení zápěstím.', 'Výměna směrů.'], tips: ['Příprava na driblink.'], 
    techniqueTips: ['Maximální rozsah.', 'Uvolněné ruce.'], commonMistakes: ['Trhavý pohyb.', 'Malý rozsah.'], 
    category: 'mobility', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '20' 
  },

  // NEW STABILITY (10)
  { 
    id: 'f151', name: 'Balanc na jedné (zavřené oči)', description: 'Pokročilá propriocepce.', steps: ['Stoj na jedné noze.', 'Zavřít oči.', 'Výdrž 30s.'], tips: ['Buďte blízko zdi.'], 
    techniqueTips: ['Zpevněný střed.', 'Aktivní chodidlo.'], commonMistakes: ['Pokládání druhé nohy.', 'Zadržování dechu.'], 
    category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '30s na nohu' 
  },
  { 
    id: 'f152', name: 'Kodaňský plank (krátká páka)', description: 'Stabilita třísel.', steps: ['Koleno na lavičce.', 'Zvednout spodní nohu.', 'Boční plank.'], tips: ['Vysoko boky.'], 
    techniqueTips: ['Tělo v jedné linii.', 'Pevné rameno.'], commonMistakes: ['Pokles pánve.', 'Rotace trupu.'], 
    category: 'stability', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 2, reps: '30s na stranu' 
  },
  { 
    id: 'f153', name: 'Turecký vztyč (částečný)', description: 'Stabilita ramene a jádra.', steps: ['Leh, ruka natažená.', 'Vztyč na loket.', 'Kontrolovaný návrat.'], tips: ['Sledovat váhu očima.'], 
    techniqueTips: ['Rameno stabilní.', 'Plynulost.'], commonMistakes: ['Pokrčení paže.', 'Spěchání.'], 
    category: 'stability', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['kettlebell'], sets: 3, reps: '8 na stranu' 
  },
  { 
    id: 'f154', name: 'Pallof Press (výdrž)', description: 'Vytrvalost v antirotaci.', steps: ['Držet nataženou gumu.', 'Odolat tahu do strany.', 'Čelní postoj.'], tips: ['Nenaklánět se.'], 
    techniqueTips: ['Ramena dole.', 'Zpevněný celý střed.'], commonMistakes: ['Vytáčení trupu.', 'Povolené břicho.'], 
    category: 'stability', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '30s na stranu' 
  },
  { 
    id: 'f155', name: 'Medvědí chůze (pozadu)', description: 'Koordinace a stabilita.', steps: ['Chůze vzad na všech čtyřech.', 'Opačná ruka/noha.', 'Boky nízko.'], tips: ['Kontrola tempa.'], 
    techniqueTips: ['Kolena těsně nad zemí.', 'Rovná záda.'], commonMistakes: ['Vysoko zadek.', 'Mimochod (stejná ruka/noha).'], 
    category: 'stability', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15m' 
  },
  { 
    id: 'f156', name: 'Y-Raise (v leže)', description: 'Stabilita lopatek.', steps: ['Leh na břiše.', 'Zvednout paže do tvaru Y.', 'Squeeze lopatky.'], tips: ['Palce nahoru.'], 
    techniqueTips: ['Hlava v neutrální pozici.', 'Plynule.'], commonMistakes: ['Zvedání ramen k uším.', 'Švihání.'], 
    category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' 
  },
  { 
    id: 'f157', name: 'Mrtvý brouk (tlak do míče)', description: 'Stabilita předního jádra.', steps: ['Tlak míče mezi koleno/ruku.', 'Natažení opačných končetin.', 'Udržet tlak.'], tips: ['Drtit míč.'], 
    techniqueTips: ['Bedra u země.', 'Maximální napětí.'], commonMistakes: ['Odlepování zad.', 'Povolení tlaku.'], 
    category: 'stability', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '10 na stranu' 
  },
  { 
    id: 'f158', name: 'Single-Leg RDL (Airplane)', description: 'Stabilita kyčle a kotníku.', steps: ['Předklon na jedné noze.', 'Rotace trupu do strany.', 'Návrat do roviny.'], tips: ['Zadní noha natažená.'], 
    techniqueTips: ['Pomalá rotace.', 'Fixovaný bod.'], commonMistakes: ['Ztráta balancu.', 'Zakulacení zad.'], 
    category: 'stability', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '8 na stranu' 
  },
  { 
    id: 'f159', name: 'Plank s dotykem ramen', description: 'Antirotační síla.', steps: ['Vysoký plank.', 'Dotyk opačného ramene.', 'Boky se nehýbou.'], tips: ['Širší postoj nohou.'], 
    techniqueTips: ['Ruce pod rameny.', 'Pevné břicho.'], commonMistakes: ['Vrtění boky.', 'Příliš rychlý pohyb.'], 
    category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15 na stranu' 
  },
  { 
    id: 'f160', name: 'Bird-Dog (isometrická výdrž)', description: 'Celková stabilita těla.', steps: ['Natažení opačných končetin.', 'Výdrž 15 sekund.', 'Výměna stran.'], tips: ['Maximální tenze.'], 
    techniqueTips: ['Tlačit ruku vpřed, nohu vzad.', 'Pevný střed.'], commonMistakes: ['Prohýbání v bedrech.', 'Krátká výdrž.'], 
    category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '5 na stranu' 
  }
];

