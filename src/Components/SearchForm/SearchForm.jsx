import React from 'react';
import { useForm } from "react-hook-form";
import './SearchForm.css'


function formatDate() {
    var d = new Date(),
        month = `${d.getMonth() + 1}`,
        day = `${d.getDate()}`,
        year = `${d.getFullYear()}`;

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${year}-${month}-${day}`;
}


const SearchForm = ({ setDirection }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setDirection(data);
    };


    return (
        <div className="search-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="from">Pick From</label>
                <input id="from" name="from" type="text" placeholder="Pick From" ref={register({ required: true })} />
                {errors.from && <span className="error">This field is required</span>}
                <label htmlFor="to">Pick To</label>
                <input id="to" name="to" type="text" placeholder="Pick To" ref={register({ required: true })} />
                {errors.to && <span className="error">This field is required</span>}
                <label htmlFor="Date">Date of Journey</label>
                <input name="date" id="date" type="date" defaultValue={formatDate()} ref={register({required: true})} />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchForm;;