import { Task } from "../../entity/Task";

/**
 * utilitary class to perform som
 */
export class TaskTransformer {
    
    public static fromJson( json ): Task {
        const task = new Task();

        task.description = json.description ? json.description : '';
        task.finished    = json.finished    ? json.finished    : false;
        task.title       = json.title       ? json.title       : '';

        return task;
    }
}