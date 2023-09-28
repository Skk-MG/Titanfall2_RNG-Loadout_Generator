const pilotSkill = [
    {nombreSkill: "A-Wall", imagenSkill: "./assets/tactical/Tacbanner_awall.webp"},
    {nombreSkill: "Cloak", imagenSkill: "./assets/tactical/Tacbanner_cloak.webp"},
    {nombreSkill: "Grapple", imagenSkill: "./assets/tactical/Tacbanner_grapple.webp"},
    {nombreSkill: "Holo Pilot", imagenSkill: "./assets/tactical/Tacbanner_holopilot.webp"},
    {nombreSkill: "Phase Shift", imagenSkill: "./assets/tactical/Tacbanner_phaseshift.webp"},
    {nombreSkill: "Pulse Blade", imagenSkill: "./assets/tactical/Tacbanner_pulseblade.webp"},       
    {nombreSkill: "Stim", imagenSkill: "./assets/tactical/Tacbanner_stim.webp"}
];

const pilotBoost = [
    {nombreBoost: "Amped Weapons", imagenBoost: "./assets/boosts/Boost_ampedweapons.webp"},
    {nombreBoost: "Ticks", imagenBoost: "./assets/boosts/Boost_ticks.webp"},
    {nombreBoost: "Pilot Sentry", imagenBoost: "./assets/boosts/Boost_pilotsentry.webp"},
    {nombreBoost: "Map Hack", imagenBoost: "./assets/boosts/Boost_maphack.webp"},
    {nombreBoost: "Battery Back-Up", imagenBoost: "./assets/boosts/Boost_batterybackup.webp"},
    {nombreBoost: "Radar Jammer", imagenBoost: "./assets/boosts/Boost_radarjammer.webp"},
    {nombreBoost: "Titan Sentry", imagenBoost: "./assets/boosts/Boost_titansentry.webp"},
    {nombreBoost: "Smart Pistol MK6", imagenBoost: "./assets/boosts/Boost_smartpistol.webp"},
    {nombreBoost: "Phase Rewind", imagenBoost: "./assets/boosts/Boost_phaserewind.webp"},
    {nombreBoost: "Hard Cover", imagenBoost: "./assets/boosts/Boost_hardcover.webp"},
    {nombreBoost: "Holo Pilot Nova", imagenBoost: "./assets/boosts/Boost_holopilotnova.webp"},
    {nombreBoost: "Dice Roll", imagenBoost: "./assets/boosts/Boost_diceroll.webp"}
];

const pilotNades = [
    {nombreNades: "Frag Grenade", imagenNades: "./assets/throwables/Fraggrenade.webp"},
    {nombreNades: "Arc Grenade", imagenNades: "./assets/throwables/ArcT2.webp"},
    {nombreNades: "Electric Smoke Grenade", imagenNades: "./assets/throwables/Electric_Smoke_Grenade.webp"},
    {nombreNades: "Gravity Star", imagenNades: "./assets/throwables/Gravity_Star.webp"},
    {nombreNades: "Firestar", imagenNades: "./assets/throwables/Firestar.webp"},
    {nombreNades: "Satchel", imagenNades: "./assets/throwables/SatchelT2.webp"}
];

const mainWPN = [
    {nombreWPN: "R-201 Carbine", clase: "AR", imagenWPN: "./assets/wpn/Icon_r201.webp"},
    {nombreWPN: "R-101 Carbine", clase: "AR", imagenWPN: "./assets/wpn/Icon_r101.webp"},
    {nombreWPN: "Hemlok BF-R", clase: "AR", imagenWPN: "./assets/wpn/Icon_hemlok.webp"},

    {nombreWPN: "CAR", clase: "SMG", imagenWPN: "./assets/wpn/Icon_car.webp"},
    {nombreWPN: "Alternator", clase: "SMG", imagenWPN: "./assets/wpn/Icon_alternator.webp"},
    {nombreWPN: "Volt", clase: "SMG", imagenWPN: "./assets/wpn/Icon_volt.webp"},
    
    {nombreWPN: "Spitfire", clase: "LMG", imagenWPN: "./assets/wpn/Icon_spitfire.webp"},
    {nombreWPN: "L-STAR", clase: "LMG", imagenWPN: "./assets/wpn/Icon_lstar.webp"},
    {nombreWPN: "X-55 Devotion", clase: "LMG", imagenWPN: "./assets/wpn/Icon_devotion.webp"},

    {nombreWPN: "Kraber-AP Sniper", clase: "RF", imagenWPN: "./assets/wpn/Icon_kraber.webp"},
    {nombreWPN: "D-2 Double Take", clase: "RF", imagenWPN: "./assets/wpn/Icon_doubletake.webp"},
    {nombreWPN: "Longbow DMR", clase: "RF", imagenWPN: "./assets/wpn/Icon_dmr.webp"},

    {nombreWPN: "EVA-8 Shotgun", clase: "SG", imagenWPN: "./assets/wpn/Icon_eva8.webp"},
    {nombreWPN: "Mastiff", clase: "SG", imagenWPN: "./assets/wpn/Icon_mastiff.webp"},

    {nombreWPN: "Sidewinder SMR", clase: "GL", imagenWPN: "./assets/wpn/Icon_smr.webp"},
    {nombreWPN: "EPG-1", clase: "GL", imagenWPN: "./assets/wpn/Icon_epg.webp"},
    {nombreWPN: "R-6P Softball", clase: "GL", imagenWPN: "./assets/wpn/Icon_softball.webp"},

    {nombreWPN: "Wingman Elite", clase: "HG", imagenWPN: "./assets/wpn/Icon_wingmanelite.webp"},
    {nombreWPN: "SA-3 Mozambique", clase: "HG", imagenWPN: "./assets/wpn/Icon_mozambique.webp"}
];

