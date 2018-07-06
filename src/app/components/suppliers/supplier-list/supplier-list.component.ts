import { Component, OnInit } from '@angular/core';
import { ISupplier } from '../../../domain/ISupplier';
import { SuppliersService } from '../../../services/suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  supplierList: ISupplier[];
  constructor(private _supplierService: SuppliersService,) { }

  ngOnInit() {
    this._supplierService.getList()
    .subscribe(sup => {
      //console.log(JSON.stringify(sup));
      this.supplierList = sup;
    });
  }

}
