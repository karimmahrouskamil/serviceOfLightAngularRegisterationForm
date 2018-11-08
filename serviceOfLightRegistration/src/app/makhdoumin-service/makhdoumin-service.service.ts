import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakhdouminServiceService {
  constructor() {}

  createNewMakhdoum(makhdoumData) {
    console.log(makhdoumData);
  }
}
