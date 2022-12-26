import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  private holidays = new BehaviorSubject<string>('Navidad')
  public holidays$ = this.holidays.asObservable()
  private lastValue: string = 'Navidad'

  constructor() {
    this.holidays.subscribe((valor) => (this.lastValue = valor))
    interval(1000).subscribe(() => this.lastValue === 'Navidad' ? this.holidays.next('Año Nuevo') : this.holidays.next('Navidad'))
  }
}