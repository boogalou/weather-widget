import { createAction } from '@reduxjs/toolkit';
import { AsyncRequestPayload } from '../type/ActionsTypes';


export const asyncRequest = createAction<AsyncRequestPayload>('asyncRequest')