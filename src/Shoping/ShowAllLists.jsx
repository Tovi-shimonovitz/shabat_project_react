import { ShowItemList } from "./ShowItemList";
import { getBaseList, getVisitingList , getHostingList,getFridayNightList ,getShabbatMorningList,getThirdMealList} from "../data/Shoping"
export const ShowAllLists = () => {

    return (
        <>
            <h1>Base list</h1>
            <ShowItemList list={getBaseList()} />

            <h1>Visiting list</h1>
            <ShowItemList list={getVisitingList()} />

            <h1>Hosting list</h1>
            <ShowItemList list={getHostingList()} />

            <h1>Friday Night Meal</h1>
            <ShowItemList list={getFridayNightList()} />

            <h1>Shabbat Morning Meal</h1>
            <ShowItemList list={getShabbatMorningList()} />

            <h1>Third Meal</h1>
            <ShowItemList list={getThirdMealList()} />

            <button>save all changes</button>
        </>
    )
}