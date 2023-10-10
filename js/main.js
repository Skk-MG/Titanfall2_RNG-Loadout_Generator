let lastRoll = [];

const rerollear = document.querySelector("#botonReroll");

// Carga los ultimos datos previamente guardados (si es que existen)

document.addEventListener('DOMContentLoaded', () => {
    if (JSON.parse(localStorage.getItem("lastRollSync")) == null) {
        lastRoll = [];
    } else {
        const arrayRecuperado = JSON.parse(localStorage.getItem("lastRollSync"))
        // console.log(arrayRecuperado)
        let ultimoRoll = document.querySelector('.contenedor');

        for(let item of arrayRecuperado) {
        ultimoRoll.innerHTML = `
            <div class="equipamiento">
                <li>
                    <p>${arrayRecuperado[4].nombreSkill}</p>
                    <img src="${arrayRecuperado[4].imagenSkill}" alt="">
                </li>
                <li>
                    <p>${arrayRecuperado[5].nombreBoost}</p>
                    <img src="${arrayRecuperado[5].imagenBoost}" alt="">
                </li>
                <li>
                    <p>${arrayRecuperado[6].nombreNades}</p>
                    <img src="${arrayRecuperado[6].imagenNades}" alt="">
                </li>
            </div>

            <div class="equipamiento mainwpn">
                <li>
                    <p>${arrayRecuperado[7].nombreWPN}</p>
                    <img src="${arrayRecuperado[7].imagenWPN}" alt="" class="wpn">
                </li>
        
                <img class="mod" src="${arrayRecuperado[8].imagenMODS}" alt="">
        
                <img class="mod" src="${arrayRecuperado[9].imagenMODS}" alt="">
        
                <img class="mod" src="${arrayRecuperado[10].imagenSIGHTS}" alt="">    

                <img class="mod" src="./assets/wpnmod/Att_proscreen.webp" alt="">
            </div>

            <div class="equipamiento sidewpn">
                <li>
                    <p>${arrayRecuperado[11].nombreSIDE}</p>
                    <img src="${arrayRecuperado[11].imagenSIDE}" alt="" class="wpn">
                </li>
        
                <img class="mod" src="${arrayRecuperado[0].imagenMODS}" alt="">
        
                <img class="mod" src="${arrayRecuperado[1].imagenMODS}" alt="">    

                <img class="mod" src="./assets/wpnmod/Att_proscreen.webp" alt="">
            </div>

            <div class="equipamiento titanwpn">
                <li>
                    <p>${arrayRecuperado[12].nombreTWPN}</p>
                    <img src="${arrayRecuperado[12].imagenTWPN}" alt="" class="wpn">
                </li>
        
                <img class="mod" src="${arrayRecuperado[2].imagenMODS}" alt="">
        
                <img class="mod" src="${arrayRecuperado[3].imagenMODS}" alt="">    

                <img class="mod" src="./assets/wpnmod/Att_proscreen.webp" alt="">
            </div>

            <div class="equipamiento extra">
                <li class="kits">
                    <p>${arrayRecuperado[13].nombreKit}</p>
                    <img src="${arrayRecuperado[13].imagenKit}" alt="">
                </li>
        
                <li class="kits">
                    <p>${arrayRecuperado[14].nombreKitS}</p>
                    <img src="${arrayRecuperado[14].imagenKitS}" alt="">
                </li>
        
                <li class="kits"> 
                    <p>Random Execution</p>
                    <img src="./assets/pilotkit/unknown.jpg" alt="">
                </li>
        
                <li>
                    <p>${arrayRecuperado[15].nombreTitan}</p>
                    <img class="titan" src="${arrayRecuperado[15].imagenTitan}" alt="">
                </li> 
            </div>
            `
        };

    };

});

