import DisplayTask from "./DisplayTask"

function TasksWhenTraveling ()
{
  const items =  [
          {"theTask":'Arrange the meal',
                "time":0.5
             },
             {"theTask":'buy gift',
                "time":1},
            {"theTask":'Wpack luggage',
                "time":1},
             {"theTask":'Check when there is transportation',
                "time":4}]

 return <>
                <h1>The task when Ttraveling:</h1>
          <DisplayTask initTask={items}></DisplayTask>
                </>
}
export default TasksWhenTraveling