const basicCookingArray = [
  { id: 1, name: "Challah", prepTime: 180 },
  { id: 2, name: "Kugel", prepTime: 60 },
  { id: 3, name: "Roast Chicken", prepTime: 90 },
  { id: 4, name: "Potato Kugel", prepTime: 75 },
  { id: 5, name: "Salads", prepTime: 30 },
  { id: 6, name: "Tahini", prepTime: 10 },
  { id: 7, name: "Stewed Vegetables", prepTime: 45 },
  { id: 8, name: "Dessert", prepTime: 60 }
];

const firstSeudaArray = [
  { id: 1, name: "Chicken Soup", prepTime: 120 },
  { id: 2, name: "Gefilte Fish", prepTime: 90 }
];

const secondSeudaArray = [
  { id: 1, name: "Cholent", prepTime: 45 },
  { id: 2, name: "Chopped Liver", prepTime: 30 },
  { id: 3, name: "Liver pâté", prepTime: 40 },
  { id: 4, name: "Meat", prepTime: 90 }
];

const thirdSeudaArray = [
  { id: 1, name: "Rice", prepTime: 30 },
  { id: 2, name: "Potatoes", prepTime: 40 },
  { id: 3, name: "Salmon", prepTime: 45 }
];


export const getBasicCookingArray = () => {
    return new Promise((res,rej)=>{
        res(basicCookingArray);
    });
}

export const addBasic = (b) => {
    basicCookingArray.push(b);
    return Promise.resolve([...basicCookingArray]);
}


export const getFirstSeudaArray = () => {
    return new Promise((res,rej)=>{
        res(firstSeudaArray);
    });
}

export const addFirst = (b) => {
    firstSeudaArray.push(b);
    return Promise.resolve([...firstSeudaArray]);
}

export const getSecondSeudaArray = () => {
    return new Promise((res,rej)=>{
        res(secondSeudaArray);
    });
}

export const addSecond = (b) => {
    secondSeudaArray.push(b);
    return Promise.resolve([...secondSeudaArray]);
}

export const getThirdSeudaArray = () => {
    return new Promise((res,rej)=>{
        res(thirdSeudaArray);
    });
}

export const addThird = (b) => {
    thirdSeudaArray.push(b);
    return Promise.resolve([...thirdSeudaArray]);
}


export const deleteBasic = (b) => {
    let index = basicCookingArray.findIndex(e=>e.id==b.id)
    basicCookingArray.splice(index,1);
    return Promise.resolve([...basicCookingArray]);
}

export const deleteFirst = (b) => {
    let index = firstSeudaArray.findIndex(e=>e.id==b.id)
    firstSeudaArray.splice(index,1);
    return Promise.resolve([...firstSeudaArray]);
}

export const deleteSecond = (b) => {
    let index = secondSeudaArray.findIndex(e=>e.id==b.id)
    secondSeudaArray.splice(index,1);
    return Promise.resolve([...secondSeudaArray]);
}

export const deleteThird = (b) => {
    let index = thirdSeudaArray.findIndex(e=>e.id==b.id)
    thirdSeudaArray.splice(index,1);
    return Promise.resolve([...thirdSeudaArray]);
}