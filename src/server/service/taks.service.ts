import { getRepository, UpdateResult } from "typeorm";
import { Task } from "../../entity/Task";
import { TaskTransformer } from "../transformer/task.transformer";


/**
 * First Service to test decopling the logic from 
 * task controller
 */
class TaskService{

    async getTaskById( id:string ): Promise<Task> {
        const repo = getRepository(Task);

        return await repo.findOne({  where : { id : id}  })
                            .catch( error => { throw error; });
    }

    async findTasks( query? ): Promise<Task[]> {
        const repo = getRepository(Task);

        return await repo.find(query).catch( error => { throw error; });
    }

    async getAllTasks( ): Promise<Task[]> {
        //const repo = getRepository(Task);
        //return await repo.find().catch( error => { throw error; });
        return this.findTasks();
    }

    async saveTask( task ): Promise<Task> {
        const repo = getRepository(Task);

        let attachedTask = this.attachTask( task );
        this.validate( attachedTask );

        return await repo.save( attachedTask ).catch( error => { throw error; });    
    }

    async update( task ): Promise<UpdateResult> {
        
        const repo = getRepository(Task);
    
        if( repo.hasId(task.id)  ){
            const attachedTask = this.attachTask( task );
            return await repo.update( attachedTask.id , attachedTask ).catch( error => {
                throw error;
            });
        }
        return null;
    }

    validate( task ) {
        console.log(task);
        if( ! task.title ) throw new Error(" Invalid task : no tittle");
        if( ! task.description ) throw new Error(" Invalid task no description");
        
    }

    private attachTask( task ) {
        const repo = getRepository(Task);

        return repo.create( TaskTransformer.fromJson( task ) );
    }

}

export const taskService = new TaskService();