import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SuppliersService } from '../../services/suppliers.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'suppliers', component: SupplierListComponent },
        ])
    ],
    declarations: [
    SupplierListComponent],
    providers: [
        SuppliersService
    ]
})
export class SupplierModule { }
