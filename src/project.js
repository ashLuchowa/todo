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
class Project {
    constructor(title, description, addtaskBtn, taskArray) {
        this.title = title;
        this.description = description;
        this.addtaskBtn = addtaskBtn;
        this.taskArray = taskArray;
    }
}

class ManageTask {
    static tasks = [];

    static defaultTasks = [
        new Task('Create website', 'Website to show all featured works', '24 Feb 2025', 'high', 'In Progress', 'Setting', 'Portfolio 2025'),
        new Task('Remove Spiders', 'So many spider nets and dusts', '26 Mar 2025', 'Medium', 'In Progress', 'Setting', 'Cleaning February'),
    ]

    // Push default tasks into appropriate project
    static pushDefaultTask() {
        ManageTask.defaultTasks.forEach(item => {
            ManageTask.tasks.push(item);
        });
    }
}

class ManageProject {
    static projects = [];

    static defaultProjects = [
        new Project('Portfolio 2025', 'Website to feature all my work', 'add-task-btn', ManageTask.tasks),
        new Project('Cleaning February', 'Cleaning duties around the house', 'add-task-btn', ManageTask.tasks),
        new Project('Apply Jobs', 'Need to apply jobs', 'add-task-btn', ManageTask.tasks),
    ];

    // Push default projects into array
    static pushDefaultProject() {
        ManageProject.defaultProjects.forEach(item => {
            ManageProject.projects.push(item);
        });
    }
}

export function matchProject() {
    ManageProject.projects.forEach(itemProject => {
        ManageTask.tasks.forEach(itemTask => {
            if (itemProject.title === itemTask.projectParent) {
                // Normally a dom function would be here
                console.log(itemProject);
            }
        });
    });
}

(function logicInit() {
    ManageProject.pushDefaultProject();
    ManageTask.pushDefaultTask();
})();
