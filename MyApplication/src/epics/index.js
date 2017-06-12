import { combineEpics } from 'redux-observable';
import { changeLocationEpic } from './menuEpic';

const epics = combineEpics(
  changeLocationEpic,
);

export default epics;
