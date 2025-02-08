import "./styles.scss";
import { ManageProject, Project, ManageTask } from "./project";

function initialiseApp() {
    const outerBox = document.querySelector('.main-container');
    const sidebar = new SideUI(outerBox);
    sidebar.renderLogo();
    sidebar.projectList();
}

function generateMain() {
    const outerBox = document.querySelector('.main-container');

    // Avoid repeating
    const existingContent = document.querySelector('.main-content');
    if (!existingContent) {
        const mainElement = new MainUI(outerBox);
        mainElement.mainInfo();
    }
}

class SideUI {
    constructor(outerBox) {
        this.sidebarContainer = document.createElement('div');
        this.sidebarContainer.classList.add('sidebar-container');
        outerBox.appendChild(this.sidebarContainer);
    };

    renderLogo() {
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container');
        const logoText = document.createElement('a');
        logoText.setAttribute('href', '#');
        logoText.textContent = 'Taskeater';

        logoContainer.appendChild(logoText);
        this.sidebarContainer.appendChild(logoContainer);
    };

    projectList() {
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
            projectSideTitle.addEventListener('click', (e) => {
                console.log(`You clicked on ${e.target.textContent}`);
                generateMain();
            });

        });

        this.sidebarContainer.appendChild(addProjectBtn);
        this.sidebarContainer.appendChild(projectListContainer);
    };
};


class MainUI {
    constructor(outerBox) {
        this.mainContentContainer = document.createElement('div');
        this.mainContentContainer.classList.add('main-content');
        outerBox.appendChild(this.mainContentContainer);
    }

    mainInfo() {
        // Header section
        const taskHeaderContainer = document.createElement('div');
        taskHeaderContainer.classList.add('task-header-container');

        const headerTitle = document.createElement('div');
        headerTitle.classList.add('header-title');
        headerTitle.textContent = 'Project Name';
        const headerAddBtn = document.createElement('button');
        headerAddBtn.classList.add('header-add-btn');
        headerAddBtn.textContent = 'Add Task';

        // Project Description
        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project-description');
        projectDescription.textContent = 'This is the project description';

        // Append children
        taskHeaderContainer.appendChild(headerTitle);
        taskHeaderContainer.appendChild(headerAddBtn);
        this.mainContentContainer.appendChild(taskHeaderContainer);
        this.mainContentContainer.appendChild(projectDescription);
    };
};


initialiseApp();