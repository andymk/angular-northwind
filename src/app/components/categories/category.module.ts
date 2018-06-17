import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoriesService } from '../../services/categories.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'categories', component: CategoryListComponent },
        ])
    ],
    declarations: [
    CategoryListComponent],
    providers: [
        CategoriesService
    ]
})
export class CategoryModule { }
