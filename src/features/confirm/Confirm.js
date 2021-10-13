import React from "react";
import { useSelector } from 'react-redux';

import {
    selectName as sName,
    selectStreet as sStreet,
    selectCity as sCity,
    selectState as sState,
    selectZip as sZip
} from '../sender/senderSlice';

import {
    selectName as rName,
    selectStreet as rStreet,
    selectCity as rCity,
    selectState as rState,
    selectZip as rZip
} from '../receiver/receiverSlice';

import { selectWeight } from '../weight/weightSlice';
import { selectShippingOptions as shipOption } from '../shipping/shippingSlice';


export function Confirmation() {

    const senderName = useSelector(sName);
    const senderStreet = useSelector(sStreet);
    const senderCity = useSelector(sCity);
    const senderState = useSelector(sState);
    const senderZip = useSelector(sZip);
    const receiverName = useSelector(rName);
    const receiverStreet = useSelector(rStreet);
    const receiverCity = useSelector(rCity);
    const receiverState = useSelector(rState);
    const receiverZip = useSelector(rZip);
    const weight = useSelector(selectWeight);
    const shippingOption = useSelector(shipOption);
    const shippingRate = 0.4;
    const minWeight = 5;
    const shippingCost = (weight > minWeight ? weight : minWeight) * shippingRate *
        (parseInt(shippingOption) === 1 ? 1 : 1.5);

    return (<>
        <h2>Confirmation</h2>
        <div className="row row-cols-4">
            <div className="col">
                <h3>Sender</h3>
                <ul className="list-unstyled">
                    <li>Name: {senderName}</li>
                    <li>Street: {senderStreet}</li>
                    <li>City: {senderCity}</li>
                    <li>State: {senderState}</li>
                    <li>Zip: {senderZip}</li>
                </ul>
            </div>
            <div className="col">
                <h3>Receiver</h3>
                <ul className="list-unstyled">
                    <li>Name: {receiverName}</li>
                    <li>Street: {receiverStreet}</li>
                    <li>City: {receiverCity}</li>
                    <li>State: {receiverState}</li>
                    <li>Zip: {receiverZip}</li>
                </ul>
            </div>
            <div className="col">
                <h3>Weight</h3>
                <ul className="list-unstyled">
                    <li>{weight} (lbs). Min weight: {minWeight} (lbs)</li>
                </ul>
            </div>
            <div className="col">
                <h3>Shipping cost</h3>
                <ul className="list-unstyled">
                    <li>${shippingCost.toFixed(2)}</li>
                </ul>
            </div>
        </div>
    </>);
}