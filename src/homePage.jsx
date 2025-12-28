
import './homePage.css'


function Shabbat() {

    const reset = (event) => {
        event.target.reset();


    }

    return <>
        <form name="shabbat_detailes" action="" onSubmit={event => reset(event)}>
            <label htmlFor="Sabbath_start_time">shabbat start time</label>
            <input name="Sabbath_start_time" type="time" />

            <label htmlFor="Location">location</label>
            <select name="Location" >
                <option value="">select</option>
                <option >at home</option>
                <option >travel</option>
            </select>
            <label htmlFor="num_meal_at_home">number meals at home</label>
            <input name="num_meal_at_home" type="number" max={3} min={0} />
            <label htmlFor="hosting">hosting</label>
            <input name="hosting" type="checkbox" />

            <button>reset</button>
        </form>

    </>

}

export default Shabbat