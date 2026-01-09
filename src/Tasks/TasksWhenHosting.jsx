import DisplayTask from "./DisplayTask"
import { getHostingsTask } from "./DataTask/taskFunction"
import { addHostingTask } from "./DataTask/taskFunction"
import { deleteHostingTasks } from "./DataTask/taskFunction"

function TasksWhenHosting ()
{
//   const items =  [
//           {"theTask":'invite the guests',
//                 "time":0.5
//              },
//              {"theTask":'buy flowers',
//                 "time":1},
//             {"theTask":'spread out bedding',
//                 "time":1},
//              {"theTask":'Warn the children not to embarrass themselves',
//                 "time":4}]

 return <>
                <h1>The task when hosting:</h1>

                <DisplayTask initTask={getHostingsTask} addNewTask={addHostingTask} deleteTask2={deleteHostingTasks}></DisplayTask>

          {/* <DisplayTask initTask={items}></DisplayTask> */}
                </>
}
export default TasksWhenHosting