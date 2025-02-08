import { ManageProject } from "./project";

export function setupUI(outerUI) {
    outerUI = document.querySelector('.main-container');

    renderSidebarUI(outerUI);
    renderMainContent(outerUI);
}

function renderSidebarUI(outerUI) {
    const sidebarContainer = document.createElement('div');
    sidebarContainer.classList.add('sidebar-container');

    outerUI.appendChild(sidebarContainer);

    // Displays Logo
    (function renderLogo() {
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');
        const logoText = document.createElement('a');
        logoText.setAttribute('href', '#');
        logoText.textContent = 'Taskeater';
        
        logoContainer.appendChild(logoText);
        sidebarContainer.appendChild(logoContainer);
    })();

    // Displays Project List
    function renderProjectList() {
        const projectListContainer = document.createElement('div');
        projectListContainer.classList.add('project-list-container');

        // Add Project Button
        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('add-project-btn');
        addProjectBtn.textContent = 'Add Project';
        
        // Loops all projects and generate UI
        ManageProject.projects.forEach(item => {
            const projectSideContainer = document.createElement('div');
            projectSideContainer.classList.add('project-side-item');
            const projectSideTitle = document.createElement('p');
            projectSideTitle.textContent = item.title;
            
            projectListContainer.appendChild(projectSideTitle);

            // Click on each project to generate main content
            projectSideTitle.addEventListener('click', (e)=> {
                console.log(`You clicked on ${e.target.textContent}`);
            });

        });

        sidebarContainer.appendChild(addProjectBtn);
        sidebarContainer.appendChild(projectListContainer);
    }

    renderProjectList();
};

function renderMainContent(outerUI) {
    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('main-content');
    mainContentContainer.textContent = 'This is the main content area';

    outerUI.appendChild(mainContentContainer);
};