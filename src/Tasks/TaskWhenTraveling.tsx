import DisplayTask from "./DisplayTask"
import {deleteTravelingTasks} from '../data/Task'
import {addTravelingTask} from '../data/Task'
import {getTravelingTask} from '../data/Task'
function TasksWhenTraveling ()
{
 return <>
          <h1>The task when Ttraveling:</h1>
          <DisplayTask initTask={getTravelingTask} addNewTask={addTravelingTask} deleteTask2={deleteTravelingTasks}></DisplayTask>
                </>
}
export default TasksWhenTraveling