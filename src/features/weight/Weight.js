import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectWeight, updateWeight } from './weightSlice';

export function Weight() {
    const dispatch = useDispatch();
    const weight = useSelector(selectWeight);
    return (<>
        <h2>Weight</h2>
        <div className="w-50">
            <label className="d-block mb-3">
                Weight (lbs):
                <input
                    type="text"
                    className="form-control"
                    value={weight}
                    onChange={(e) => { dispatch(updateWeight(e.target.value))} } />
            </label>
        </div>
    </>);
}