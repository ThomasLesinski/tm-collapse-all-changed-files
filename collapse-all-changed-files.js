// ==UserScript==
// @name         GitHub - Collapse all changed files
// @namespace    https://www.ottscho-it-service.de/
// @version      1
// @description  Add btn to collapse all changed files in pullrequest "changed files" tab
// @author       Thomas Lesinski
// @include      https://github.com/*/pull/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

    const addCollapseAllBtnInterval = setInterval(() => {
        const ourBtn = document.querySelector('.btn-collapse-all-changed-files');

        if (!ourBtn) {
            const anchor = document.querySelector('.diffbar-item.details-reset.details-overlay.position-relative.text-center.hide-sm.hide-md');

            if (anchor) {
                const collapseAllBtn = document.createElement('div');

                collapseAllBtn.classList.add('btn', 'ml-5', 'btn-collapse-all-changed-files');
                collapseAllBtn.innerHTML = 'Collapse all';

                collapseAllBtn.addEventListener('click', () => {
                    const collapseArrowBtns = document.querySelectorAll('.js-file.open .file-info button[aria-expanded="true"]');

                    collapseArrowBtns.forEach((collapseArrowBtn) => {
                        collapseArrowBtn.click();
                    });
                });

                anchor.parentElement.appendChild(collapseAllBtn);
            }
        }
    }, 250);
})();
