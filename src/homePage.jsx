import { useState } from "react";
import './homePage.css'


function Shabbat(props) {

    const [typeShabbat, setTypeShabbat] = useState({
        Sabbath_start_time: "4:00",
        Location: "at home",
        num_meal_at_home: 3,
        hosting: false
    });
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setTypeShabbat(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const saveDetailes = (e) => {
        e.preventDefault();
        localStorage.setItem('shabbatDetailes', JSON.stringify(typeShabbat));
         e.target.form.reset();
    }

     return <>
        <form name="shabbat_detailes" action="" onSubmit={saveDetailes}>
            <label htmlFor="Sabbath_start_time">shabbat start time</label>
            <input name="Sabbath_start_time" type="time" onChange={handleChange}/>

            <label htmlFor="Location">location</label>
            <select name="Location"onChange={handleChange} >
                <option value="">select</option>
                <option >at home</option>
                <option >travel</option>
            </select>
            <label htmlFor="num_meal_at_home">number meals at home</label>
            <input name="num_meal_at_home" type="number" max={3} min={0} onChange={handleChange}/>
            <label htmlFor="hosting">hosting</label>
            <input name="hosting" type="checkbox" onChange={handleChange}/>

            <button type='reset'>reset</button>
            <button type="submit" >save</button>
        </form>

    </>

}

export default Shabbat