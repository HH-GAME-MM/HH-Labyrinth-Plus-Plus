// ==UserScript==
// @name         HH Labyrinth++
// @version      0.10.1
// @description  Upgrade Labyrinth and WBT with various features
// @author       -MM-, xnh0x
// @match        https://*.hentaiheroes.com/labyrinth.html*
// @match        https://*.hentaiheroes.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.hentaiheroes.com/world-boss-pre-battle*
// @match        https://*.hentaiheroes.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.hentaiheroes.com/world-boss-battle.html*
// @match        https://*.hentaiheroes.com/edit-labyrinth-team.html*
// @match        https://*.hentaiheroes.com/edit-world-boss-team.html*
// @match        https://*.hentaiheroes.com/penta-drill-arena.html*
// @match        https://*.hentaiheroes.com/penta-drill-pre-battle*
// @match        https://nutaku.haremheroes.com/labyrinth.html*
// @match        https://nutaku.haremheroes.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://nutaku.haremheroes.com/world-boss-pre-battle*
// @match        https://nutaku.haremheroes.com/labyrinth-battle.html?id_opponent=*
// @match        https://nutaku.haremheroes.com/world-boss-battle.html*
// @match        https://nutaku.haremheroes.com/edit-labyrinth-team.html*
// @match        https://nutaku.haremheroes.com/edit-world-boss-team.html*
// @match        https://nutaku.haremheroes.com/penta-drill-arena.html*
// @match        https://nutaku.haremheroes.com/penta-drill-pre-battle*
// @match        https://*.comixharem.com/labyrinth.html*
// @match        https://*.comixharem.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.comixharem.com/world-boss-pre-battle*
// @match        https://*.comixharem.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.comixharem.com/world-boss-battle.html*
// @match        https://*.comixharem.com/edit-labyrinth-team.html*
// @match        https://*.comixharem.com/edit-world-boss-team.html*
// @match        https://*.comixharem.com/penta-drill-arena.html*
// @match        https://*.comixharem.com/penta-drill-pre-battle*
// @match        https://*.pornstarharem.com/labyrinth.html*
// @match        https://*.pornstarharem.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.pornstarharem.com/world-boss-pre-battle*
// @match        https://*.pornstarharem.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.pornstarharem.com/world-boss-battle.html*
// @match        https://*.pornstarharem.com/edit-labyrinth-team.html*
// @match        https://*.pornstarharem.com/edit-world-boss-team.html*
// @match        https://*.pornstarharem.com/penta-drill-arena.html*
// @match        https://*.pornstarharem.com/penta-drill-pre-battle*
// @match        https://*.gayharem.com/labyrinth.html*
// @match        https://*.gayharem.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.gayharem.com/world-boss-pre-battle*
// @match        https://*.gayharem.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.gayharem.com/world-boss-battle.html*
// @match        https://*.gayharem.com/edit-labyrinth-team.html*
// @match        https://*.gayharem.com/edit-world-boss-team.html*
// @match        https://*.gayharem.com/penta-drill-arena.html*
// @match        https://*.gayharem.com/penta-drill-pre-battle*
// @match        https://*.gaypornstarharem.com/labyrinth.html*
// @match        https://*.gaypornstarharem.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.gaypornstarharem.com/world-boss-pre-battle*
// @match        https://*.gaypornstarharem.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.gaypornstarharem.com/world-boss-battle.html*
// @match        https://*.gaypornstarharem.com/edit-labyrinth-team.html*
// @match        https://*.gaypornstarharem.com/edit-world-boss-team.html*
// @match        https://*.gaypornstarharem.com/penta-drill-arena.html*
// @match        https://*.gaypornstarharem.com/penta-drill-pre-battle*
// @match        https://*.transpornstarharem.com/labyrinth.html*
// @match        https://*.transpornstarharem.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.transpornstarharem.com/world-boss-pre-battle*
// @match        https://*.transpornstarharem.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.transpornstarharem.com/world-boss-battle.html*
// @match        https://*.transpornstarharem.com/edit-labyrinth-team.html*
// @match        https://*.transpornstarharem.com/edit-world-boss-team.html*
// @match        https://*.transpornstarharem.com/penta-drill-arena.html*
// @match        https://*.transpornstarharem.com/penta-drill-pre-battle*
// @match        https://*.hornyheroes.com/labyrinth.html*
// @match        https://*.hornyheroes.com/labyrinth-pre-battle.html?id_opponent=*
// @match        https://*.hornyheroes.com/world-boss-pre-battle*
// @match        https://*.hornyheroes.com/labyrinth-battle.html?id_opponent=*
// @match        https://*.hornyheroes.com/world-boss-battle.html*
// @match        https://*.hornyheroes.com/edit-labyrinth-team.html*
// @match        https://*.hornyheroes.com/edit-world-boss-team.html*
// @match        https://*.hornyheroes.com/penta-drill-arena.html*
// @match        https://*.hornyheroes.com/penta-drill-pre-battle*
// @run-at       document-body
// @namespace    https://github.com/HH-GAME-MM/HH-Labyrinth-Plus-Plus
// @updateURL    https://github.com/HH-GAME-MM/HH-Labyrinth-Plus-Plus/raw/main/HH-Labyrinth-Plus-Plus.user.js
// @downloadURL  https://github.com/HH-GAME-MM/HH-Labyrinth-Plus-Plus/raw/main/HH-Labyrinth-Plus-Plus.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hentaiheroes.com
// @grant        GM_info
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    /*global unsafeWindow,shared,GT,opponent_fighter,hero_fighter,get_lang,$*/

    console.log(GM_info.script.name + ' Script v' + GM_info.script.version);

    //local storage key
    const LS_KEY = 'HHLabyrinthPlusPlus_Config';

    //css
    switch(unsafeWindow.location.pathname)
    {
        case '/labyrinth.html':
            Labyrinth_css(); break;
        case '/labyrinth-pre-battle.html':
        case '/world-boss-pre-battle':
        case '/world-boss-pre-battle.html':
            PreBattle_css(); break;
        case '/labyrinth-battle.html':
        case '/world-boss-battle.html':
            Battle_css(); break;
        case '/edit-labyrinth-team.html':
        case '/edit-world-boss-team.html':
            EditTeam_css(); break;
    }

    if(document.readyState !== 'loading') {
        DOMContentLoaded();
    } else {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded);
    }

    function DOMContentLoaded()
    {
        //shared game functions and objects
        const {
            Hero,
            animations: { loadingAnimation },
            general: { hh_ajax, objectivePopup },
            popups_manager: { HHPopupManager },
            reward_popup: { Reward },
        } = shared;
        const getSessionId = (unsafeWindow.getSessionId ? unsafeWindow.getSessionId : () => { return new URLSearchParams(unsafeWindow.location.search).get("sess"); }); //Nutaku only

        switch(unsafeWindow.location.pathname)
        {
            case '/labyrinth.html':
                onReadyRun(Labyrinth_run, '.labyrinth-panel .labyrinth-container .bottom-section'); break;
            case '/labyrinth-pre-battle.html':
            case '/world-boss-pre-battle': // coming from home page the path doesn't have .html
            case '/world-boss-pre-battle.html':
                onReadyRun(PreBattle_run, '#perform_opponent'); break;
            case '/edit-labyrinth-team.html':
            case '/edit-world-boss-team.html':
                onReadyRun(EditTeam_run, 'div.change-team-panel .panel-title'); break;
        }

        function onReadyRun(callback, selector) {
            if(document.querySelector(selector) !== null) {
                callback();
            } else {
                setTimeout(onReadyRun, 10, callback, selector);
            }
        }

        function Labyrinth_run()
        {
            //HH Labyrinth++ text
            const bottomSection = document.querySelector('.labyrinth-panel .labyrinth-container .bottom-section');
            const div = document.createElement('div');
            div.setAttribute('class', 'credits');
            div.innerHTML = GM_info.script.name + ' v' + GM_info.script.version + ' by <div style="display:inline;cursor:pointer" onclick="' + (unsafeWindow.location.hostname === 'www.hentaiheroes.com' ? 'shared.general.hero_page_popup({ id:4266159, preview: false, page: \'profile\' })' : 'window.open(\'https://www.hentaiheroes.com/hero/4266159/profile.html\', \'_blank\');') + '">-MM-</div>';
            bottomSection.appendChild(div);

            //shop mods
            const container = document.querySelector('#shop_tab_container');
            new MutationObserver((mutations, observer) => {
                for(let i = 0; i < mutations.length; i++) {
                    for(let j = 0; j < mutations[i].addedNodes.length; j++) {
                        if(mutations[i].addedNodes[j].nodeType === Node.ELEMENT_NODE && mutations[i].addedNodes[j].classList.contains('shop-section')) {
                            applyShopMods(mutations[i].addedNodes[j]);
                        }
                    }
                }
            }).observe(container, { childList:true, subtree:true });
            applyShopMods(container);

            //reward popup mods
            const popupContainer = document.querySelector('#common-popups');
            new MutationObserver((mutations, observer) => {
                for(let i = 0; i < mutations.length; i++) {
                    for(let j = 0; j < mutations[i].addedNodes.length; j++) {
                        if(mutations[i].addedNodes[j].nodeType === Node.ELEMENT_NODE && applyPopupMods(mutations[i].addedNodes[j])) {
                            return;
                        }
                    }
                }
            }).observe(popupContainer, { childList:true, subtree:true });
            applyPopupMods(popupContainer);

            function applyShopMods(node)
            {
                //change items list style
                const itemsList = node.querySelector('.shop-items-list');
                if(itemsList) {
                    const shopItemsCount = itemsList.querySelectorAll('.shop-item').length;
                    itemsList.setAttribute('style', 'grid-template-columns: auto auto auto auto auto; overflow: ' + (shopItemsCount > 10 ? 'scroll' : 'hidden') + '; outline: none; grid-column-gap: 0.7rem; height: ' + (shopItemsCount > 10 ? '26.5' : '20') + 'rem !important;');
                }

                //add confirmation to the buy buttons
                const buyButtons = node.querySelectorAll('button.blue_button_L.buy-item');
                for(let i = 0; i < buyButtons.length; i++)
                {
                    let btn = buyButtons[i];

                    btn.addEventListener("click", (event) => {
                        if(!confirm('Would you like to buy this item for ' + event.currentTarget.querySelector('.price-container').innerText.trim() + ' coins?'))
                        {
                            //stop the click event so that it is not executed by Kinkoid's handler
                            if (event.stopPropagation) {
                                event.stopPropagation(); // W3C model
                            } else {
                                event.cancelBubble = true; // IE model
                            }
                        }
                    });

                    //show the buy button again
                    btn.setAttribute('style', 'display: inline-block !important');
                }
            }

            function applyPopupMods(node)
            {
                const nodeRewardsScrollable = node.querySelector('#reward_holder .rewards_scrollable');
                if(nodeRewardsScrollable !== null && node.querySelector('#reward_holder .rewards_scrollable a') === null && node.querySelector('#reward_holder .rewards_scrollable p') !== null) {
                    const nutakuSessionId = getSessionId();
                    nodeRewardsScrollable.innerHTML += '<a style="position: absolute; right: 130px; top: 1rem; color: white;" href="/edit-labyrinth-team.html' + (nutakuSessionId !== null ? '?sess=' + nutakuSessionId : '') + '">Open Edit Team Page</a>';

                    const lang = get_lang().substr(0, 2);

                    const allGirls = (isGay() ? {
                        en: ['all guys'],
                        de: ['aller kerle', 'allen kerlen'],
                        es: ['de todos los chicos'], //lang does not exist
                        fr: ['de tous les mecs'],
                        it: ['di tutti i ragazzi'], //lang does not exist
                        ja: ['all guys'], //lang does not exist
                        ru: ['all guys'], //lang does not exist
                    } : {
                        en: ['all girls'],
                        de: ['aller mädchen', 'allen mädchen'],
                        es: ['de todas las chicas'],
                        fr: ['de toutes les filles'],
                        it: ['di tutte le ragazze'],
                        ja: ['all girls'],
                        ru: ['all girls'],
                    });

                    const iconSet = [
                        'https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.0.1/72x72/1f600.png', //very good relic
                        'https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.0.1/72x72/1f642.png', //good relic
                        'https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.0.1/72x72/1f641.png', //bad relic
                        'https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.0.1/72x72/1f629.png', //very bad relic
                        'https://cdnjs.cloudflare.com/ajax/libs/twemoji/13.0.1/72x72/1f914.png']; //not rated

                    //custom iconSet
                    if(location.hostname === 'www.hentaiheroes.com')
                    {
                        //-MM- and Zam
                        if(Hero.infos.id === 4266159 || Hero.infos.id === 3486370)
                        {
                            iconSet[0] = 'https://raw.githubusercontent.com/HH-GAME-MM/HH-Club-Chat-Plus-Plus/main/res/emojis/asuna_happy.png';
                            iconSet[4] = 'https://cdn.discordapp.com/emojis/862672993720336394.webp?size=48&quality=lossless';
                        }
                        //holymolly
                        else if(Hero.infos.id === 844437)
                        {
                            iconSet[0] = 'https://cdn.discordapp.com/emojis/953395143510224957.webp?size=48&quality=lossless';
                            iconSet[3] = 'https://media.tenor.com/OtYUkoFsA1AAAAAM/mona-mona-genshin-impact.gif';
                            iconSet[4] = 'https://cdn.discordapp.com/emojis/862672993720336394.webp?size=48&quality=lossless';
                        }
                        //Darkyz
                        else if(Hero.infos.id === 124704)
                        {
                            iconSet[0] = 'https://cdn.discordapp.com/avatars/334514898010636289/97f004f88d823d9614436c8d3b08edc1.webp?size=128';
                        }
                    }

                    //relic ratings
                    const relicNodes = node.querySelectorAll('.relic-container');
                    for(let i = 0; i < relicNodes.length; i++)
                    {
                        const nameAndRarityNode = relicNodes[i].querySelector('.relic-name');
                        const nameAndRarity = nameAndRarityNode.innerText;
                        const descriptionLC = relicNodes[i].querySelector('.relic-description').innerText.toLowerCase();
                        const relicIsAllGirls = allGirls[lang].some(e => descriptionLC.includes(e));

                        let iconIndex = 4;
                        let iconText = "unrated relic";

                        //very good relic?
                        if(nameAndRarity.startsWith(GT.design.girl_dodge_name) || //Duck Master
                           nameAndRarity.startsWith(GT.design.team_healthy_name) || //Vigorous Motivation
                           nameAndRarity.startsWith(GT.design.team_executioner_name) || //Finish Move
                           nameAndRarity.startsWith(GT.design.team_protective_name)) //Protective Bubble
                        {
                            iconIndex = 0;
                            iconText = "very good relic";
                        }
                        //good relic?
                        else if(nameAndRarity.startsWith(GT.design.team_impactful_back_name) || //Attack from the Back
                                nameAndRarity.startsWith(GT.design.team_critical_expectation_name) || //Critical Expectation
                                (nameAndRarity.startsWith(GT.design.team_egoist_name) && relicIsAllGirls) || //Egoist
                                nameAndRarity.startsWith(GT.design.girl_double_attack_name) || //Double Attack
                                (nameAndRarity.startsWith(GT.design.team_impactful_name) && relicIsAllGirls) || //Impactful
                                (nameAndRarity.startsWith(GT.design.team_critical_name) && relicIsAllGirls)) //Critical Thinking
                        {
                            iconIndex = 1;
                            iconText = "good relic";
                        }
                        //bad relic?
                        else if(nameAndRarity.startsWith(GT.design.team_hex_name) || //Curse
                                nameAndRarity.startsWith(GT.design.team_berserk_name) || //Berserk
                                nameAndRarity.startsWith(GT.design.team_shield_name) || //Protection Assist
                                (nameAndRarity.startsWith(GT.design.team_harmony_name) && relicIsAllGirls)) //Sweet Harmony
                        {
                            iconIndex = 2;
                            iconText = "bad relic";
                        }
                        //very bad relic?
                        else if(nameAndRarity.startsWith(GT.design.girl_harmony_name) || //Sweet Harmony
                                nameAndRarity.startsWith(GT.design.team_harmony_middle_name)) //Harmony in the middle
                        {
                            iconIndex = 3;
                            iconText = "very bad relic";
                        }

                        //unrated relics:
                        //rejuvenation
                        //element powers
                        //defender of the haremverse
                        //front defender

                        nameAndRarityNode.innerHTML += '<img src="' + iconSet[iconIndex] + '" style="width: 36px;position: absolute;right: -15px;top: -20px;" title="' + iconText + '" alt="' + iconText + '">';
                    }

                    return true;
                }

                return false;
            }
        }

        function PreBattle_run()
        {
            const nutakuSessionId = getSessionId();
            const isLab = unsafeWindow.location.pathname === '/labyrinth-pre-battle.html';

            const battleURL = isLab
                ? `/labyrinth-battle.html?id_opponent=${opponent_fighter.id_fighter}&number_of_battles=1${nutakuSessionId !== null ? '&sess=' + nutakuSessionId : ''}`
                : `/world-boss-battle.html${nutakuSessionId !== null ? '?sess=' + nutakuSessionId : ''}`;

            //remove event listeners from middle container
            const container = document.querySelector('div.middle-container');
            container.setAttribute('style', 'text-align: center');
            container.parentNode.replaceChild(container.cloneNode(true), container);

            // restore behavior
            if (isLab) {
                const btnBack = document.querySelector('#return_labyrinth');
                btnBack.addEventListener("click", () => {
                    unsafeWindow.location.href = "/labyrinth.html" + (nutakuSessionId !== null ? '?sess=' + nutakuSessionId : '');
                });
            } else {
                const infoBox = document.querySelector('#strategy-infos');
                const infoBubble = document.querySelector('.strategy-tips.speech_bubble_info_icn');
                infoBubble.addEventListener('click', () => { infoBox.classList.remove('hidden') });
                const closeInfo = document.querySelector('#close_info');
                closeInfo.addEventListener('click', () => { infoBox.classList.add('hidden') });
            }

            //button Perform!
            let btnPerform = document.querySelector('#perform_opponent');
            btnPerform.addEventListener("click", () => {
                btnPerform_Click(false);
            });

            //button Perform and skip battle!
            let btnPerformAjax = btnPerform.cloneNode(true);
            btnPerformAjax.setAttribute('style', 'display: inline-block; margin-top: 0.5rem');
            btnPerformAjax.innerHTML = 'Perform and skip battle!';
            btnPerformAjax.addEventListener("click", () => {
                btnPerform_Click(true);
            });
            btnPerform.after(btnPerformAjax);

            //fix HH++ relics button
            const btnRelics = document.querySelector('.script-relics-toggle');
            if(btnRelics !== null)
            {
                const btnRelicsClone = btnRelics.cloneNode(true);
                btnRelics.parentNode.replaceChild(btnRelicsClone, btnRelics);
                btnRelicsClone.addEventListener("click", () => {
                    $('.middle-container .script-relics-panel').toggle();
                });
            }

            function btnPerform_Click(skipFight)
            {
                const isTeamFull = Object.keys(hero_fighter.team.girls).length === 7;
                if (isTeamFull || confirm(GT.design.labyrinth_partially_full_team)) {
                    if(skipFight) {
                        performAjax();
                    } else {
                        unsafeWindow.location.href = battleURL;
                    }
                }
            }

            function performAjax()
            {
                //disable the buttons and remove the event listeners
                btnPerform.setAttribute('disabled', 'disabled');
                btnPerformAjax.setAttribute('disabled', 'disabled');
                const btnPerformClone = btnPerform.cloneNode(true);
                const btnPerformAjaxClone = btnPerformAjax.cloneNode(true);
                btnPerform.parentNode.replaceChild(btnPerformClone, btnPerform);
                btnPerformAjax.parentNode.replaceChild(btnPerformAjaxClone, btnPerformAjax);
                btnPerform = btnPerformClone;
                btnPerformAjax = btnPerformAjaxClone;

                loadingAnimation.start();

                //open the battle page first
                $.ajax({
                    url: battleURL,
                    success: function (data) {
                        //change referer
                        unsafeWindow.history.replaceState(null, '', battleURL);
                        const params = {
                            action: isLab ? "do_battles_labyrinth" : "do_battles_world_boss",
                            id_opponent: isLab ? opponent_fighter.id_fighter : "",
                            number_of_battles: "1"
                        };
                        hh_ajax(params, function (data) {
                            //change referer
                            unsafeWindow.history.replaceState(null, '', battleURL);
                            loadingAnimation.stop();
                            Reward.handlePopup(data.rewards);
                            Hero.updates(data.hero_changes);
                            if (data.objective_points) {
                                data.rewards.objective_points = data.objective_points;
                                objectivePopup.show(data.rewards);
                            }
                        })
                    }
                });
            }
        }

        function EditTeam_run()
        {
            //fix redirectUrl
            unsafeWindow.redirectUrl = unsafeWindow.redirectUrl.replace('/edit-labyrinth-team.html', '/labyrinth.html');

            //filter
            const mySquadNodeOri = document.querySelector('div.change-team-panel .panel-title');
            const mySquadNode = mySquadNodeOri.cloneNode(true); //reason for cloneNode: remove HH++ number e.g. "(280)"
            mySquadNodeOri.setAttribute('style', 'display:none');
            mySquadNode.setAttribute('class', 'panel-title-custom');
            mySquadNodeOri.after(mySquadNode);
            const mySquadText = mySquadNode.innerText;
            const searchBtn = document.querySelector('#filter_girls');
            const btns = [createBtn(2), createBtn(1), createBtn(3)];
            const config = loadConfigFromLocalStorage();
            if(config.lastFilter !== 0) {
                onReadyRun(() => { btns[indexToArrayIndex(config.lastFilter)].click(); }, 'div.select-group.girl-class-filter div.selectric-items ul li[data-index="1"]');
            } else {
                updateMySquadText();
            }

            //select the first free slot
            setTimeout(() => {
                document.querySelector('.team-member-container.selectable .base-hexagon img:not([class])')?.click();
            }, 1);

            function updateMySquadText()
            {
                const allGirls = document.querySelectorAll('div.change-team-panel div.harem-panel-girls div.harem-girl-container');
                let counter = 0;
                allGirls.forEach((e) => { counter += (isHidden(e) ? 0 : 1) });
                mySquadNode.innerHTML = mySquadText + '<br>' + counter + ' / ' + allGirls.length + ' ' + getGirlText() + 's';
            }

            function indexToArrayIndex(index)
            {
                switch(index)
                {
                    case 1: return 1;
                    case 2: return 0;
                    case 3: return 2;
                }
                return -1;
            }

            function createBtn(index)
            {
                const png = indexToArrayIndex(index) + 1;
                const style = (png === 3 ? 'float: right;' : 'float: right; margin-right: 10px;');

                const btn = document.createElement('button');
                btn.setAttribute('class', 'square_blue_btn');
                btn.setAttribute('style', style);
                btn.innerHTML = '<span class="search_open_icn" style="background-image: url(https://hh2.hh-content.com/pictures/misc/items_icons/' + png + '.png)"></span>';
                btn.addEventListener("click", () => {
                    btnClicked(btn, index);
                });
                searchBtn.after(btn);

                return btn;
            }

            function btnClicked(btn, index)
            {
                if(btn.classList.contains('pressedDown')) {
                    btn.classList.remove('pressedDown');
                    index = 0;
                } else {
                    btns.forEach((e) => e.classList.remove('pressedDown'));
                    btn.classList.add('pressedDown');
                }
                document.querySelector('div.select-group.girl-class-filter div.selectric-items ul li[data-index="' + index + '"]').click();
                updateMySquadText();
                config.lastFilter = index;
                saveConfigToLocalStorage(config);
            }
        }
    }

    function PreBattle_css()
    {
        const css = document.createElement('style');
        document.head.appendChild(css);
        css.sheet.insertRule('.strategy-tips.speech_bubble_info_icn { margin-top: 2rem !important }');
    }

    function EditTeam_css()
    {
        const css = document.createElement('style');
        document.head.appendChild(css);

        css.sheet.insertRule(`.change-team-panel button.pressedDown {
  box-shadow: none;
}`);
        css.sheet.insertRule(`div.change-team-panel .panel-title-custom {
  font-size: 0.95rem;
  margin-bottom: 0;
  margin-top: -5px;
  height: 47px;
  color: #FFB827;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
  text-align: center;
}`);
        css.sheet.insertRule(`div.change-team-panel .panel-body {
  height: 92% !important;
}`);
    }

    function Battle_css()
    {
        const css = document.createElement('style');
        document.head.appendChild(css);

        //skip button perm visible
        css.sheet.insertRule('button#new-battle-skip-btn {display: block !important}');
    }

    function Labyrinth_css()
    {
        const css = document.createElement('style');
        document.head.appendChild(css);

        //credits
        css.sheet.insertRule('.labyrinth-panel .labyrinth-container .bottom-section .credits {position: absolute;width: 260px;bottom: 0;left: -280px;font-size: 16px;box-shadow: 0 6px 12px rgba(0,0,0,.66),inset 0 0 50px rgba(102,32,52,.4);border-radius: 28px;border: 1px solid #f90;background-image: linear-gradient(to top,#7a3566 0,#412b4b 100%);text-align: center;}');

        // move sweep button away from credits
        css.sheet.insertRule('.labyrinth-panel .labyrinth-container .tabs-section button#sweeping-floor { bottom: 7.5rem; right: 2.5rem; left: unset; }');

        //shop items
        css.sheet.insertRule('#shop_tab_container .shop-items-list .shop-item {transform: scale(0.8);}');

        //shop girl
        css.sheet.insertRule('#shop_tab_container .shop-labyrinth-girl {height: auto !important; margin-left: 1rem !important;}');

        //hide the buy buttons as long as they don't have a confirmation box
        css.sheet.insertRule('button.blue_button_L.buy-item {display: none !important;}');
    }

    function loadConfigFromLocalStorage()
    {
        const json = localStorage.getItem(LS_KEY);
        const config = json != null ? JSON.parse(json) : { };

        //default config
        if(typeof config.lastFilter == 'undefined') config.lastFilter = 0;

        return config;
    }

    function saveConfigToLocalStorage(config)
    {
        localStorage.setItem(LS_KEY, JSON.stringify(config));
    }

    function getGirlText()
    {
        if(isGay()) {
            return 'Guy';
        }
        return 'Girl';
    }

    function isGay()
    {
        return (location.hostname.includes('gayharem') || location.hostname.includes('gaypornstarharem'));
    }

    function isHidden(el)
    {
        return (el.offsetParent === null);
    }
})();
