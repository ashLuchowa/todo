// Task Class Template
class Task {
    constructor(title, description, dueDate, priority, status, setting, projectParent) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.setting = setting;
        this.projectParent = projectParent;
    }
}

// Project Class Template
export class Project {
    constructor(title, description, addtaskBtn, taskArray) {
        this.title = title;
        this.description = description;
        this.addtaskBtn = addtaskBtn;
        this.taskArray = taskArray;
    }

    // Empty Array to store default / new projects
    static projects = [];
    // Empth Array to store default / new Tasks
    static taskContainer = [];

    // 3 default projects on page load
    static defaultProjects = [
        new Project('Portfolio 2025', 'Website to feature all my work', 'add-task-btn', this.taskContainer),
        new Project('Cleaning February', 'Cleaning duties around the house', 'add-task-btn', this.taskContainer),
        new Project('Apply Jobs', 'Need to apply jobs', 'add-task-btn', this.taskContainer),
    ];

    // Push default projects into array
    static pushDefaultProject() {
        Project.defaultProjects.forEach(item => {
            Project.projects.push(item);
        });
    }

    static defaultTasks = [
        new Task('Create website', 'Website to show all featured works', '24 Feb 2025', 'high', 'In Progress', 'Setting', 'Portfolio 2025'),
        new Task('Create website', 'Website to show all featured works', '24 Feb 2025', 'high', 'In Progress', 'Setting', 'Cleaning February'),
    ]

    // Push default tasks into appropriate project
    static pushDefaultTask() {
        Project.defaultTasks.forEach(item => {
            Project.taskContainer.push(item);
        });
    }
    
    static matchProject() {
        Project.projects.forEach(itemProject => {
            Project.taskContainer.forEach(itemTask => {
                if(itemProject.title === itemTask.projectParent) {
                    // Normally a dom function would be here
                    console.log(itemProject);
                }
            });
        });
    }
}


