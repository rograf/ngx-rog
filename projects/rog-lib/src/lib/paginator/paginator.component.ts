import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class PaginatorOptions {
  
}

@Component({
  selector: 'rog-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  private inDebounce;
  private _length = 0;
  private _pageSize = 0;
  private _options = new PaginatorOptions(); 

  @Output() page = new EventEmitter();

  @Input() set options (value){
    this._options = {...this.options, ...value};
  }
  get options(){
    return this._options;
  }

  @Input() set length (value){
    this._length = value;
    this.calculateData();
  }
  get length(){
    return this._length;
  }

  @Input() set pageSize (value){
    this._pageSize = value;
    this.calculateData();
  }
  get pageSize(){
    return this._pageSize;
  }

  currentPage = 1
  totalPages = 1
  startIndex = 0
  endIndex = 0

  constructor() { }

  ngOnInit(): void {
  }

  calculateData(){
    clearTimeout(this.inDebounce);
    this.inDebounce = setTimeout(() => {
      this.calculateTotalPages();
      this.calculateIndex();
    })
  }

  calculateTotalPages(){
    this.totalPages = Math.ceil(this.length / this.pageSize)
  }

  calculateIndex(){
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = this.currentPage * this.pageSize
  }

  nexPage(){
    if(this.currentPage < this.totalPages){
      this.currentPage = this.currentPage + 1;
      this.calculateIndex();
      this.emitPage();
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage = this.currentPage - 1;
      this.calculateIndex();
      this.emitPage();
    }
  }

  setPage(){
    if(this.currentPage > this.totalPages){
      this.currentPage = this.totalPages;
    } else if(this.currentPage < 1) {
      this.currentPage = 1;
    }
    this.calculateIndex();
    this.emitPage();
  }

  emitPage(){
    this.page.emit({
      currentPage: this.currentPage -1,
      totalPages: this.totalPages - 1,
      startIndex: this.startIndex,
      endIndex: this.endIndex
    })
  }

}
