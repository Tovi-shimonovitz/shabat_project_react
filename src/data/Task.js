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
                
                
let tasksWhenHosting =  [
                  {"theTask":'invite the guests',
                        "time":0.5
                     },
                     {"theTask":'buy flowers',
                        "time":1},
                    {"theTask":'spread out bedding',
                        "time":1},
                     {"theTask":'Warn the children not to embarrass themselves',
                        "time":4}]

 let tasksWhenTraveling =  [
                           {"theTask":'Arrange the meal',
                                 "time":0.5
                              },
                              {"theTask":'buy gift',
                                 "time":1},
                             {"theTask":'Wpack luggage',
                                 "time":1},
                              {"theTask":'Check when there is transportation',
                                 "time":4}]
//פונקציות לרשימה בסיסית
                        
export function getBasisTask()
{
return new Promise((resolve)=>{resolve(BasisTask)})
}

export function addBasisTask(newTask)
{
BasisTask.push(newTask);
return Promise.resolve([...BasisTask])
}
export function deleteTask2(task)
{

BasisTask = BasisTask.filter(item => item !== task);
return Promise.resolve([...BasisTask]);

}


//פונקציות לרשימה כשמארחים



export function getHostingsTask()
{
return new Promise((resolve)=>{resolve(tasksWhenHosting)})
}

export function addHostingTask(newTask)
{
   tasksWhenHosting.push(newTask);
return Promise.resolve([...tasksWhenHosting])
}
export function deleteHostingTasks(task)
{

   tasksWhenHosting = tasksWhenHosting.filter(item => item !== task);
return Promise.resolve([...tasksWhenHosting]);
}


//פונקציות לרשימה כשנוסעים

export function getTravelingTask()
{
return new Promise((resolve)=>{resolve(tasksWhenTraveling)})
}

export function addTravelingTask(newTask)
{
   tasksWhenTraveling.push(newTask);
return Promise.resolve([...tasksWhenTraveling])
}
export function deleteTravelingTasks(task)
{

   tasksWhenTraveling = tasksWhenTraveling.filter(item => item !== task);
return Promise.resolve([...tasksWhenTraveling]);

}