import { Component, OnInit } from '@angular/core';
import { passenger } from 'src/app/shared/const/pass';
import { Ipass } from 'src/app/shared/models/passInterface';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-dash',
  templateUrl: './pass-dash.component.html',
  styleUrls: ['./pass-dash.component.scss']
})
export class PassDashComponent implements OnInit {
  public passArray : Array<Ipass> = passenger;
  public ckeckInArray!:Array<Ipass>;
  public getcheckcnt!:number;
  constructor(private _passServ : PassengerService) { }

  ngOnInit(): void {
   this.passArray = this._passServ.getAllpassData()
   console.log(this.passArray);
   this.onDeleteCount()
  }

  onDeleteCount(){
    this.ckeckInArray=this.passArray.filter((pass:Ipass) =>{
      return pass.checkedIn
    })
    this.getcheckcnt = this.ckeckInArray.length
  }

}
