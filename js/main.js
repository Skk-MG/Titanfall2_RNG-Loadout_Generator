const rerollear = document.querySelector("#botonReroll")

rerollear.addEventListener("click", () => {

    // Habilidad primaria 
        
    function funcSkill(skillArray) {
        const skillRandom = Math.floor(Math.random() * pilotSkill.length);
        return [skillArray[skillRandom]];
    };
    const skillFinal = funcSkill(pilotSkill);

    let html = document.querySelector('.equipamiento');
    for(let skill of skillFinal){
        html.innerHTML += `
        <li>
            <p>${skill.nombreSkill}</p>
            <img src="${skill.imagenSkill}" alt="">
        </li>
        `
    };

    // Habilidad secundaria

    function funcBoost(boostArray) {
        const boostRandom = Math.floor(Math.random() * pilotBoost.length);
        return [boostArray[boostRandom]];
    };
    const boostFinal = funcBoost(pilotBoost);

    let html1 = document.querySelector('.equipamiento');
    for(let boost of boostFinal){
        html1.innerHTML += `
        <li>
            <p>${boost.nombreBoost}</p>
            <img src="${boost.imagenBoost}" alt="">
        </li>
        `
    };

    // Arrojables

    function funcNades(nadesArray) {
        const nadesRandom = Math.floor(Math.random() * pilotNades.length);
        return [nadesArray[nadesRandom]];
    };
    const nadesFinal = funcNades(pilotNades);

    let html2 = document.querySelector('.equipamiento');
    for(let nade of nadesFinal){
        html2.innerHTML += `
        <li>
            <p>${nade.nombreNades}</p>
            <img src="${nade.imagenNades}" alt="">
        </li>
        `
    };

    // Armas primarias, mods y miras

    function funcWpns(primWpnArray) {
        const wpnsRandom = Math.floor(Math.random() * mainWPN.length);
        return [primWpnArray[wpnsRandom]];
    };

    function funcMods(modsArray) {
        const modsRandomA = Math.floor(Math.random() * wpnMODS.length);
        const modsRandomB = Math.floor(Math.random() * wpnMODS.length);
        while (modsRandomA === modsRandomB) {
            Math.floor(Math.random() * wpnMODS.length);
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
        html3.innerHTML += `
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

        html4.innerHTML += `
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

        html5.innerHTML += `
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
        const titanRandom = Math.floor(Math.random() * titan.length);

        return [titansArray[titanRandom]];
    };

    const kitFinal = funcKit(pilotKIT)
    const kitSFinal = funcKit(pilotKITS)
    const titansFinal = funcKit(titan)

    let html6 = document.querySelector('.extra');
    for(let kit of kitFinal) {

    for (let kitS of kitSFinal) {

    for (let titan of titansFinal) {

        html6.innerHTML += `
        <li class="kits">
            <p>${kit.nombreKit}</p>
            <img src="${kit.imagenKit}" alt="">
        </li>

        <li class="kits">
            <p>${kitS.nombreKitS}</p>
            <img src="${kitS.imagenKitS}" alt="">
        </li>

        <li class="kits"> 
            <p>Lorem, ipsum dolor.</p>
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



});
