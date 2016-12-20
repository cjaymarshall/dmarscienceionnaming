var ionArray = [
	{ionId: 0, ions: "H", ionCharge: "\u207A", ionName: "Hydrogen", ionNameA: "Hydride", ionNameB: "Hydrate", ionNameC: "Monohydride", ionNameD: "Hydrogen (I)", explanation: 0},
	{ionId: 1, ions: "Li", ionCharge: "\u207A", ionName: "Lithium", ionNameA: "Hypolithite", ionNameB: "Lithate", ionNameC: "Perlithate", ionNameD: "Lithium(I)", explanation: 0},
	{ionId: 2, ions: "Na", ionCharge: "\u207A", ionName: "Sodium", ionNameA: "Sodide", ionNameB: "Persodate", ionNameC: "Sodium(I)", ionNameD: "Monosodate", explanation: 0},
	{ionId: 3, ions: "K", ionCharge: "\u207A", ionName: "Potassium", ionNameA: "Potassidate", ionNameB: "Monopatassium", ionNameC: "Potassium(I)", ionNameD: "Hypopotasside", explanation: 0},
	{ionId: 4, ions: "Rb", ionCharge: "\u207A", ionName: "Rubidium", ionNameA: "Rubidiate", ionNameB: "Rubidium (I)", ionNameC: "Rubidiide", ionNameD: "Hyporubidiate", explanation: 0},
	{ionId: 5, ions: "Cs", ionCharge:"\u207A", ionName: "Cesium", ionNameA: "Cesiide", ionNameB: "Percesiate", ionNameC: "Cesium(I)", ionNameD: "Cesiate", explanation: 0},
	{ionId: 6, ions: "Mg", ionCharge: "\u00B2\u207A", ionName: "Magnesium", ionNameA: "Magnesiide", ionNameB: "Permagnesidate", ionNameC: "Magnesium (II)", ionNameD: "Hypomagnesidate", explanation:0},
	{ionId: 7, ions: "Ca", ionCharge: "\u00B2\u207A", ionName: "Calcium", ionNameA: "Calcite", ionNameB: "Percalciate", ionNameC: "Calcium (II)" , ionNameD: "Monopercalcide", explanation: 0},
	{ionId: 8, ions: "Sr", ionCharge: "\u00B2\u207A", ionName: "Strontium", ionNameA: "Perstrontiate", ionNameB: "Monostrontium", ionNameC: "Strontium (II)", ionNameD: "Strontide", explanation: 0},
	{ionId: 9, ions: "Ba", ionCharge: "\u00B2\u207A", ionName: "Barium", ionNameA: "Baride", ionNameB: "Perbarite", ionNameC: "Barium (II)", ionNameD: "Hypobarite", explanation: 0},
	{ionId: 10, ions: "Ra", ionCharge: "\u00B2\u207A", ionName: "Radium", ionNameA: "Radiate", ionNameB: "Hyporadiate", ionNameC: "Radiite", ionNameD: "Radium (II)", explanation: 0},
	{ionId: 11, ions: "Sc", ionCharge: "\u00B3\u207A", ionName: "Scandium (III)",  ionNameA: "Scandium", ionNameB: "Perscandiate", ionNameC: "Hyposcandiite", ionNameD: "Scandiate", explanation: 1},
	{ionId: 12, ions: "Y", ionCharge: "\u00B3\u207A", ionName: "Yttrium (III)", ionNameA: "Yttrium", ionNameB: "Yttriate", ionNameC: "Monoyttriide", ionNameD: "Peryttriate", explanation: 1},
	{ionId: 13, ions: "Lu", ionCharge: "\u00B3\u207A", ionName: "Lutetium (III)", ionNameA: "Lutetium", ionNameB: "Lutetiate", ionNameC: "Hypolutetiate", ionNameD: "Monolutetiate", explanation: 1},
	{ionId: 14, ions: "Lr", ionCharge: "\u00B3\u207A", ionName: "Lawrencium (III)", ionNameA: "Lawrencium", ionNameB: "Perlawrenciate", ionNameC: "Lawrenciide", ionNameD:"Hypolawrenciide", explanation: 1},
	{ionId: 15, ions: "Ti", ionCharge: "\u00B3\u207A", ionName: "Titanium (III)", ionNameA: "Titanium", ionNameB: "Monotitanium", ionNameC: "Hypotitaniite", ionNameD: "Titaniate", explanation: 1},
	{ionId: 16, ions: "Ti", ionCharge: "\u2074\u207A", ionName: "Titanium (IV)", ionNameA: "Titanium", ionNameB: "Pertitaniate", ionNameC: "Hypotitaniate", ionNameD: "Titaniite", explanation: 1},
	{ionId: 17, ions: "Zr", ionCharge: "\u2074\u207A", ionName: "Zirconium (IV)", ionNameA: "Zirconium", ionNameB: "Zirconate", ionNameC: "Zirconite", ionNameD: "Perzirconate", explanation: 1},
	{ionId: 18, ions: "Hf", ionCharge: "\u2074\u207A", ionName: "Hafnium (IV)", ionNameA: "Hafnium", ionNameB: "Hafniate", ionNameC: "Perhafniate", ionNameD: "Monohafnium", explanation: 1},
	{ionId: 19,	ions: "Rf", ionCharge: "\u2074\u207A", ionName: "Rutherfordium (IV)", ionNameA: "Rutherfordium", ionNameB: "Rutherfordiate", ionNameC: "Monorutherfordium", ionNameD: "Hyporutherfordiite", explanation: 1},
	{ionId: 20, ions: "V", ionCharge: "\u00B2\u207A", ionName: "Vanadium (II)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Hypovanadite", ionNameD: "Pervanadate", explanation: 1},
	{ionId: 21, ions: "V", ionCharge: "\u00B3\u207A", ionName: "Vanadium (III)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Hypovanadite", ionNameD: "Pervanadate", explanation: 1},
	{ionId: 22, ions: "V", ionCharge: "\u2074\u207A", ionName: "Vanadium (IV)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Hypovanadite", ionNameD: "Pervanadate", explanation: 1},
	{ionId: 23, ions: "V", ionCharge: "\u2075\u207A", ionName: "Vanadium (V)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Hypovanadite", ionNameD: "Pervanadate", explanation: 1},
	{ionId: 24, ions: "Nb", ionCharge: "\u00B3\u207A", ionName: "Niobium (III)", ionNameA: "Niobium", ionNameB: "Niobiate", ionNameC: "Mononiobium", ionNameD: "Niobiite", explanation: 1},
	{ionId: 25, ions: "Nb", ionCharge: "\u2074\u207A", ionName: "Niobium (IV)", ionNameA: "Niobium", ionNameB: "Niobiite", ionNameC: "Perniobiate", ionNameD: "Niobiate", explanation: 1},
	{ionId: 26, ions: "Nb", ionCharge: "\u2075\u207A", ionName: "Niobium (V)", ionNameA: "Niobium", ionNameB: "Hyponiobiite", ionNameC: "Perniobiate", ionNameD: "Perniobiate", explanation: 1},
	{ionId: 27, ions: "Ta", ionCharge: "\u00B3\u207A", ionName: "Tantalum (III)", ionNameA: "Tantalum", ionNameB: "Tantalate", ionNameC: "Pertantalate", ionNameD: "Hypotantalite", explanation: 1},
	{ionId: 28, ions: "Ta", ionCharge: "\u2074\u207A", ionName: "Tantalum (IV)", ionNameA: "Tantalum", ionNameB: "Tantalate", ionNameC: "Monotantalum", ionNameD: "Tantalite", explanation: 1},
	{ionId: 29, ions: "Ta", ionCharge: "\u2075\u207A", ionName: "Tantalum (V)", ionNameA: "Tantalum", ionNameB: "Tantalate", ionNameC: "Tantalite", ionNameD: "Pertantalite", explanation: 1},
	{ionId: 30, ions: "Db", ionCharge: "\u2075\u207A", ionName: "Dubnium (V)", ionNameA: "Dubnium", ionNameB: "Dubniate", ionNameC: "Perdubniate", ionNameD: "Monodubnium", explanation: 1},
	{ionId: 31, ions: "Cr", ionCharge: "\u00B3\u207A", ionName: "Chromium (III)", ionNameA: "Chromium", ionNameB: "Chromide", ionNameC: "Perchromate", ionNameD: "Hypochromite", explanation: 1},
	{ionId: 32, ions: "Cr", ionCharge: "\u2076\u207A", ionName: "Chromium (VI)", ionNameA: "Chromium", ionNameB: "Chromide", ionNameC: "Perchromate", ionNameD: "Chromite", explanation: 1},
	{ionId: 33, ions: "Mo", ionCharge: "\u00B2\u207A", ionName: "Molybdenum (II)", ionNameA: "Molybdenum", ionNameB: "Molybdenide", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 34, ions: "Mo", ionCharge: "\u00B3\u207A", ionName: "Molybdenum (III)", ionNameA: "Molybdenum", ionNameB: "Molybdenide", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 35, ions: "Mo", ionCharge:"\u2074\u207A", ionName: "Molybdenum (IV)", ionNameA: "Molybdenum", ionNameB: "Molybdenide", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 36, ions: "Mo", ionCharge:"\u2075\u207A", ionName: "Molybdenum (V)", ionNameA: "Molybdenum", ionNameB: "Molybdenate", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 37, ions: "Mo", ionCharge: "\u2076\u207A", ionName: "Molybdenum (VI)", ionNameA: "Molybdenum", ionNameB: "Molybdenate", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 38, ions: "W", ionCharge: "\u00B2\u207A", ionName: "Tungsten(II)", ionNameA: "Tungsten", ionNameB: "Tungstide", ionNameC: "Hypotungstite", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 39, ions: "W", ionCharge: "\u00B3\u207A", ionName: "Tungsten(III)", ionNameA: "Tungsten", ionNameB: "Tungstide", ionNameC: "Hypotungstite", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 40, ions: "W", ionCharge: "\u2074\u207A", ionName: "Tungsten(IV)", ionNameA: "Tungsten", ionNameB: "Tungstide", ionNameC: "Hypotungstite", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 41, ions: "W", ionCharge: "\u2075\u207A", ionName: "Tungsten(V)", ionNameA: "Tungsten", ionNameB: "Tungstate", ionNameC: "Hypotungstite", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 42, ions: "W", ionCharge: "\u2076\u207A", ionName: "Tungsten(VI)", ionNameA: "Tungsten", ionNameB: "Tungstate", ionNameC: "Hypotungstite", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 43, ions: "Sg", ionCharge: "\u2076\u207A", ionName: "Seaborgium(VI)", ionNameA: "Seaborgium", ionNameB: "Seaborgide", ionNameC: "Seaborgate", ionNameD: "Perseaborgate", explanation: 1},
	{ionId: 44, ions: "Mn", ionCharge: "\u00B2\u207A", ionName: "Manganese(II)", ionNameA: "Manganese", ionNameB: "Manganide", ionNameC: "Manganate", ionNameD: "Permanganate", explanation: 1},
	{ionId: 45, ions: "Mn", ionCharge: "\u00B3\u207A", ionName: "Manganese(III)", ionNameA: "Manganese", ionNameB: "Manganide", ionNameC: "Manganate", ionNameD: "Permanganate", explanation: 1},
	{ionId: 46, ions: "Mn", ionCharge: "\u2074\u207A", ionName: "Manganese(IV)", ionNameA: "Manganese", ionNameB: "Manganide", ionNameC: "Manganate", ionNameD: "Permanganate", explanation: 1},
	{ionId: 47, ions: "Mn", ionCharge: "\u2076\u207A", ionName: "Manganese(VI)", ionNameA: "Manganese", ionNameB: "Manganite", ionNameC: "Manganate", ionNameD: "Permanganate", explanation: 1},
	{ionId: 48, ions: "Mn", ionCharge: "\u2077\u207A", ionName: "Manganese(VII)", ionNameA: "Manganese", ionNameB: "Manganite", ionNameC: "Manganate", ionNameD: "Permanganate", explanation: 1},
	{ionId: 49, ions: "Tc", ionCharge: "\u00B2\u207A", ionName: "Technetium(II)", ionNameA: "Technetiide", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 50, ions: "Tc", ionCharge: "\u00B3\u207A", ionName: "Technetium(III)", ionNameA: "Technetiide", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 51, ions: "Tc", ionCharge: "\u2074\u207A", ionName: "Technetium(IV)", ionNameA: "Technetiide", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 52, ions: "Tc", ionCharge: "\u2075\u207A", ionName: "Technetium(V)", ionNameA: "Technetiite", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 53, ions: "Tc", ionCharge: "\u2076\u207A", ionName: "Technetium(VI)", ionNameA: "Technetiite", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 54, ions: "Tc", ionCharge: "\u2077\u207A", ionName: "Technetium(VII)", ionNameA: "Technetiite", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 55, ions: "Re", ionCharge: "\u00B2\u207A", ionName: "Rhenium(II)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenide", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 56, ions: "Re", ionCharge: "\u00B3\u207A", ionName: "Rhenium(III)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenide", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 57, ions: "Re", ionCharge: "\u2074\u207A", ionName: "Rhenium(IV)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenide", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 58, ions: "Re", ionCharge: "\u2075\u207A", ionName: "Rhenium(V)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenite", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 59, ions: "Re", ionCharge: "\u2076\u207A", ionName: "Rhenium(VI)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenite", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 60, ions: "Re", ionCharge: "\u2077\u207A", ionName: "Rhenium(VII)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenite", ionNameD: "Perrhenate", explanation: 1}
/*	{ionId: 61, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 62, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 63, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 64, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 65, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 66, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 67, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 68, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 69, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 70, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 71, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 72, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 73, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 74, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 75, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 76, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 77, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 78, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 79, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 80, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 81, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 82, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 83, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 84, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 85,	ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 86, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 87, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 88, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 89, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 90, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 91, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 92, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 93, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 94, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 95, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 96, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 97, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 98, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 99, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 100, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 101, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 101, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 102, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 103, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 104, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 105, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 106, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 107, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 108, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 109, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 110, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 111, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 112, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 113, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 114, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 115, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 116, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 117, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 118, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 119, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },	
	{ionId: 120, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 121, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 122, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 123, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 124, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 125, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 126, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 126, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 127, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 128, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 129, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 130, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 131, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 132, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 133, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 134, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: },
	{ionId: 135, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 136, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 137, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 138, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 139, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 140, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 141, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 142, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 143, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 144, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 145, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 146, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 147, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 148, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 149, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 150, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 151, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 152, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 153, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 154, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 155, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 156, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 157, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 158, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 159, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 160, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 161, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 162, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 163, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 164, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 165, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 166, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 167, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 168, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 169, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 170, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 171, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 172, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 173, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 174, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 175, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 176, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 177, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 178, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 179, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 180, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 181, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 182, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 183, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 184, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 185, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }	
	{ionId: 186, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 187, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 188, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 189, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 190, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 191, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 192, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 193, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 194, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 195, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 196, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 197, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 198, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 199, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 200, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 200, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 201, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 202, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 203, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 204, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 205, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 206, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 207, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 208, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 209, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 210, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 211, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 212, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 213, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 214, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 215, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 216, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 217, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 218, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 219, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }	
	{ionId: 220, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 221, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 222, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 223, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 224, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 225, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 226, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 227, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 228, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 229, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 230, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 231, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 232, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 233, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 234, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 235, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 236, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 237, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 238, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 239, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 240, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 241, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 242, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 243, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 244, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 245, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 246, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 247, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 248, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 249, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 250, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 251, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 252, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 253, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 254, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 255, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 256, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 257, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 258, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 259, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 260, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 261, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 262, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 263, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 264, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 265, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 266, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 267, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 268, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 269, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 270, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 271, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 272, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 273, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 274, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 275, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 276, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 277, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 278, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 279, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 280, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 281, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 282, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 283, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 284, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 285, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: } 	
	{ionId: 286, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 287, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 288, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 289, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 290, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 291, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 292, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 293, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 294, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 295, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 296, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 297, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 298, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 299, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
	{ionId: 300, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }


*/
]	

var youMustKnowIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 23, 26, 29/*, 31, 32, 35, 37,
 40, 42, 44, 46, 48, 51, 54, 62, 63, 73, 79, 80, 83, 84, 85, 88, 89, 90, 91, 92, 93, 94, 95, 96 ,97, 98, 99,
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
   121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141,
    142, 143, 144, 145, 146, 147, 149, 150, 151, 152, 153, 154, 156, 157, 158, 159, 160, 161, 164, 165, 166,
     167, 168, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 189, 191, 192, 193,
      194, 195, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 212, 214, 215, 216, 217, 219, 220*/]

var monoatomicIonIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]



















              
