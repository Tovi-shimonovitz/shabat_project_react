import { ShowItemList } from "./ShowItemList";
export const ShowAllLists = () => {

    const data = require("../data/Shoping");

    return (
        <>
            <h1>Base list</h1>
            <ShowItemList list={data.getBaseList()} />

            <h1>Visiting list</h1>
            <ShowItemList list={data.getVisitingList()} />

            <h1>Hosting list</h1>
            <ShowItemList list={data.getHostingList()} />

            <h1>Friday Night Meal</h1>
            <ShowItemList list={data.getFridayNightList()} />

            <h1>Shabbat Morning Meal</h1>
            <ShowItemList list={data.getShabbatMorningList()} />

            <h1>Third Meal</h1>
            <ShowItemList list={data.getThirdMealList()} />

            <button>save all changes</button>
        </>
    )
}