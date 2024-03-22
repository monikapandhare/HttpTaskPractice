import { Injectable } from '@angular/core';
import { Ipass } from '../models/passInterface';
import { passenger } from '../const/pass';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  public passData : Ipass[] = passenger
  constructor() { }

  getAllpassData(){
     return this.passData
  }

  getUpdatedPass(id:number,name:string){
    return this.passData.filter(pass =>{
      if(pass.id === id){
         pass.fullname = name
      }
    })
  }

  getDeletePass(id:number){
    let getIndex = this.passData.findIndex(pass=>pass.id === id)
    let DeletePass = this.passData.splice(getIndex,1)
  }
}
