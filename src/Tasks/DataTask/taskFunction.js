  let BasisTask =  [
          {"theTask":'cline the house',
                "time":2
             },
             {"theTask":'wash dishes',
                "time":1},
            {"theTask":'buy groceries',
                "time":3},
             {"theTask":'set a table',
                "time":0.5}]
                
                
                
export function getBasisTask()
{
return new Promise((resolve)=>{resolve(BasisTask)})
}

export function addBasisTask(newTask)
{
BasisTask.push(newTask);
return new Promise.resolve([...BasisTask])
}
export function deleteTask2(task)
{

BasisTask = BasisTask.filter(item => item !== task);
return Promise.resolve([...BasisTask]);

}