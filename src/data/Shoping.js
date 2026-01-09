
  const base = [
    { item: "Diapers", qty: 1 },
    { item: "Baby wipes", qty: 1 },
    { item: "Tissues", qty: 2 },
    { item: "Trash bags", qty: 1 },
    { item: "Shabbat candles", qty: 1 },
    { item: "Matches / lighter", qty: 1 },
    { item: "Mineral water", qty: 2 }
  ];

  const visiting = [
    { item: "Cake / dessert", qty: 1 },
    { item: "Gift", qty: 1 },
  ];


   const fridayNight = [
      { item: "Fish", qty: 1 },
      { item: "Chicken", qty: 1 },
      { item: "rice", qty: 1 },
      { item: "potatoes", qty: 10 },
      { item: "Salads", qty: 3 },
      { item: "Dessert", qty: 1 }
    ];

   const shabbatMorning = [
      { item: "meet", qty: 1 },
      { item: "Salads", qty: 3 },
      { item: "eggs", qty: 6 },
    ];

    const thirdMeal = [
      { item: "Tuna", qty: 1 },
      { item: "Vegetable salad", qty: 1 },
      { item: "Spreads", qty: 2 },
      { item: "Fruit / cookies", qty: 1 }
    ];


  const hosting = [
    { item: "High‑quality disposable dishes", qty: 1 },
    { item: "Soft drinks", qty: 4 },
    { item: "Wine", qty: 2 },
    { item: "Tablecloths and napkins", qty: 1 },
    { item: "Desserts", qty: 2 },
    { item: "Salads", qty: 5 },
  ];

// Base list
export function getBaseList() {
  return new Promise((resolve) => {
    resolve(base);
  });
}

// Visiting list
export function getVisitingList() {
  return new Promise((resolve) => {
    resolve(visiting);
  });
}

// Hosting list
export function getHostingList() {
  return new Promise((resolve) => {
    resolve(hosting);
  });
}

// Meals at home – Friday night
export function getFridayNightList() {
  return new Promise((resolve) => {
    resolve(fridayNight);
  });
}

// Meals at home – Shabbat morning
export function getShabbatMorningList() {
  return new Promise((resolve) => {
    resolve(shabbatMorning);
  });
}

// Meals at home – Third meal
export function getThirdMealList() {
  return new Promise((resolve) => {
    resolve(thirdMeal);
  });
}
export function addBase(item){
    base.push(item);
    return new Promise((res)=>{
        res(base);
    })

}

// Visiting list
export function addVisiting(item) {
    visiting.push(item);
    return new Promise((res) => {
        res(visiting);
    });
}

// Hosting list
export function addHosting(item) {
    hosting.push(item);
    return new Promise((res) => {
        res(hosting);
    });
}

// Meals at home – Friday night
export function addFridayNight(item) {
    fridayNight.push(item);
    return new Promise((res) => {
        res(fridayNight);
    });
}

// Meals at home – Shabbat morning
export function addShabbatMorning(item) {
    shabbatMorning.push(item);
    return new Promise((res) => {
        res(shabbatMorning);
    });
}

// Meals at home – Third meal
export function addThirdMeal(item) {
    thirdMeal.push(item);
    return new Promise((res) => {
        res(thirdMeal);
    });
}

// Base list
export function deleteBase(item) {
    return new Promise((res) => {
        res(removeItem(base, item));
    });
}

// Visiting list
export function deleteVisiting(item) {
    return new Promise((res) => {
        res(removeItem(visiting, item));
    });
}

// Hosting list
export function deleteHosting(item) {
    return new Promise((res) => {
        res(removeItem(hosting, item));
    });
}

// Friday Night
export function deleteFridayNight(item) {
    return new Promise((res) => {
        res(removeItem(fridayNight, item));
    });
}

// Shabbat Morning
export function deleteShabbatMorning(item) {
    return new Promise((res) => {
        res(removeItem(shabbatMorning, item));
    });
}

// Third Meal
export function deleteThirdMeal(item) {
    return new Promise((res) => {
        res(removeItem(thirdMeal, item));
    });
}





