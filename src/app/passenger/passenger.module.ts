import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassDashComponent } from './pass-dash/pass-dash.component';




@NgModule({
  declarations: [
    PassCountComponent,
    PassCardComponent,
    PassDashComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PassDashComponent
  ]
})
export class PassengerModule { }
