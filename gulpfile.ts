//Register tasks from tasks folder

import { readdirSync } from 'fs';

const tasks:Array<string> = readdirSync('./tools/tasks/').filter((task) => {
    //filter just ts files
    return task.indexOf('.ts') !== -1;
});

tasks.forEach((task) => {
    require('./tools/tasks/' + task);
});