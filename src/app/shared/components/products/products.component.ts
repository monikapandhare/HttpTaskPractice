import { Component, OnInit } from '@angular/core';
import { ObservableServiceService } from '../../services/observable-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _observServ : ObservableServiceService) { }

  ngOnInit(): void {
    this._observServ.fetchAllData()
      .subscribe(res =>{
        console.log(res);
        
      })
    this._observServ.fetchSkills()
      .subscribe(res => {
        console.log(res);
        
      })
  }

}
