/// <reference path="tools/typings/index.d.ts"/>
/// <reference path="tools/index.d.ts"/>

import { readdirSync } from 'fs';
import * as gulp from 'gulp';
import * as gulpHelp from 'gulp-help';
import * as util from 'gulp-util';
import * as browserSync from 'browser-sync';
import * as configuration from './tools/config';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins({camelize: true});
const CacheBuster = require('gulp-cachebust');
const del = require('del');

global.gulp = gulpHelp(gulp, {description: '', hideEmpty: true});
global.plugin = plugins;
global.prod = false;
global.mocks = util.env.mocks;
global.config = configuration.config;
global.bs = browserSync.create();
global.cachebust = new CacheBuster();
global.del = del;
global.timestamp = Math.round(Date.now()/1000);

//Register tasks from tasks folder
const tasks:string[] = readdirSync('./tools/tasks/').filter((task) => {
    //filter just ts files
    return task.indexOf('.ts') !== -1;
});

tasks.forEach((task) => {
    require('./tools/tasks/' + task);
});