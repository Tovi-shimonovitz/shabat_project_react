import DisplayTask from "./DisplayTask"

function TasksWhenHosting ()
{
  const items =  [
          {"theTask":'invite the guests',
                "time":0.5
             },
             {"theTask":'buy flowers',
                "time":1},
            {"theTask":'spread out bedding',
                "time":1},
             {"theTask":'Warn the children not to embarrass themselves',
                "time":4}]

 return <>
                <h1>The task when hosting:</h1>
          <DisplayTask initTask={items}></DisplayTask>
                </>
}
export default TasksWhenHosting