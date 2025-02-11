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
    constructor(title, description, addtaskBtn, taskArray = []) {
        this.title = title;
        this.description = description;
        this.addtaskBtn = addtaskBtn;
        this.taskArray = taskArray;
    }
}

export class ManageTask {
    static allTasks = [];

    static defaultTasks = [
        new Task('Create website', 'Website to show all featured works', '24 Feb 2025', 'high', 'In Progress', 'Setting', 'Portfolio 2025'),
        new Task('Remove Spiders', 'So many spider nets and dusts', '26 Mar 2025', 'Medium', 'In Progress', 'Setting', 'Cleaning February'),
        new Task('Create Logo', 'Logo for my brand identity', '02 Apr 2025', 'Medium', 'In Progress', 'Setting', 'Portfolio 2025'),
        new Task('Sharpen Knife', 'Learn butchering', '02 May 2025', 'Medium', 'In Progress', 'Setting', 'Hunting'),
    ]

    // Push default tasks into appropriate project
    static pushTask() {
        this.defaultTasks.forEach(itemTask => {

            // Push default tasks into appropriate projects
            const foundItem = ManageProject.projects.find((itemProject) => {
                return itemProject.title === itemTask.projectParent;
            });

            if (foundItem) {
                foundItem.taskArray.push(itemTask);
            }

            // Push all default tasks into allTasks Array
            this.allTasks.push(itemTask);
        });
        console.log(this.allTasks);
    }
}

export class ManageProject {
    static projects = [];

    static defaultProjects = [
        new Project('Portfolio 2025', 'Website to feature all my work', 'add-task-btn', []),
        new Project('Cleaning February', 'Cleaning duties around the house', 'add-task-btn', []),
        new Project('Apply Jobs', 'Need to apply jobs', 'add-task-btn', []),
        new Project('Hunting', 'I need to eat', 'add-task-btn', []),
    ];

    // Push default projects into array
    static pushDefaultProject() {
        ManageProject.defaultProjects.forEach(item => {
            ManageProject.projects.push(item);
        });
    }
}

(function logicInit() {
    ManageProject.pushDefaultProject();
    ManageTask.pushTask();
})();
