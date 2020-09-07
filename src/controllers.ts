import { WebController } from './server/common/webController';
import { taskController } from './server/controller/task.controller';

export const controllers:WebController [] = [
    taskController
];
