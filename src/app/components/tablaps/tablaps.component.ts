import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import {DecimalPipe} from '@angular/common';
import { Observable } from 'rxjs';
import { imageData } from 'src/app/models/imageData';
import { IMGSTABLEDATA} from 'src/app/mocks/imgsTableData';
import { ImageService} from 'src/app/services/image.service';
import {NgbdSortableHeader, SortEvent} from 'src/app/directives/sortable.directive';


@Component({
  selector: 'app-tablaps',
  templateUrl: './tablaps.component.html',
  styleUrls: ['./tablaps.component.css'],
  providers: [ImageService, DecimalPipe]
})
export class TablapsComponent  {
  imgDataTable$: Observable<imageData[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ImageService) {
    this.imgDataTable$ = service.imageData$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}