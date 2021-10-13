import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    updateName,
    updateStreet,
    updateCity,
    updateState,
    updateZip,
    selectName,
    selectStreet,
    selectCity,
    selectState,
    selectZip
} from './senderSlice';

export function Sender() {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const street = useSelector(selectStreet);
    const city = useSelector(selectCity);
    const state = useSelector(selectState);
    const zip = useSelector(selectZip);
    return (<>
        <h2>Sender Address</h2>
        <div className="w-50">
            <label className="d-block mb-3">
                Name:
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => { dispatch(updateName(e.target.value)); }} />
            </label>
            <label className="d-block mb-3">
                Street:
                <input
                    type="text"
                    className="form-control"
                    value={street}
                    onChange={(e) => { dispatch(updateStreet(e.target.value)); }} />
            </label>
            <label className="d-block mb-3">
                City:
                <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => { dispatch(updateCity(e.target.value)); }} />
            </label>
            <label className="d-inline-block me-3">
                State:
                <input
                    type="text"
                    className="form-control"
                    value={state}
                    onChange={(e) => { dispatch(updateState(e.target.value)); }} />
            </label>
            <label className="d-inline-block">
                Zip:
                <input
                    type="text"
                    className="form-control"
                    value={zip}
                    onChange={(e) => { dispatch(updateZip(e.target.value)); }} />
            </label>
        </div>
    </>);
}