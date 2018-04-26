/*
 *
 * Registration actions
 *
 */

 import {
   DEFAULT_ACTION,
   POST_REGISTRATION,
 } from './constants';

 export function defaultAction() {
   return {
     type: DEFAULT_ACTION,
   };
 }

 export function postRegistration(entryType, payload) {
   return {
     type: POST_REGISTRATION,
     endpoint: entryType,
     payload,
   };
 }
