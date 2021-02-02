import React from 'react';
import { useForm } from "react-hook-form";

const MarkerForm = ({callBack, position}) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        callBack({...data, position})
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="" ref={register} />
                <input name="price" defaultValue="test" ref={register} />
                <select name="type" ref={register}>
                    <option value={'Restaurant'}>Restaurant</option>
                    <option value={'Hotel'}>Hotel</option>
                    <option value={'Bar'}>Bar</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default MarkerForm;

