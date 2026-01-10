import DisplayTask from "./DisplayTask"
import { getHostingsTask } from "../data/Task"
import { addHostingTask } from "../data/Task"
import { deleteHostingTasks } from "../data/Task"

function TasksWhenHosting ()
{
 return <>
      <h1>The task when hosting:</h1>
     <DisplayTask initTask={getHostingsTask} addNewTask={addHostingTask} deleteTask2={deleteHostingTasks}></DisplayTask>
                </>
}
export default TasksWhenHosting