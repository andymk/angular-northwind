import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../../domain/ICategory';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: ICategory[];
  constructor(private _categoryService: CategoriesService,) { }

  ngOnInit() {
    this._categoryService.getList()
    .subscribe(cats => {
      console.log(JSON.stringify(cats));
      this.categoryList = cats;
    });
  }

}
