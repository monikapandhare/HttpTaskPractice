import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipass } from 'src/app/shared/models/passInterface';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
  @Input() passObj!:Ipass;
  @Output() emitID:EventEmitter<number>=new EventEmitter<number>()
  public editMode!:boolean;
  public passArray!:Array<Ipass>
  constructor(private _passServ : PassengerService) { }

  ngOnInit(): void {
  }

  onUpdate(updated:string){
    this._passServ.getUpdatedPass(this.passObj.id,updated)

  }

  OnDelete(id:number){
    this._passServ.getDeletePass(this.passObj.id)
    this.emitID.emit(id)
  }

}
