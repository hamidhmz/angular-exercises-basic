import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  constructor() {}
  info(text: string) {
    console.log('information--->', text);
  }
}
