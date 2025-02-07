// Empty Array to store default / new projects
export let projects = [];

// Project Class Template
export class Project {
    constructor(title, description, addtaskBtn) {
        this.title = title;
        this.description = description;
        this.addtaskBtn = addtaskBtn;
    }

    // Push default projects into array
    static pushDefaultProject() {
        defaultProjects.forEach(item => {
            projects.push(item);
        });
        console.log(projects);
    }
}

// 3 default projects on page load
const defaultProjects = [
    new Project('Portfolio 2025', 'Website to feature all my work', 'add-task-btn'),
    new Project('Cleaning February', 'Cleaning duties around the house', 'add-task-btn'),
    new Project('Apply Jobs', 'Need to apply jobs', 'add-task-btn'),
];
