import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HolidaysService } from 'src/app/services/holidays.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnDestroy {
  holidaysSubscription: Subscription;

  constructor(public holidaysService: HolidaysService) {
    this.holidaysService.holidays$.subscribe()
  }
  ngOnDestroy(): void {
    this.holidaysSubscription.unsubscribe();
  }

}
