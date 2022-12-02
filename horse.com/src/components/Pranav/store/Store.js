import React from 'react'
import {legacy_createStore} from "redux";
import { myReducer } from '../reducer/reducer';

export const Store=legacy_createStore(myReducer);


