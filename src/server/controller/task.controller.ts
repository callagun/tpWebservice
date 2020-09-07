import { WebController } from '../common/webController';
import { taskService } from '../service/taks.service';


/**
 * Basic controller to test:
 * a) the basic controller builder structure
 * b) handlers
 * ... 
 */
export const taskController =  new WebController();

taskController
.listen( '/', (req, res) => {
        res.send('OLÁ MUNDO :) ');
    }
)
 .get( 'task' , async (req,res) => {
    res.send( await taskService.getTaskById( req.query.id ) );
 })

 .get( 'task/all' , async (req,res) => {
    res.send ( await taskService.getAllTasks() ) ;
 })
 .post( 'task', async (req,res) => {
        res.send ( await taskService.saveTask(req.body) );
})
.put( 'task', async (req,res) => {
    res.send( await taskService.update( req.body) );
})
