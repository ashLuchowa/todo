import "./styles.scss";
import { ManageProject, Project, ManageTask } from "./project";

function initialiseApp() {
    const outerBox = document.querySelector('.outer-container');
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
    const outerBox = document.querySelector('.outer-container');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    let existMainContent = outerBox.querySelector('.main-content');

    // Div to store Project header info
    const outerProjectDiv = document.createElement('div');
    outerProjectDiv.classList.add('main-header');

    // Div to store Task Containers
    const outerTaskContainer = document.createElement('div');
    outerTaskContainer.classList.add('outer-task-container');

    // Stop repeating and reset mainContent
    if (existMainContent) {
        existMainContent.remove();
    }

    outerBox.appendChild(mainContent);

    // Clicked target
    const projectTitle = e.target.textContent;

    // Find the correstponding project from Project Array
    const projectResult = ManageProject.projects.find((p) => {
        return p.title === projectTitle;
    });

    // Render project in main area
    function renderMainInfo(elementDiv, elementAttribute, value) {
        elementDiv = document.createElement('div');
        elementDiv.classList.add(`header-${value}`);
        elementDiv.textContent = elementAttribute;

        outerProjectDiv.appendChild(elementDiv);
        mainContent.appendChild(outerProjectDiv);
    }

    // Render selected project's tasks in main area
    function renderTaskInfo(task) {
        const innerTaskContainer = document.createElement('div');
        innerTaskContainer.classList.add('inner-task-container');

        // Function to generate each task detail such as title, description...
        function constructTaskInfo(elementType, type, contentType, displayContent, taskValue) {
            elementType = document.createElement(type);
            elementType.textContent = `${contentType}${displayContent}`;

            const taskDiv = document.createElement('div');
            taskDiv.classList.add(taskValue);
            taskDiv.appendChild(elementType);

            innerTaskContainer.appendChild(taskDiv);
        }

        mainContent.appendChild(outerTaskContainer);
        outerTaskContainer.appendChild(innerTaskContainer);

        constructTaskInfo('titleType', 'p', '', task.title, 'task-title');
        constructTaskInfo('descriptionType', 'p', '', task.description, 'task-description');
        constructTaskInfo('dateType', 'p', 'Due: ', task.dueDate, 'task-date');
        constructTaskInfo('priorityType', 'p', 'Priority: ', task.priority, 'task-priority');
        constructTaskInfo('statusType', 'p', 'Status: ', task.status, 'task-status');
    }

    if (projectResult) {
        // generate title
        renderMainInfo('header-title', projectResult.title, 'title');
        renderMainInfo('header-description', projectResult.description, 'description');
        
        // Render Tasks
        projectResult.taskArray.forEach(task => {
            renderTaskInfo(task);
        })
    }
}



initialiseApp();