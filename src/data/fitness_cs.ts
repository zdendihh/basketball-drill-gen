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
  { id: 'f95', name: 'Medvědí chůze', description: 'Celková.', steps: ['Crawl.'], tips: ['Control.'], techniqueTips: ['Rovná záda.', 'Pomalé kroky.'], commonMistakes: ['Boky vysoko.', 'Nepřirozený pohyb.'], category: 'stability', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20m' }
];
