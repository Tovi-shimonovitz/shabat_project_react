import DisplayTask from "./DisplayTask"
import { getBasisTask } from "../data/Task"
import { addBasisTask } from "../data/Task"
import { deleteTask2 } from "../data/Task"
function BasisTask()
{

 return <>
          <h1>The basis task to shabat:</h1>
          <DisplayTask initTask={getBasisTask} addNewTask={addBasisTask} deleteTask2={deleteTask2}></DisplayTask>
                </>
}
export default BasisTask