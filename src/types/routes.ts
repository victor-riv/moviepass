import { Router } from 'express';

export interface Routes {
  [route: string]: Router;
}
