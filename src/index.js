import "./styles.scss";
import { ManageProject, Project, ManageTask } from "./project";

function initialiseApp() {
    const outerBox = document.querySelector('.main-container');
    const sidebar = new SideUI(outerBox);
    sidebar.renderLogo();
    sidebar.projectList();
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
            projectSideTitle.addEventListener('click', generateMain);
        });

        this.sidebarContainer.appendChild(addProjectBtn);
        this.sidebarContainer.appendChild(projectListContainer);
    };
};

function generateMain(e) {
    const outerBox = document.querySelector('.main-container');

    const projectTitle = e.target.textContent;


    // Find the correstponding project from Project Array
    const projectResult = ManageProject.projects.find((p) => {
        return p.title === projectTitle;
    });

    if (projectResult) {
        console.log(projectResult.title);

        // title
        const headerTitle = document.createElement('div');
        headerTitle.textContent = projectResult.title;

        outerBox.appendChild(headerTitle);
    }

    // console.log(ManageProject.defaultProjects);


}

initialiseApp();