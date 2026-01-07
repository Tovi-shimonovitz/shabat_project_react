import DisplayTask from "./DisplayTask"

function BasisTask()
{
   const items =  [
          {"theTask":'cline the house',
                "time":2
             },
             {"theTask":'wash dishes',
                "time":1},
            {"theTask":'buy groceries',
                "time":3},
             {"theTask":'set a table',
                "time":0.5}]

 return <>
                <h1>The basis task to shabat:</h1>
          <DisplayTask initTask={items}></DisplayTask>
                </>
}
export default BasisTask