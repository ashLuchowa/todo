export function setupUI() {
    const mainContainer = document.querySelector('.main-container');

    (function renderSidebarUI() {
        const sidebarContainer = document.createElement('div');
        sidebarContainer.classList.add('sidebar-container');
        sidebarContainer.textContent = 'This is the sidebar';

        mainContainer.appendChild(sidebarContainer);
    })();

    function renderMainContent() {
        const mainContentContainer = document.createElement('div');
        mainContentContainer.classList.add('main-content');
        mainContentContainer.textContent = 'This is the main content area';

        mainContainer.appendChild(mainContentContainer);
    }

    renderMainContent();
}