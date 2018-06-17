import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'categories', component: CategoryListComponent },
        ])
    ],
    declarations: [
    CategoryListComponent],
    providers: [
    ]
})
export class CategoryModule { }
