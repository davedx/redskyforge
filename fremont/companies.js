// Company + sector data. Facts compiled Sept 2026 from public filings, company sites and press reports.
window.FREMONT_SECTORS = {
  robotics: { name: "Robotics & Physical AI", short: "ROBOTICS", color: "#ff3d5a" },
  mobility: { name: "EVs & Autonomy",          short: "MOBILITY", color: "#ff5fd2" },
  batteries:{ name: "Batteries & Storage",     short: "BATTERY",  color: "#ffcf33" },
  energy:   { name: "Solar & Power Electronics", short: "POWER",  color: "#5ef28a" },
  semi:     { name: "Chipmaking Equipment",    short: "SEMI",     color: "#35d6ff" },
  compute:  { name: "AI Servers & Storage",    short: "COMPUTE",  color: "#9d7cff" },
  quantum:  { name: "Quantum Computing",       short: "QUANTUM",  color: "#e4e9ff" },
  mfg:      { name: "Advanced Manufacturing",  short: "MFG",      color: "#ff9535" }
};

// tier: 3 megacorp · 2 public / global OEM · 1 startup / scaleup (drives label priority + building height)
window.FREMONT_COMPANIES = [
  { id: "tesla", name: "Tesla Fremont Factory", sector: "mobility", tier: 3, stage: "Megacorp",
    ticker: "NASDAQ: TSLA", founded: "2003 · Fremont since 2010", address: "45500 Fremont Blvd", footprint: "~5.3M sq ft plant",
    what: "Tesla's first car plant, the former GM–Toyota NUMMI factory it bought in 2010. It builds Model 3 and Model Y today, and it's being set up for humanoid robots next.",
    facts: [
      "One of the highest-volume car factories in North America",
      "Model S and X lines are winding down to make room for Optimus production (2026 plans)",
      "Tesla says it aims to build up to 1M Optimus robots a year here",
      "The cluster's anchor: many suppliers, lessees and alumni-founded startups sit within a few km"
    ] },
  { id: "optimus", name: "Tesla Optimus R&D", sector: "robotics", tier: 3, stage: "Megacorp site",
    ticker: "NASDAQ: TSLA", founded: "Leased 2026", address: "45401 Research Ave", footprint: "108,000 sq ft",
    what: "A full-building lease near the main plant for Optimus humanoid work: hardware engineering, software integration and small-batch prototyping, according to commercial real estate reports.",
    facts: [
      "About 1.4 km northeast of the main plant, in the Warm Springs innovation district",
      "Part of a 2026 expansion that also added ~267,000 sq ft at the Milmont Industrial campus",
      "Gen 3 Optimus units are expected to debut in 2026"
    ] },
  { id: "kato", name: "Tesla Kato Road", sector: "batteries", tier: 3, stage: "Megacorp site",
    ticker: "NASDAQ: TSLA", founded: "Pilot line ~2020", address: "47700 Kato Rd", footprint: "Cell R&D + Materials Lab",
    what: "The pilot line where Tesla developed and first built its 4680 cylindrical battery cells, before moving volume production to Texas.",
    facts: [
      "Cell lines began at 47700 Kato Rd and 1055 Page Ave; the Materials Lab expanded at 47400 Kato Rd",
      "In 2021 Musk said its pilot capacity was “probably top 10” in the world",
      "Its early output supported the first 4680 ramps at Giga Texas and Giga Berlin"
    ] },
  { id: "zoox", name: "Zoox", sector: "mobility", tier: 2, stage: "Amazon subsidiary",
    ticker: "Private · Amazon", founded: "2014", address: "47546 Kato Rd", footprint: "Engineering & ops site",
    what: "A purpose-built robotaxi with no steering wheel that drives the same in both directions. Zoox designs the whole vehicle, not just the self-driving software.",
    facts: [
      "Amazon bought Zoox in 2020 for a reported ~$1.2B",
      "Headquartered in Foster City; Fremont is one of its Bay Area sites",
      "Opened public robotaxi rides in Las Vegas in 2025"
    ] },
  { id: "anyware", name: "Anyware Robotics", sector: "robotics", tier: 1, stage: "Startup · Seed",
    ticker: "Private", founded: "Seed $12M (2025)", address: "46712 Fremont Blvd", footprint: "HQ",
    what: "AI mobile robots that unload boxes from shipping containers and trailers, one of the most injury-prone jobs in a warehouse.",
    facts: [
      "Raised a $12M seed round in March 2025",
      "Exhibited at ProMat 2025, the big US logistics automation show",
      "Headquartered a short drive from Tesla's factory in Warm Springs"
    ] },
  { id: "lam", name: "Lam Research", sector: "semi", tier: 3, stage: "Megacorp",
    ticker: "NASDAQ: LRCX", founded: "1980", address: "4650 Cushing Pkwy", footprint: "Global HQ campus",
    what: "Wafer fab equipment: the etch and deposition tools that pattern and build nearly every advanced chip, from 3D NAND to gate-all-around logic.",
    facts: [
      "Founded by David K. Lam; now one of the world's largest chip equipment makers",
      "S&P 500 member with its global headquarters in Fremont",
      "Its etch and deposition tools matter more as chips stack up in 3D"
    ] },
  { id: "aehr", name: "Aehr Test Systems", sector: "semi", tier: 2, stage: "Public",
    ticker: "NASDAQ: AEHR", founded: "1977", address: "400 Kato Terrace", footprint: "HQ + manufacturing",
    what: "Wafer-level test and burn-in systems (FOX-XP) that screen chips before packaging. It started with silicon-carbide power devices for EVs and now also targets AI processors.",
    facts: [
      "One of the longest-running chip test companies in Silicon Valley",
      "Its FOX systems test many devices at once across full wafers",
      "Tied to both of Fremont's big themes: EV power electronics and AI hardware"
    ] },
  { id: "ichor", name: "Ichor", sector: "semi", tier: 2, stage: "Public",
    ticker: "NASDAQ: ICHR", founded: "1999", address: "3185 Laurelview Ct", footprint: "Global HQ",
    what: "Fluid delivery subsystems, the gas and chemical plumbing inside etch and deposition tools, built for the big chip equipment makers.",
    facts: [
      "A key supplier to leading chip tool makers, including neighbor Lam Research",
      "Headquartered in Fremont, with factories in Asia, Mexico and the US"
    ] },
  { id: "acm", name: "ACM Research", sector: "semi", tier: 2, stage: "Public",
    ticker: "NASDAQ: ACMR", founded: "1998", address: "42307 Osgood Rd", footprint: "US HQ",
    what: "Single-wafer wet cleaning, electroplating and advanced packaging tools for chipmakers.",
    facts: [
      "US headquarters is in Fremont; most R&D and manufacturing is in Shanghai",
      "Known for SAPS and TEBO megasonic cleaning technology"
    ] },
  { id: "pivotal", name: "Pivotal Systems", sector: "semi", tier: 1, stage: "Growth company",
    ticker: "—", founded: "—", address: "48389 Fremont Blvd, Ste 100", footprint: "HQ",
    what: "Gas flow controllers (GFC) and flow ratio controllers (FRC) with real-time monitoring, the precision valves that meter process gases in chip tools.",
    facts: [
      "Patented GFC platform sold to equipment makers and chipmakers worldwide",
      "A good example of the cluster's many small suppliers to chip tool makers"
    ] },
  { id: "quanta", name: "Quanta Computer USA", sector: "compute", tier: 3, stage: "Megacorp",
    ticker: "TWSE: 2382 (parent)", founded: "1988 (parent)", address: "45630 Northport Loop E", footprint: "16 buildings in Fremont",
    what: "Builds and integrates AI and cloud server racks for hyperscalers. Quanta is one of the world's largest contract server manufacturers.",
    facts: [
      "Already occupies 16 buildings across Fremont",
      "Leasing a ~210,000 sq ft advanced manufacturing building from Prologis",
      "Plans to double its Fremont workforce to about 4,000"
    ] },
  { id: "wistron", name: "Wistron · WisLab EMS", sector: "compute", tier: 3, stage: "Megacorp",
    ticker: "TWSE: 3231 (parent)", founded: "2001 · roots 2002", address: "48021–48133 Warm Springs Blvd", footprint: "299,000 sq ft · 3 bldgs",
    what: "AI server manufacturing for Wistron's US arm, WisLab EMS, which grew out of Alpha EMS, a Silicon Valley contract manufacturer founded in 2002.",
    facts: [
      "Bought this campus from a Blackstone affiliate for ~$120M (closed Sept 4, 2026)",
      "Part of $181M in Fremont purchases for AI hardware production this year"
    ] },
  { id: "wislab2", name: "WisLab · Starboard Dr", sector: "compute", tier: 2, stage: "Wistron subsidiary",
    ticker: "TWSE: 3231 (parent)", founded: "Acquired May 2026", address: "4211 Starboard Dr", footprint: "126,000 sq ft",
    what: "Wistron's first Fremont buy of 2026, a single large building in the Northpole Business Park for server production.",
    facts: [
      "$61M all-cash purchase in May 2026",
      "A block from Quanta in the Northpole Business Park"
    ] },
  { id: "mitac", name: "MiTAC", sector: "compute", tier: 2, stage: "Global OEM",
    ticker: "Private (MiTAC-Synnex group)", founded: "—", address: "47988 Fremont Blvd", footprint: "~473,000 sq ft leased",
    what: "Server motherboards and systems, including the TYAN brand, now building up large-scale AI server manufacturing in Fremont.",
    facts: [
      "Leased all six buildings at the ~473,000 sq ft Campus at Bayside (Aug 2026)",
      "Also took 348,300 sq ft at the Fremont Technology Center"
    ] },
  { id: "wdc", name: "Western Digital", sector: "compute", tier: 3, stage: "Megacorp",
    ticker: "NASDAQ: WDC", founded: "1970", address: "44200 Osgood Rd", footprint: "Wafer fab",
    what: "A wafer fab making recording heads, the nanoscale read/write sensors inside every hard drive, which are central to AI data-center storage.",
    facts: [
      "Has made recording-head wafers here since 2003, and bought the facility in 2006",
      "Hard drives still store most of the world's cloud data"
    ] },
  { id: "seagate", name: "Seagate", sector: "compute", tier: 3, stage: "Megacorp",
    ticker: "NASDAQ: STX", founded: "1979", address: "47488 Kato Rd", footprint: "Campus (leaseback)",
    what: "An R&D and advanced manufacturing campus for the hard-drive maker behind HAMR (heat-assisted magnetic recording) high-capacity drives.",
    facts: [
      "Sold the Kato Road campus and leased it back, then shrank its footprint in 2024",
      "Part of the Warm Springs storage cluster, along with Western Digital"
    ] },
  { id: "enphase", name: "Enphase Energy", sector: "energy", tier: 3, stage: "Public",
    ticker: "NASDAQ: ENPH", founded: "2006", address: "47281 Bayside Pkwy", footprint: "Global HQ",
    what: "Chip-based solar microinverters, home batteries and EV chargers, all run by one home energy platform.",
    facts: [
      "Pioneered the microinverter: one small inverter per solar panel",
      "Global headquarters in Fremont, with product development and engineering on site",
      "IQ8 microinverters can form a microgrid that keeps running when the grid is down"
    ] },
  { id: "delta", name: "Delta Electronics Americas", sector: "energy", tier: 3, stage: "Megacorp",
    ticker: "TWSE: 2308 (parent)", founded: "1971 (parent)", address: "46101 Fremont Blvd", footprint: "Americas HQ",
    what: "Power electronics: data-center power, EV charging, telecom energy, building and industrial automation, and renewables.",
    facts: [
      "Delta's Americas headquarters, one of 15 offices in the region",
      "Parent Delta is one of the world's largest makers of switching power supplies",
      "AI data centers need a lot of power conversion, and that's Delta's core business"
    ] },
  { id: "enervenue", name: "EnerVenue", sector: "batteries", tier: 1, stage: "Scaleup",
    ticker: "Private", founded: "2020", address: "46430 Fremont Blvd", footprint: "HQ",
    what: "Nickel-hydrogen batteries for grid and commercial storage, using a chemistry proven in satellites and the Hubble Space Telescope.",
    facts: [
      "Stanford researchers redesigned the metal-hydrogen vessel to cut its cost in 2017",
      "Offers a 20-year / 200,000-cycle warranty",
      "Signed an energy storage agreement with SLB (Schlumberger New Energy)"
    ] },
  { id: "enovix", name: "Enovix", sector: "batteries", tier: 2, stage: "Public",
    ticker: "NASDAQ: ENVX", founded: "2007", address: "3501 W Warren Ave", footprint: "HQ + R&D",
    what: "A 3D lithium-ion cell design with a 100% active silicon anode, aimed at smartphones, wearables and AR/VR.",
    facts: [
      "HQ and R&D in Fremont; this site was once Fab1",
      "Moved volume manufacturing to Fab2 in Penang, Malaysia (2024)"
    ] },
  { id: "amprius", name: "Amprius Technologies", sector: "batteries", tier: 2, stage: "Public",
    ticker: "NYSE: AMPX", founded: "2008", address: "1180 Page Ave", footprint: "HQ + production",
    what: "Silicon-anode lithium-ion cells with very high energy density for drones, high-altitude aircraft and defense.",
    facts: [
      "A Stanford spinout built on silicon nanowire anode research",
      "SiMaxx cells are rated at up to ~500 Wh/kg",
      "Went public through a SPAC merger in 2022"
    ] },
  { id: "gotion", name: "Gotion Inc.", sector: "batteries", tier: 2, stage: "Global subsidiary",
    ticker: "SZSE: 002074 (parent)", founded: "2006 (parent)", address: "48660 Kato Rd", footprint: "US R&D + packs",
    what: "The Silicon Valley R&D and battery-pack arm of Gotion High-Tech, a major Chinese maker of LFP battery cells.",
    facts: [
      "Parent Gotion High-Tech is based in Hefei, China",
      "Volkswagen is Gotion High-Tech's largest shareholder"
    ] },
  { id: "page", name: "Tesla · Page Ave Cells", sector: "batteries", tier: 3, stage: "Megacorp site",
    ticker: "NASDAQ: TSLA", founded: "Pilot line ~2020", address: "1055 Page Ave", footprint: "4680 cell line",
    what: "The second building of Tesla's Fremont 4680 cell pilot, around the corner from the Kato Road lab.",
    facts: [
      "One of the two original 4680 production buildings, along with 47700 Kato Rd",
      "Next door to Amprius on Page Ave, the densest battery block in the city"
    ] },
  { id: "ionblox", name: "Ionblox", sector: "batteries", tier: 1, stage: "Startup · Series B",
    ticker: "Private", founded: "2017", address: "3390 Gateway Blvd", footprint: "HQ + R&D",
    what: "Lithium-ion cells with pre-lithiated, silicon-dominant anodes built for extreme fast charging, for EVs and eVTOL aircraft.",
    facts: [
      "Reports 60% charge in 5 minutes and 80% in 10",
      "Raised a $32M Series B (2023) from investors including Applied Ventures and Temasek",
      "Won a $3.5M development contract from USABC, the US automakers' battery consortium",
      "Formerly known as Zenlabs Energy"
    ] },
  { id: "tenergy", name: "Tenergy", sector: "batteries", tier: 1, stage: "Established · Private",
    ticker: "Private", founded: "—", address: "436 Kato Terrace", footprint: "Tech & service center",
    what: "Rechargeable batteries, custom battery packs and chargers (NiMH, Li-ion, Li-polymer) for retail, OEM, industrial, medical and military customers.",
    facts: [
      "Designs turnkey custom battery packs from its Silicon Valley center",
      "Next door to Aehr Test Systems on Kato Terrace"
    ] },
  { id: "gridscape", name: "Gridscape Solutions", sector: "batteries", tier: 1, stage: "Scaleup",
    ticker: "Private", founded: "—", address: "46711 Fremont Blvd", footprint: "HQ",
    what: "Microgrids that combine solar, battery storage and its EnergyScope control software for critical facilities and EV charging sites.",
    facts: [
      "Built solar-plus-battery emergency microgrids at three Fremont fire stations, backed by a $1.8M California Energy Commission grant",
      "Each station got 95 kWh of storage and a 40 kW solar canopy"
    ] },
  { id: "zerova", name: "Zerova", sector: "energy", tier: 2, stage: "US subsidiary",
    ticker: "—", founded: "—", address: "47775 Fremont Blvd", footprint: "US ops + support",
    what: "EV charging hardware, from compact AC home chargers to ultra-fast DC stations for businesses and fleets.",
    facts: [
      "US operations and field support are based in Fremont",
      "Showed new DC fast-charging systems at CES 2024"
    ] },
  { id: "rigetti", name: "Rigetti Computing · Fab-1", sector: "quantum", tier: 2, stage: "Public",
    ticker: "NASDAQ: RGTI", founded: "2013", address: "47430 Seabridge Dr", footprint: "Quantum chip fab",
    what: "Rigetti's own fab for superconducting quantum processors. It's one of the few dedicated quantum chip fabs anywhere.",
    facts: [
      "Headquarters is in Berkeley; the chips are made here in Fremont",
      "Also offers foundry services for other teams' superconducting devices",
      "Founded by physicist Chad Rigetti"
    ] },
  { id: "velo3d", name: "Velo3D", sector: "mfg", tier: 2, stage: "Public",
    ticker: "VELO", founded: "2014", address: "2710 Lakeview Ct", footprint: "HQ + production",
    what: "Sapphire metal 3D printers (laser powder bed) for rocket engines, defense and energy hardware.",
    facts: [
      "SpaceX has been a flagship customer",
      "Known for printing complex internal channels with fewer support structures"
    ] }
];