const sideWPN = [
    {nombreSIDE: "RE-45 Auto", imagenSIDE: "./assets/wpn/Icon_re45.webp"},
    {nombreSIDE: "Hammond P2016", imagenSIDE: "./assets/wpn/Icon_p2016.webp"},
    {nombreSIDE: "B3 Wingman", imagenSIDE: "./assets/wpn/Icon_b3wingman.webp"}
];

const titanWPN = [
    {nombreTWPN: "Charge Rifle", imagenTWPN: "./assets/wpn/Icon_chargerifle.webp"},
    {nombreTWPN: "MGL Mag Launcher", imagenTWPN: "./assets/wpn/Icon_mgl.webp"},
    {nombreTWPN: "LG-97 Thunderbolt", imagenTWPN: "./assets/wpn/Icon_thunderbolt.webp"},
    {nombreTWPN: "Archer", imagenTWPN: "./assets/wpn/Icon_archer.webp"}
];

const wpnMODS = [
    {imagenMODS: "./assets/wpnmod/Att_extraammo.webp"},
    {imagenMODS: "./assets/wpnmod/Att_gunrunner.webp"},
    {imagenMODS: "./assets/wpnmod/Att_speedloader.webp"},
    {imagenMODS: "./assets/wpnmod/Att_gunready.webp"},
    {imagenMODS: "./assets/wpnmod/Att_quickswap.webp"},
    {imagenMODS: "./assets/wpnmod/Att_tactikill.webp"},
    {imagenMODS: "./assets/wpnmod/Att_ricochet.webp"},
    {imagenMODS: "./assets/wpnmod/Att_suppressor.webp"},
    {imagenMODS: "./assets/wpnmod/Att_chargehack.webp"}
]

const wpnSIGHTS = [
    {imagenSIGHTS: "./assets/wpnsight/Att_hcog.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_hcogranger.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_threatscope.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_holosight.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_variablezoomscope.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_aogscope.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_factoryissue.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_factoryissue_doubletake.webp", clase: "lorem"},
    {imagenSIGHTS: "./assets/wpnsight/Att_factoryissue_sniper.webp", clase: "lorem"}
]

const pilotKIT = [
    {nombreKit: "Power Cell", imagenKit: "./assets/pilotkit/Pilotkit_powercell.webp"},
    {nombreKit: "Fast Regen", imagenKit: "./assets/pilotkit/Pilotkit_fastregen.webp"},
    {nombreKit: "Ordnance Expert", imagenKit: "./assets/pilotkit/Pilotkit_ordnanceexpert.webp"},
    {nombreKit: "Phase Embark", imagenKit: "./assets/pilotkit/Pilotkit_phaseembark.webp"}
];

const pilotKITS = [
    {nombreKitS: "Kill Report", imagenKitS: "./assets/pilotkit/Pilotkit_killreport.webp"},
    {nombreKitS: "Wall Hang", imagenKitS: "./assets/pilotkit/Pilotkit_wallhang.webp"},
    {nombreKitS: "Hover", imagenKitS: "./assets/pilotkit/Pilotkit_hover.webp"},
    {nombreKitS: "Low Profile", imagenKitS: "./assets/pilotkit/Pilotkit_lowprofile.webp"},
    {nombreKitS: "Titan Hunter", imagenKitS: "./assets/pilotkit/Pilotkit_titanhunter.webp"}
];

const titanes = [
    {nombreTitan: "Northstar", imagenTitan: "./assets/titan/Titanicon_northstar.webp", clase: "alfa"},
    {nombreTitan: "Ronin", imagenTitan: "./assets/titan/Titanicon_ronin.webp", clase: "alfa"},
    {nombreTitan: "Scorch", imagenTitan: "./assets/titan/Titanicon_scorch.webp", clase: "alfa"},
    {nombreTitan: "Ion", imagenTitan: "./assets/titan/Titanicon_ion.webp", clase: "beta"},
    {nombreTitan: "Legion", imagenTitan: "./assets/titan/Titanicon_legion.webp", clase: "beta"},
    {nombreTitan: "Tone", imagenTitan: "./assets/titan/Titanicon_tone.webp", clase: "gamma"},
    {nombreTitan: "Monarch", imagenTitan: "./assets/titan/Titanicon_monarch.webp", clase: "gamma"}
];