import { ActionsObservable as Observable } from 'redux-observable';
import { push } from 'react-router-redux';

import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';

import {
  CHANGED_LOCATION,
  NULL,
} from '../constants/actionTypes';
import { toggleMenu } from '../actions/menu.actions';

export const changeLocationEpic = (action$, store) => (
  action$.ofType(CHANGED_LOCATION)
  .debounceTime(1000)
  .flatMap(action => {
    Observable.concat(
      Observable.of(push(action.payload)),
      Observable.of(toggleMenu()),
    )}));
