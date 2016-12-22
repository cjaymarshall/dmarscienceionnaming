var ionArray = [
	{ionId: 0, ions: "H", ionCharge: "\u207A", ionName: "Hydrogen", ionNameA: "Hydride", ionNameB: "Hydrate", ionNameC: "Monohydride", ionNameD: "Hydrogen (I)", explanation: 0},
	{ionId: 1, ions: "Li", ionCharge: "\u207A", ionName: "Lithium", ionNameA: "Lithous", ionNameB: "Lithate", ionNameC: "Perlithate", ionNameD: "Lithium(I)", explanation: 0},
	{ionId: 2, ions: "Na", ionCharge: "\u207A", ionName: "Sodium", ionNameA: "Sodide", ionNameB: "Sodic", ionNameC: "Sodium(I)", ionNameD: "Monosodate", explanation: 0},
	{ionId: 3, ions: "K", ionCharge: "\u207A", ionName: "Potassium", ionNameA: "Potassic", ionNameB: "Monopatassium", ionNameC: "Potassium(I)", ionNameD: "Hypopotasside", explanation: 0},
	{ionId: 4, ions: "Rb", ionCharge: "\u207A", ionName: "Rubidium", ionNameA: "Rubidiate", ionNameB: "Rubidium (I)", ionNameC: "Rubidiide", ionNameD: "Rubidic", explanation: 0},
	{ionId: 5, ions: "Cs", ionCharge:"\u207A", ionName: "Cesium", ionNameA: "Cesiide", ionNameB: "Cesious", ionNameC: "Cesium(I)", ionNameD: "Cesiate", explanation: 0},
	{ionId: 6, ions: "Mg", ionCharge: "\u00B2\u207A", ionName: "Magnesium", ionNameA: "Magneside", ionNameB: "Permagnesidate", ionNameC: "Magnesium (II)", ionNameD: "Magnesic", explanation:0},
	{ionId: 7, ions: "Ca", ionCharge: "\u00B2\u207A", ionName: "Calcium", ionNameA: "Calcite", ionNameB: "Monocalcium", ionNameC: "Calcium (II)" , ionNameD: "Calcious", explanation: 0},
	{ionId: 8, ions: "Sr", ionCharge: "\u00B2\u207A", ionName: "Strontium", ionNameA: "Strontious", ionNameB: "Monostrontium", ionNameC: "Strontium (II)", ionNameD: "Strontide", explanation: 0},
	{ionId: 9, ions: "Ba", ionCharge: "\u00B2\u207A", ionName: "Barium", ionNameA: "Baride", ionNameB: "Baric", ionNameC: "Barium (II)", ionNameD: "Hypobarite", explanation: 0},
	{ionId: 10, ions: "Ra", ionCharge: "\u00B2\u207A", ionName: "Radium", ionNameA: "Radiate", ionNameB: "Hyporadiate", ionNameC: "Radiite", ionNameD: "Radium (II)", explanation: 0},
	{ionId: 11, ions: "Sc", ionCharge: "\u00B3\u207A", ionName: "Scandium (III)",  ionNameA: "Scandium", ionNameB: "Scandious", ionNameC: "Scandium (II)", ionNameD: "Scandiate", explanation: 1},
	{ionId: 12, ions: "Y", ionCharge: "\u00B3\u207A", ionName: "Yttrium (III)", ionNameA: "Yttrium", ionNameB: "Yttriate", ionNameC: "Monoyttriide", ionNameD: "Yttrium (IV)", explanation: 1},
	{ionId: 13, ions: "Lu", ionCharge: "\u00B3\u207A", ionName: "Lutetium (III)", ionNameA: "Lutetium", ionNameB: "Lutetiate", ionNameC: "Hypolutetiate", ionNameD: "Lutetium (V)", explanation: 1},
	{ionId: 14, ions: "Lr", ionCharge: "\u00B3\u207A", ionName: "Lawrencium (III)", ionNameA: "Lawrencium", ionNameB: "Perlawrenciate", ionNameC: "Lawrenciide", ionNameD:"Lawrencium (VI)", explanation: 1},
	{ionId: 15, ions: "Ti", ionCharge: "\u00B3\u207A", ionName: "Titanium (III)", ionNameA: "Titanium", ionNameB: "Titanium (IV)", ionNameC: "Titanic", ionNameD: "Titaniate", latin: "Titanous", explanation: 4},
	{ionId: 16, ions: "Ti", ionCharge: "\u2074\u207A", ionName: "Titanium (IV)", ionNameA: "Titanium", ionNameB: "Titanium (III)", ionNameC: "Titanous", ionNameD: "Titaniite", latin: "Titanic", explanation: 4},
	{ionId: 17, ions: "Zr", ionCharge: "\u2074\u207A", ionName: "Zirconium (IV)", ionNameA: "Zirconium", ionNameB: "Zirconate", ionNameC: "Zirconite", ionNameD: "Zirconium (VI)", explanation: 1},
	{ionId: 18, ions: "Hf", ionCharge: "\u2074\u207A", ionName: "Hafnium (IV)", ionNameA: "Hafnium", ionNameB: "Hafniate", ionNameC: "Hafnious", ionNameD: "Hafnium (II)", explanation: 1},
	{ionId: 19,	ions: "Rf", ionCharge: "\u2074\u207A", ionName: "Rutherfordium (IV)", ionNameA: "Rutherfordium", ionNameB: "Rutherfordiate", ionNameC: "Monorutherfordium", ionNameD: "Rutherfordium (VI)", explanation: 1},
	{ionId: 20, ions: "V", ionCharge: "\u00B2\u207A", ionName: "Vanadium (II)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Vanadium (III)", ionNameD: "Vanadous", explanation: 1},
	{ionId: 21, ions: "V", ionCharge: "\u00B3\u207A", ionName: "Vanadium (III)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Vanadium (II)", ionNameD: "Vanadic", latin: "Vanadous", explanation: 4},
	{ionId: 22, ions: "V", ionCharge: "\u2074\u207A", ionName: "Vanadium (IV)", ionNameA: "Vanadium", ionNameB: "Vanadate", ionNameC: "Vanadium (VI)", ionNameD: "Vanadous", explanation: 1},
	{ionId: 23, ions: "V", ionCharge: "\u2075\u207A", ionName: "Vanadium (V)", ionNameA: "Vanadium", ionNameB: "Vanadium (IV)", ionNameC: "Hypovanadite", ionNameD: "Vanadous", latin: "Vanadic", explanation: 4},
	{ionId: 24, ions: "Nb", ionCharge: "\u00B3\u207A", ionName: "Niobium (III)", ionNameA: "Niobium", ionNameB: "Niobiate", ionNameC: "Niobium (IV)", ionNameD: "Niobiite", explanation: 1},
	{ionId: 25, ions: "Nb", ionCharge: "\u2074\u207A", ionName: "Niobium (IV)", ionNameA: "Niobium", ionNameB: "Niobium (III)", ionNameC: "Perniobiate", ionNameD: "Niobious", explanation: 1},
	{ionId: 26, ions: "Nb", ionCharge: "\u2075\u207A", ionName: "Niobium (V)", ionNameA: "Niobium", ionNameB: "Niobium (IV)", ionNameC: "Perniobiate", ionNameD: "Perniobiate", explanation: 1},
	{ionId: 27, ions: "Ta", ionCharge: "\u00B3\u207A", ionName: "Tantalum (III)", ionNameA: "Tantalum", ionNameB: "Tantalum (IV)", ionNameC: "Pertantalate", ionNameD: "Hypotantalite", explanation: 1},
	{ionId: 28, ions: "Ta", ionCharge: "\u2074\u207A", ionName: "Tantalum (IV)", ionNameA: "Tantalum", ionNameB: "Tantalate", ionNameC: "Tantalum (V)", ionNameD: "Tantalous", explanation: 1},
	{ionId: 29, ions: "Ta", ionCharge: "\u2075\u207A", ionName: "Tantalum (V)", ionNameA: "Tantalum", ionNameB: "Tantalate", ionNameC: "Tantalite", ionNameD: "Tantalum (III)", explanation: 1},
	{ionId: 30, ions: "Db", ionCharge: "\u2075\u207A", ionName: "Dubnium (V)", ionNameA: "Dubnium", ionNameB: "Dubniate", ionNameC: "Dubium (VII)", ionNameD: "Monodubnium", explanation: 1},
	{ionId: 31, ions: "Cr", ionCharge: "\u00B3\u207A", ionName: "Chromium (III)", ionNameA: "Chromium", ionNameB: "Chromide", ionNameC: "Chromium (VI)", ionNameD: "Chromic", latin: "Chromic", explanation: 4},
	{ionId: 32, ions: "Cr", ionCharge: "\u2076\u207A", ionName: "Chromium (VI)", ionNameA: "Chromium", ionNameB: "Chromium (III)", ionNameC: "Perchromate", ionNameD: "Chromite", explanation: 1},
	{ionId: 33, ions: "Mo", ionCharge: "\u00B2\u207A", ionName: "Molybdenum (II)", ionNameA: "Molybdenum", ionNameB: "Molybdenum (VI)", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 34, ions: "Mo", ionCharge: "\u00B3\u207A", ionName: "Molybdenum (III)", ionNameA: "Molybdenum", ionNameB: "Molybdenide", ionNameC: "Molybdenum (V)", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 35, ions: "Mo", ionCharge:"\u2074\u207A", ionName: "Molybdenum (IV)", ionNameA: "Molybdenum", ionNameB: "Molybdenide", ionNameC: "Permolybdate", ionNameD: "Molybdenum (II)", explanation: 1},
	{ionId: 36, ions: "Mo", ionCharge:"\u2075\u207A", ionName: "Molybdenum (V)", ionNameA: "Molybdenum", ionNameB: "Molybdenate", ionNameC: "Molybdenum (III)", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 37, ions: "Mo", ionCharge: "\u2076\u207A", ionName: "Molybdenum (VI)", ionNameA: "Molybdenum", ionNameB: "Molybdenum (V)", ionNameC: "Permolybdate", ionNameD: "Molybdenite", explanation: 1},
	{ionId: 38, ions: "W", ionCharge: "\u00B2\u207A", ionName: "Tungsten (II)", ionNameA: "Tungsten", ionNameB: "Tungstide", ionNameC: "Tungsten (III)", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 39, ions: "W", ionCharge: "\u00B3\u207A", ionName: "Tungsten (III)", ionNameA: "Tungsten", ionNameB: "Tungstide", ionNameC: "Hypotungstite", ionNameD: "Tungsten (I)", explanation: 1},
	{ionId: 40, ions: "W", ionCharge: "\u2074\u207A", ionName: "Tungsten (IV)", ionNameA: "Tungsten", ionNameB: "Tungsten (II)", ionNameC: "Hypotungstite", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 41, ions: "W", ionCharge: "\u2075\u207A", ionName: "Tungsten (V)", ionNameA: "Tungsten", ionNameB: "Tungstate", ionNameC: "Tungstent (IV)", ionNameD: "Pertungstate", explanation: 1},
	{ionId: 42, ions: "W", ionCharge: "\u2076\u207A", ionName: "Tungsten (VI)", ionNameA: "Tungsten", ionNameB: "Tungstate", ionNameC: "Hypotungstite", ionNameD: "Tungstent (V)", explanation: 1},
	{ionId: 43, ions: "Sg", ionCharge: "\u2076\u207A", ionName: "Seaborgium (VI)", ionNameA: "Seaborgium", ionNameB: "Seaborgide", ionNameC: "Seaborgate", ionNameD: "Seaborgium (III)", explanation: 1},
	{ionId: 44, ions: "Mn", ionCharge: "\u00B2\u207A", ionName: "Manganese (II)", ionNameA: "Manganese", ionNameB: "Manganide", ionNameC: "Manganese (III)", ionNameD: "Manganic", latin: "Manganous", explanation: 4},
	{ionId: 45, ions: "Mn", ionCharge: "\u00B3\u207A", ionName: "Manganese (III)", ionNameA: "Manganese", ionNameB: "Manganese (II)", ionNameC: "Manganate", ionNameD: "Manganous", latin: "Manganic", explanation: 4},
	{ionId: 46, ions: "Mn", ionCharge: "\u2074\u207A", ionName: "Manganese (IV)", ionNameA: "Manganese", ionNameB: "Manganide", ionNameC: "Manganate", ionNameD: "Manganese (V)", explanation: 1},
	{ionId: 47, ions: "Mn", ionCharge: "\u2076\u207A", ionName: "Manganese (VI)", ionNameA: "Manganese", ionNameB: "Manganese (VII)", ionNameC: "Manganate", ionNameD: "Permanganate", explanation: 1},
	{ionId: 48, ions: "Mn", ionCharge: "\u2077\u207A", ionName: "Manganese (VII)", ionNameA: "Manganese", ionNameB: "Manganite", ionNameC: "Manganese (VI)", ionNameD: "Permanganate", explanation: 1},
	{ionId: 49, ions: "Tc", ionCharge: "\u00B2\u207A", ionName: "Technetium (II)", ionNameA: "Technetium (III)", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 50, ions: "Tc", ionCharge: "\u00B3\u207A", ionName: "Technetium (III)", ionNameA: "Technetiide", ionNameB: "Technetium", ionNameC: "Technetium (II)", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 51, ions: "Tc", ionCharge: "\u2074\u207A", ionName: "Technetium (IV)", ionNameA: "Technetiide", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Technetium (II)", explanation: 1},
	{ionId: 52, ions: "Tc", ionCharge: "\u2075\u207A", ionName: "Technetium (V)", ionNameA: "Technetium (VI)", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 53, ions: "Tc", ionCharge: "\u2076\u207A", ionName: "Technetium (VI)", ionNameA: "Technetiite", ionNameB: "Technetium", ionNameC: "Technetiate", ionNameD: "Technetium (V)", explanation: 1},
	{ionId: 54, ions: "Tc", ionCharge: "\u2077\u207A", ionName: "Technetium (VII)", ionNameA: "Technetiite", ionNameB: "Technetium", ionNameC: "Technetium (V)", ionNameD: "Pertechnetiate", explanation: 1},
	{ionId: 55, ions: "Re", ionCharge: "\u00B2\u207A", ionName: "Rhenium (II)", ionNameA: "Rhenium", ionNameB: "Rhenium (III)", ionNameC: "Rhenide", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 56, ions: "Re", ionCharge: "\u00B3\u207A", ionName: "Rhenium (III)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenium (II)", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 57, ions: "Re", ionCharge: "\u2074\u207A", ionName: "Rhenium (IV)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenide", ionNameD: "Rhenium (II)", explanation: 1},
	{ionId: 58, ions: "Re", ionCharge: "\u2075\u207A", ionName: "Rhenium (V)", ionNameA: "Rhenium", ionNameB: "Rhenium (VII)", ionNameC: "Rhenite", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 59, ions: "Re", ionCharge: "\u2076\u207A", ionName: "Rhenium (VI)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenium (V)", ionNameD: "Perrhenate", explanation: 1},
	{ionId: 60, ions: "Re", ionCharge: "\u2077\u207A", ionName: "Rhenium (VII)", ionNameA: "Rhenium", ionNameB: "Rhenate", ionNameC: "Rhenite", ionNameD: "Rhenium (VI)", explanation: 1},
	{ionId: 61, ions: "Bh", ionCharge: "\u2077\u207A", ionName: "Bohrium (VII)", ionNameA: "Bohrium", ionNameB: "Bohride", ionNameC: "Bohrate", ionNameD: "Bohrium (V)", explanation: 1},
	{ionId: 62, ions: "Fe", ionCharge: "\u00B2\u207A", ionName: "Iron (II)", ionNameA: "Iron", ionNameB: "Ferrate", ionNameC: "Iron (VIII)", ionNameD: "Ferric", latin: "Ferrous", explanation: 4},
	{ionId: 63, ions: "Fe", ionCharge: "\u00B3\u207A", ionName: "Iron (III)", ionNameA: "Iron", ionNameB: "Iron (II)", ionNameC: "Ferride", ionNameD: "Ferrous", latin: "Ferric", explanation: 4},
	{ionId: 64, ions: "Ru", ionCharge: "\u00B2\u207A", ionName: "Ruthenium (II)", ionNameA: "Ruthenium", ionNameB: "Ruthenium (III)", ionNameC: "Ruthenite", ionNameD: "Perruthenate", explanation: 1},
	{ionId: 65, ions: "Ru", ionCharge: "\u00B3\u207A", ionName: "Ruthenium (III)", ionNameA: "Ruthenium", ionNameB: "Ruthenate", ionNameC: "Ruthenium (IV)", ionNameD: "Perruthenate", explanation: 1},
	{ionId: 66, ions: "Ru", ionCharge: "\u2074\u207A", ionName: "Ruthenium (IV)", ionNameA: "Ruthenium", ionNameB: "Ruthenate", ionNameC: "Ruthenite", ionNameD: "Ruthenium (V)", explanation: 1},
	{ionId: 67, ions: "Ru", ionCharge: "\u2075\u207A", ionName: "Ruthenium (V)", ionNameA: "Ruthenium", ionNameB: "Ruthenium (IV)", ionNameC: "Ruthenite", ionNameD: "Perruthenate", explanation: 1},
	{ionId: 68, ions: "Ru", ionCharge: "\u2076\u207A", ionName: "Ruthenium (VI)", ionNameA: "Ruthenium", ionNameB: "Ruthenide", ionNameC: "Ruthenium (V)", ionNameD: "Perruthenate", explanation: 1},
	{ionId: 69, ions: "Ru", ionCharge: "\u2077\u207A", ionName: "Ruthenium (VII)", ionNameA: "Ruthenium", ionNameB: "Ruthenide", ionNameC: "Hyporuthenite", ionNameD: "Ruthenium (VI)", explanation: 1},
	{ionId: 70, ions: "Ru", ionCharge: "\u2078\u207A", ionName: "Ruthenium (VIII)", ionNameA: "Ruthenium", ionNameB: "Ruthenium (V)", ionNameC: "Hyporuthenite", ionNameD: "Perruthenate", explanation: 1},
	{ionId: 71, ions: "Os", ionCharge: "\u00B2\u207A", ionName: "Osmium (II)", ionNameA: "Osmium", ionNameB: "Osmium (III)", ionNameC: "Osmiate", ionNameD: "Osmiuos", explanation: 1},
	{ionId: 72, ions: "Os", ionCharge: "\u00B3\u207A", ionName: "Osmium (III)", ionNameA: "Osmium", ionNameB: "Osmiide", ionNameC: "Osmium (II)", ionNameD: "Perosmiate", explanation: 1},
	{ionId: 73, ions: "Os", ionCharge: "\u2074\u207A", ionName: "Osmium (IV)", ionNameA: "Osmium", ionNameB: "Osmic", ionNameC: "Osmiate", ionNameD: "Osmium (II)", explanation: 1},
	{ionId: 74, ions: "Os", ionCharge: "\u2075\u207A", ionName: "Osmium (V)", ionNameA: "Osmium", ionNameB: "Osmium (IV)", ionNameC: "Osmiate", ionNameD: "Perosmiate", explanation: 1},
	{ionId: 75, ions: "Os", ionCharge: "\u2076\u207A", ionName: "Osmium (VI)", ionNameA: "Osmium", ionNameB: "Osmiite", ionNameC: "Osmium (V)", ionNameD: "Perosmiate", explanation: 1},
	{ionId: 76, ions: "Os", ionCharge: "\u2077\u207A", ionName: "Osmium (VII)", ionNameA: "Osmium", ionNameB: "Osmiite", ionNameC: "Hyposmiite", ionNameD: "Osmium (II)", explanation: 1},
	{ionId: 77, ions: "Os", ionCharge: "\u2078\u207A", ionName: "Osmium (VIII)", ionNameA: "Osmium", ionNameB: "Osmious", ionNameC: "Osmium (VI)", ionNameD: "Perosmiate", explanation: 1},
	{ionId: 78, ions: "Hs", ionCharge: "\u2078\u207A", ionName: "Hassium (VIII)", ionNameA: "Hassium", ionNameB: "Hasside", ionNameC: "Hassium (VII)", ionNameD: "Perhassate", explanation: 1},
	{ionId: 79, ions: "Co", ionCharge: "\u00B2\u207A", ionName: "Cobalt (II)", ionNameA: "Cobalt", ionNameB: "Cobaltide", ionNameC: "Cobalt (IV)", ionNameD: "Cobaltic", latin: "Cobaltous", explanation: 4},
	{ionId: 80, ions: "Co", ionCharge: "\u00B3\u207A", ionName: "Cobalt (III)", ionNameA: "Cobalt", ionNameB: "Cobalt (II)", ionNameC: "Cobaltous", ionNameD: "Percobaltate", latin: "Cobaltic", explanation: 4},
	{ionId: 81, ions: "Rh", ionCharge: "\u00B3\u207A", ionName: "Rhodium (III)", ionNameA: "Rhodium", ionNameB: "Rhodate", ionNameC: "Rhodium (V)", ionNameD: "Perrhodate", explanation: 1},
	{ionId: 82, ions: "Rh", ionCharge: "\u2074\u207A", ionName: "Rhodium (IV)", ionNameA: "Rhodium", ionNameB: "Rhodite", ionNameC: "Rhodide", ionNameD: "Rhodium (II)", explanation: 1},
	{ionId: 83, ions: "Ir", ionCharge: "\u00B3\u207A", ionName: "Iridium (III)", ionNameA: "Iridium", ionNameB: "Iridide", ionNameC: "Iridium (IV)", ionNameD: "Periridate", explanation: 1},
	{ionId: 84, ions: "Ir", ionCharge: "\u2074\u207A", ionName: "Iridium (IV)", ionNameA: "Iridium", ionNameB: "Iridite", ionNameC: "Iridium (III)", ionNameD: "Periridate", explanation: 1},
	{ionId: 85,	ions: "Ni", ionCharge: "\u00B2\u207A", ionName: "Nickel (II)", ionNameA: "Nickel", ionNameB: "Nickel (III)", ionNameC: "Nickelate", ionNameD: "Pernickelate", latin: "Nickelous", explanation: 4},
	{ionId: 86, ions: "Ni", ionCharge: "\u00B3\u207A", ionName: "Nickel (III)", ionNameA: "Nickel", ionNameB: "Nickelide", ionNameC: "Nickelate (II)", ionNameD: "Pernickelate", latin: "Nickelic", explanation: 4},
	{ionId: 87, ions: "Ni", ionCharge: "\u2074\u207A", ionName: "Nickel (IV)", ionNameA: "Nickel", ionNameB: "Nickelite", ionNameC: "Hyponickelite", ionNameD: "Nickel (VI)", explanation: 1},
	{ionId: 88, ions: "Pd", ionCharge: "\u00B2\u207A", ionName: "Palladium ((II)", ionNameA: "Palladium", ionNameB: "Palladide", ionNameC: "Palladium (III)", ionNameD: "Hypopalladite", explanation: 1},
	{ionId: 89, ions: "Pd", ionCharge: "\u2074\u207A", ionName: "Palladium (IV)", ionNameA: "alladium", ionNameB: "Palladite", ionNameC: "Palladium (II)", ionNameD: "Hypopalladite", explanation: 1},
	{ionId: 90, ions: "Pt", ionCharge: "\u00B2\u207A", ionName: "Platinum (II)", ionNameA: "Platinum", ionNameB: "Platinum (III)", ionNameC: "Platinide", ionNameD: "Platinous", explanation: 1 },
	{ionId: 91, ions: "Pt", ionCharge: "\u2074\u207A", ionName: "Platinum (IV)", ionNameA: "Platinum", ionNameB: "Platinite", ionNameC: "Platinum (III)", ionNameD: "Hypoplatinite", explanation: 1},
	{ionId: 92, ions: "Cu", ionCharge: "\u207A", ionName: "Copper (I)", ionNameA: "Copper", ionNameB: "Cupride", ionNameC: "Cupric", ionNameD: "Copper (III)", latin: "Cuprous", explanation: 4},
	{ionId: 93, ions: "Cu", ionCharge: "\u00B2\u207A", ionName: "Copper (II)", ionNameA: "Copper", ionNameB: "Cupride", ionNameC: "Cuprous", ionNameD: "Copper (I)", latin: "Cupric", explanation: 4},
	{ionId: 94, ions: "Ag", ionCharge: "\u207A", ionName: "Silver (I)", ionNameA: "Silver", ionNameB: "Argentide", ionNameC: "Silver (II)", ionNameD: "Perargentate", explanation: 1},
	{ionId: 95, ions: "Au", ionCharge: "\u207A", ionName: "Gold (I)", ionNameA: "Gold", ionNameB: "Auride", ionNameC: "Gold (III)", ionNameD: "Auric", latin: "Aurous", explanation: 4},
	{ionId: 96, ions: "Au", ionCharge: "\u00B3\u207A", ionName: "Gold (III)", ionNameA: "Gold", ionNameB: "Gold (II)", ionNameC: "Aurate", ionNameD: "Aurous", latin: "Auric", explanation: 4},
	{ionId: 97, ions: "Zn", ionCharge: "\u00B2\u207A", ionName: "Zinc (II)", ionNameA: "Zinc", ionNameB: "Zinc (I)", ionNameC: "Zincate", ionNameD: "Perzincate", explanation: 1},
	{ionId: 98, ions: "Cd", ionCharge: "\u00B2\u207A", ionName: "Cadmium (II)", ionNameA: "Cadmium", ionNameB: "Cadmide", ionNameC: "Cadmium (VI)", ionNameD: "Hypocadmite", explanation: 1},
	{ionId: 99, ions: "Hg", ionCharge: "\u207A", ionName: "Mercury (I)", ionNameA: "Mercury", ionNameB: "Mercuride", ionNameC: "Mercury (III)", ionNameD: "Mercuric", latin: "Mercurous", explanation: 4},
	{ionId: 100, ions: "Hg", ionCharge: "\u00B2\u207A", ionName: "Mercury (II)", ionNameA: "Mercury", ionNameB: "Mercuride", ionNameC: "Mercury (I)", ionNameD: "Mercurous", latin: "Mercuric", explanation: 4},
	{ionId: 101, ions: "Al", ionCharge: "\u00B3\u207A", ionName: "Aluminum", ionNameA: "Alluminum (III)", ionNameB: "Aluminous", ionNameC: "Aluminide", ionNameD: "Peraluminate", explanation: 0},
	{ionId: 101, ions: "Ga", ionCharge: "\u207A", ionName: "Gallium (I)", ionNameA: "Gallium", ionNameB: "Gallide", ionNameC: "Gallium (II)", ionNameD: "Pergallate", explanation: 1},
	{ionId: 102, ions: "Ga", ionCharge: "\u00B3\u207A", ionName: "Gallium (III)", ionNameA: "Gallium", ionNameB: "Gallide", ionNameC: "Gallite", ionNameD: "Gallium (II)", explanation: 1},
	{ionId: 103, ions: "In", ionCharge: "\u207A", ionName: "Indium (I)", ionNameA: "Indium", ionNameB: "Indide", ionNameC: "Indite", ionNameD: "Indium (II)", explanation: 1},
	{ionId: 104, ions: "In", ionCharge: "\u00B3\u207A", ionName: "Indium (III)", ionNameA: "Indium", ionNameB: "Indide", ionNameC: "Indium (II)", ionNameD: "Hypoindite", explanation: 1},
	{ionId: 105, ions: "Tl", ionCharge: "\u207A", ionName: "Thallium (I)", ionNameA: "Thalium", ionNameB: "Thallide", ionNameC: "Thallate", ionNameD: "Thallium (III)", explanation: 1},
	{ionId: 106, ions: "Tl", ionCharge: "\u00B3\u207A", ionName: "Thallium (III)", ionNameA: "Thallium", ionNameB: "Thallide", ionNameC: "Thallium (I)", ionNameD: "Perthallate", explanation: 1},
	{ionId: 107, ions: "Ge", ionCharge: "\u00B2\u207A", ionName: "Germanium (II)", ionNameA: "Germanium", ionNameB: "Germanide", ionNameC: "Germanite", ionNameD: "Germanium (I)", explanation: 1},
	{ionId: 108, ions: "Ge", ionCharge: "\u2074\u207A", ionName: "Germanium (IV)", ionNameA: "Germanium", ionNameB: "Germanide", ionNameC: "Germanium (III)", ionNameD: "Pergermanate", explanation: 1},
	{ionId: 109, ions: "Sn", ionCharge: "\u00B2\u207A", ionName: "Tin (II)", ionNameA: "Tin", ionNameB: "Stannide", ionNameC: "Tin (III)", ionNameD: "Stannic", latin: "Stannous", explanation: 4},
	{ionId: 110, ions: "Sn", ionCharge: "\u2074\u207A", ionName: "Tin (IV)", ionNameA: "Tin", ionNameB: "Stannide", ionNameC: "Stannous", ionNameD: "Tin (II)", latin: "Stanic", explanation: 4},
	{ionId: 111, ions: "Pb", ionCharge: "\u00B2\u207A", ionName: "Lead (II)", ionNameA: "Lead", ionNameB: "Plumbide", ionNameC: "Lead (III)", ionNameD: "Plumbic", latin: "Plumbous", explanation: 4},
	{ionId: 112, ions: "Pb", ionCharge: "\u2074\u207A", ionName: "Lead (IV)", ionNameA: "Lead", ionNameB: "Lead (III)", ionNameC: "Plumbite", ionNameD: "Plumbous", latin: "Plumbic", explanation: 4},
	{ionId: 113, ions: "Bi", ionCharge: "\u00B3\u207A", ionName: "Bismuth (III)", ionNameA: "Bismuth", ionNameB: "Bismuthide", ionNameC: "Bismuth (VI)", ionNameD: "Bismuthic", latin: "Bismuthous", explanation: 4},
	{ionId: 114, ions: "Bi", ionCharge: "\u2075\u207A", ionName: "Bismuth (V)", ionNameA: "Bismuth", ionNameB: "Bismuth (VI)", ionNameC: "Bismuthite", ionNameD: "Bismuthous", latin: "Bismuthic", explanation: 4},
	{ionId: 115, ions: "Po", ionCharge: "\u2074\u207A", ionName: "Polonium (IV)", ionNameA: "Polonium", ionNameB: "Polonide", ionNameC: "Polonate", ionNameD: "Polonium (VI)", explanation: 1},
	{ionId: 116, ions: "Po", ionCharge: "\u2076\u207A", ionName: "Polonium (VI)", ionNameA: "Polonium", ionNameB: "Polonide", ionNameC: "Polonite", ionNameD: "Polonium (IV)", explanation: 1},
	{ionId: 117, ions: "H", ionCharge: "\u207B", ionName: "Hydride", ionNameA: "Hydrogen", ionNameB: "Hydrate", ionNameC: "Monohydrate", ionNameD: "Perhydrate", explanation: 2},
	{ionId: 118, ions: "C", ionCharge: "\u2074\u207B", ionName: "Carbide", ionNameA: "Carbon", ionNameB: "Carbate", ionNameC: "Carbite", ionNameD: "Percarbate", explanation: 2},
	{ionId: 119, ions: "N", ionCharge: "\u00B3\u207B", ionName: "Nitride", ionNameA: "Nitrogen", ionNameB: "Nitrate", ionNameC: "Nitrite", ionNameD: "Pernitrate", explanation: 2},	
	{ionId: 120, ions: "P", ionCharge: "\u00B3\u207B", ionName: "Phosphide", ionNameA: "Phosphorus", ionNameB: "Phosphate", ionNameC: "Phosphite", ionNameD: "Perphosphate", explanation: 2},
	{ionId: 121, ions: "O", ionCharge: "\u00B2\u207B", ionName: "Oxide", ionNameA: "Oxygen", ionNameB: "Oxate", ionNameC: "Oxite", ionNameD: "Peroxide", explanation: 2},
	{ionId: 122, ions: "S", ionCharge: "\u00B2\u207B", ionName: "Sulfide", ionNameA: "Sulfur", ionNameB: "Sulfate", ionNameC: "Sulfite", ionNameD: "Hyposulfite", explanation: 2},
	{ionId: 123, ions: "Se", ionCharge: "\u00B2\u207B", ionName: "Selenide", ionNameA: "Selenium", ionNameB: "Selenate", ionNameC: "Selenite", ionNameD: "Perselenate", explanation: 2},
	{ionId: 124, ions: "F", ionCharge: "\u207B", ionName: "Fluoride", ionNameA: "Fluorine", ionNameB: "Fluorate", ionNameC: "Fluorite", ionNameD: "Hypofluorite", explanation: 2},
	{ionId: 125, ions: "Cl", ionCharge: "\u207B", ionName: "Chloride", ionNameA: "Chlorine", ionNameB: "Chlorate", ionNameC: "Chlorite", ionNameD: "Perchlorate", explanation: 2},
	{ionId: 126, ions: "Br", ionCharge: "\u207B", ionName: "Bromide", ionNameA: "Bromine", ionNameB: "Bromate", ionNameC: "Bromite", ionNameD: "Hypobromite", explanation: 2},
	{ionId: 126, ions: "I", ionCharge: "\u207B", ionName: "Iodide", ionNameA: "Iodine", ionNameB: "Iodate", ionNameC: "Iodite", ionNameD: "Periodate", explanation: 2},
	{ionId: 127, ions: "At", ionCharge: "\u207B", ionName: "Astatide", ionNameA: "Astatine", ionNameB: "Astatate", ionNameC: "Astatite", ionNameD: "Hypoastatite", explanation: 2},
	{ionId: 128, ions: "ClO", ionCharge: "\u207B", ionName: "Hypochlorite", ionNameA: "Chloride", ionNameB: "Chlorate", ionNameC: "Chlorite", ionNameD: "Perchlorate", explanation: 3},
	{ionId: 129, ions: "ClO\u2082", ionCharge: "\u207B", ionName: "Chlorite", ionNameA: "Chloride", ionNameB: "Chlorate", ionNameC: "Hypochlorite", ionNameD: "Perchlorate", explanation: 3},
	{ionId: 130, ions: "ClO\u2083", ionCharge: "\u207B", ionName: "Chlorate", ionNameA: "Chloride", ionNameB: "Chlorite", ionNameC: "Hypochlorite", ionNameD: "Perchlorate", explanation: 3},
	{ionId: 131, ions: "ClO\u2084", ionCharge: "\u207B", ionName: "Perchlorate", ionNameA: "Chloride", ionNameB: "Chlorite", ionNameC: "Hypochlorite", ionNameD: "Chlorate", explanation: 3},
	{ionId: 132, ions: "BrO", ionCharge: "\u207B", ionName: "Hypobromite", ionNameA: "Bromide", ionNameB: "Bromate", ionNameC: "Bromite", ionNameD: "Perbromate", explanation: 3},
	{ionId: 133, ions: "BrO\u2082", ionCharge: "\u207B", ionName: "Bromite", ionNameA: "Bromide", ionNameB: "Bromate", ionNameC: "Hypobromite", ionNameD: "Perbromate", explanation: 3},
	{ionId: 134, ions: "BrO\u2083", ionCharge: "\u207B", ionName: "Bromate", ionNameA: "Bromide", ionNameB: "Bromite", ionNameC: "Hypobromite", ionNameD: "Perbromate", explanation: 3},
	{ionId: 135, ions: "BrO\u2084", ionCharge: "\u207B", ionName: "Perbromate", ionNameA: "Bromide", ionNameB: "Bromite", ionNameC: "Hypobromite", ionNameD: "Bromate", explanation: 3},
	{ionId: 136, ions: "IO", ionCharge: "\u207B", ionName: "Hypoiodite", ionNameA: "Iodide", ionNameB: "Iodate", ionNameC: "Iodite", ionNameD: "Periodate", explanation: 3},
	{ionId: 137, ions: "IO\u2082", ionCharge: "\u207B", ionName: "Iodite", ionNameA: "Iodide", ionNameB: "Iodate", ionNameC: "Hypoiodite", ionNameD: "Periodate", explanation: 3},
	{ionId: 138, ions: "IO\u2083", ionCharge: "\u207B", ionName: "Iodate", ionNameA: "Iodide", ionNameB: "Iodite", ionNameC: "Hypoiodite", ionNameD: "Periodate", explanation: 3},
	{ionId: 139, ions: "IO\u2084", ionCharge: "\u207B", ionName: "Periodate", ionNameA: "Iodide", ionNameB: "Iodite", ionNameC: "Hypoiodite", ionNameD: "Iodate", explanation: 3},
	{ionId: 140, ions: "AtO", ionCharge: "\u207B", ionName: "Hypoastatite", ionNameA: "Astatide", ionNameB: "Astatate", ionNameC: "Astatite", ionNameD: "Perastatate", explanation: 3},
	{ionId: 141, ions: "AtO\u2082", ionCharge: "\u207B", ionName: "Astatite", ionNameA: "Astatide", ionNameB: "Astatate", ionNameC: "Hypoastatite", ionNameD: "Perastatate", explanation: 3},
	{ionId: 142, ions: "AtO\u2083", ionCharge: "\u207B", ionName: "Astatate", ionNameA: "Astatide", ionNameB: "Astatite", ionNameC: "Hypoastatite", ionNameD: "Perastatate", explanation: 3},
	{ionId: 143, ions: "AtO\u2084", ionCharge: "\u207B", ionName: "Perastatate", ionNameA: "Astatide", ionNameB: "Astatite", ionNameC: "Hypoastatite", ionNameD: "Astatate", explanation: 3},
/*	{ionId: 144, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }
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
	{ionId: 297, ions: "", ionCharge: "", ionName: "", ionNameA: "", ionNameB: "", ionNameC: "", ionNameD: "", explanation: }*/
	{ionId: 298, ions: "Sb", ionCharge: "\u00B3\u207A", ionName: "Antimony (III)", ionNameA: "Antimony", ionNameB: "Antimonate", ionNameC: "Antimony (V)", ionNameD: "Antimonic", latin: "Antimonous",explanation: 4},
	{ionId: 299, ions: "Sb", ionCharge: "\u2075\u207A", ionName: "Antimony (V)", ionNameA: "Antimony", ionNameB: "Antimonate", ionNameC: "Antimony (III)", ionNameD: "Antimonous", latin: "Antimonic", explanation: 4},
	{ionId: 300, ions: "Cr", ionCharge: "\u00B2\u207A", ionName: "Chromium (II)", ionNameA: "Chromium", ionNameB: "Chromide", ionNameC: "Chromium (III)", ionNameD: "Perchromite", latin: "Chromous", explanation: 4}



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



















              
