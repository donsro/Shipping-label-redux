import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectShippingOptions, updateShippingOptions } from './shippingSlice';


export function Shipping() {
    const dispatch = useDispatch();
    const shippingOption = useSelector(selectShippingOptions);    
    return (<>
        <h2>Shipping options</h2>
        <div className="w-50">
            <label className="d-block mb-3">
                Options:
                <select
                    value={shippingOption}
                    className="form-control"
                    onChange={(e) => {dispatch(updateShippingOptions(e.target.value));}}>
                    <option value={1}>Ground</option>
                    <option value={2}>Priority</option>
                </select>
            </label>
        </div>
    </>);
}