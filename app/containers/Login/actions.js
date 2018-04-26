/*
 *
 * Login actions
 *
 */
 import {
   DEFAULT_ACTION,
   // LOGIN,
 } from './constants';

 export function defaultAction() {
   return {
     type: DEFAULT_ACTION,
   };
 }

 // export function postEntry(entryType, payload) {
 //   return {
 //     type: LOGIN,
 //     endpoint: entryType,
 //     payload,
 //   };
 // }
