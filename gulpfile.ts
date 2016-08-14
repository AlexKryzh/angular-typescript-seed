/// <reference path="typings/index.d.ts"/>
/// <reference path="tools/index.d.ts"/>

import { readdirSync } from 'fs';
import * as gulp from 'gulp';
import * as gulpHelp from 'gulp-help';
import * as browserSync from 'browser-sync';
import * as config from './tools/config';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

global.gulp = gulpHelp(gulp, {description: '', hideEmpty: true});
global.plugin = plugins;
global.prod = false;
global.config = config;
global.bs = browserSync.create();

//Register tasks from tasks folder
const tasks:string[] = readdirSync('./tools/tasks/').filter((task) => {
    //filter just ts files
    return task.indexOf('.ts') !== -1;
});

tasks.forEach((task) => {
    require('./tools/tasks/' + task);
});