rerollear.addEventListener("click", () => {

    // Habilidad primaria - Habilidad secundaria - Arrojadizas
        
    function funcSkill(skillArray) {
        const skillRandom = Math.floor(Math.random() * pilotSkill.length);
        return [skillArray[skillRandom]];
    };
    
    function funcBoost(boostArray) {
        const boostRandom = Math.floor(Math.random() * pilotBoost.length);
        return [boostArray[boostRandom]];
    };
    
    function funcNades(nadesArray) {
        const nadesRandom = Math.floor(Math.random() * pilotNades.length);
        return [nadesArray[nadesRandom]];
    };
    
    const skillFinal = funcSkill(pilotSkill);
    const boostFinal = funcBoost(pilotBoost);
    const nadesFinal = funcNades(pilotNades);

    let html = document.querySelector('.equipamiento');
    for(let skill of skillFinal){
    for(let boost of boostFinal){
    for(let nade of nadesFinal){

        html.innerHTML = `
        <li>
            <p>${skill.nombreSkill}</p>
            <img src="${skill.imagenSkill}" alt="">
        </li>
        <li>
            <p>${boost.nombreBoost}</p>
            <img src="${boost.imagenBoost}" alt="">
        </li>
        <li>
            <p>${nade.nombreNades}</p>
            <img src="${nade.imagenNades}" alt="">
        </li>
        `
    }
    }
    };


    // Armas primarias, mods y miras

    function funcWpns(primWpnArray) {
        const wpnsRandom = Math.floor(Math.random() * mainWPN.length);
        return [primWpnArray[wpnsRandom]];
    };

    function funcMods(modsArray) {
        let modsRandomA = Math.floor(Math.random() * wpnMODS.length);
        let modsRandomB = Math.floor(Math.random() * wpnMODS.length);
        if (modsRandomA === modsRandomB) {
            modsRandomB = Math.floor(Math.random() * wpnMODS.length);
        }

        return [modsArray[modsRandomA], modsArray[modsRandomB]];
    };

    function funcSights(sightsArray) {
        const sightsRandom = Math.floor(Math.random() * wpnSIGHTS.length);
        return [sightsArray[sightsRandom]];
    };

    const wpnsFinal = funcWpns(mainWPN);
    const modsFinal = funcMods(wpnMODS);
    const sightsFinal = funcSights(wpnSIGHTS);

    let html3 = document.querySelector('.mainwpn');
    for(let wpn of wpnsFinal) {

    for(let sight of sightsFinal) {
        html3.innerHTML = `
        <li>
            <p>${wpn.nombreWPN}</p>
            <img src="${wpn.imagenWPN}" alt="" class="wpn">
        </li>

        <img class="mod" src="${modsFinal[0].imagenMODS}" alt="">

        <img class="mod" src="${modsFinal[1].imagenMODS}" alt="">

        <img class="mod" src="${sight.imagenSIGHTS}" alt="">

        <img class="mod" src="./assets/wpnmod/Att_proscreen.webp" alt="">
        `
    }
    };


    // Armas secundarias

    function funcSideWpns(SideWpnArray) {
        const sideWpnsRandom = Math.floor(Math.random() * sideWPN.length);
        return [SideWpnArray[sideWpnsRandom]];
    };

    const sideWpnsFinal = funcSideWpns(sideWPN);

    let html4 = document.querySelector('.sidewpn');
    for(let sideWpn of sideWpnsFinal) {

        let sideReroll = funcMods(wpnMODS);
        lastRoll.push(...sideReroll);

        html4.innerHTML = `
        <li>
            <p>${sideWpn.nombreSIDE}</p>
            <img src="${sideWpn.imagenSIDE}" alt="" class="wpn">
        </li>

        <img class="mod" src="${sideReroll[0].imagenMODS}" alt="">

        <img class="mod" src="${sideReroll[1].imagenMODS}" alt="">

        <img class="mod" src="./assets/wpnmod/Att_proscreen.webp" alt="">
        `
    };


    // Armas anti-titan

    function funcTitanWpns(TitanWpnArray) {
        const titanWpnsRandom = Math.floor(Math.random() * titanWPN.length);
        return [TitanWpnArray[titanWpnsRandom]];
    };

    const sideTitanFinal = funcTitanWpns(titanWPN);

    let html5 = document.querySelector('.titanwpn');
    for(let titanWpn of sideTitanFinal) {

        let titanReroll = funcMods(wpnMODS);
        lastRoll.push(...titanReroll);

        html5.innerHTML = `
        <li>
            <p>${titanWpn.nombreTWPN}</p>
            <img src="${titanWpn.imagenTWPN}" alt="" class="wpn">
        </li>

        <img class="mod" src="${titanReroll[0].imagenMODS}" alt="">

        <img class="mod" src="${titanReroll[1].imagenMODS}" alt="">

        <img class="mod" src="./assets/wpnmod/Att_proscreen.webp" alt="">
        `
    };


    // Habilidades pasivas y titan

    function funcKit(kitArray) {
        const kitRandom = Math.floor(Math.random() * pilotKIT.length);

        return [kitArray[kitRandom]];
    };

    function funcKitS(kitSArray) {
        const kitSRandom = Math.floor(Math.random() * pilotKITS.length);

        return [kitSArray[kitSRandom]];
    };

    function funcTitans(titansArray) {
        const titanRandom = Math.floor(Math.random() * titanes.length);

        return [titansArray[titanRandom]];
    };

    const kitFinal = funcKit(pilotKIT)
    const kitSFinal = funcKitS(pilotKITS)
    const titansFinal = funcTitans(titanes)

    let html6 = document.querySelector('.extra');
    for(let kit of kitFinal) {

    for (let kitS of kitSFinal) {

    for (let titan of titansFinal) {

        html6.innerHTML = `
        <li class="kits">
            <p>${kit.nombreKit}</p>
            <img src="${kit.imagenKit}" alt="">
        </li>

        <li class="kits">
            <p>${kitS.nombreKitS}</p>
            <img src="${kitS.imagenKitS}" alt="">
        </li>

        <li class="kits"> 
            <p>Random Execution</p>
            <img src="./assets/pilotkit/unknown.jpg" alt="">
        </li>

        <li>
            <p>${titan.nombreTitan}</p>
            <img class="titan" src="${titan.imagenTitan}" alt="">
        </li> 
        `
    }
    }
    };
    
    // Manda todos los datos al local storage y se asegura que no se acumulen 

    lastRoll.push(...skillFinal, ...boostFinal, ...nadesFinal, ...wpnsFinal, ...modsFinal, ...sightsFinal, ...sideWpnsFinal, ...sideTitanFinal, ...kitFinal, ...kitSFinal, ...titansFinal);

    if (lastRoll.length > 17) {
        lastRoll = [];
    } else {
        localStorage.setItem("lastRollSync", JSON.stringify(lastRoll));
    };

});


// Limpia el localStorage

const limpiarStorage = document.querySelector('#woosh');

limpiarStorage.addEventListener('click', () => {
    localStorage.clear();
});

/*
var AR_Array = mainWPN.filter(wpn => wpn.clase === "AR");
var SMG_Array = mainWPN.filter(wpn => wpn.clase === "SMG");
var LMG_Array = mainWPN.filter(wpn => wpn.clase === "LMG");
var RF_Array = mainWPN.filter(wpn => wpn.clase === "RF");
var SG_Array = mainWPN.filter(wpn => wpn.clase === "SG");
var GL_Array = mainWPN.filter(wpn => wpn.clase === "GL");
var HG_Array = mainWPN.filter(wpn => wpn.clase === "HG");

console.log(AR_Array,
    SMG_Array
    ,LMG_Array
    ,RF_Array
    ,SG_Array
    ,GL_Array
    ,HG_Array);

const map1 = mainWPN.map(({nombreWPN, clase}) => {
    console.log(`${nombreWPN} es un arma del tipo ${clase}!`);
});
*/