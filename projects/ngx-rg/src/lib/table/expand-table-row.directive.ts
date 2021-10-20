import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, HostListener, Output, EventEmitter, Input, ElementRef, Renderer2, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExpandTableRow]'
})
export class ExpandTableRowDirective {

  _expandRow;

  @Output() clickRow = new EventEmitter();

  @Input() expandTemplate;

  @Input() set expandRow(value){
    this._expandRow = value;
    this.selectRow();
  }

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, "select-row")
  }

  @HostListener('click', ['$event'])
  onClickHandler(event) {
    const id = event.target.parentNode.closest("tr")?.dataset?.id;
    if(id){
      this.clickRow.emit(id)
    }
  }

  selectRow(){

    if(!this._expandRow){return false}

    this.el.nativeElement.querySelectorAll(`tr`).forEach(element => {
      if(element.getAttribute(`data-expand`)){
        this.renderer.removeChild(this.el.nativeElement, element)
      }
    });

    const row = this.el.nativeElement.querySelector(`[data-id*="${this._expandRow}"]`);
    if(!row){return false}

    const tr = this.renderer.createElement('tr');
    tr.setAttribute("data-expand", "true")
    tr.appendChild(this.expandTemplate.children[0].cloneNode(true))

    row.parentNode.insertBefore(tr, row.nextSibling);


  }

}
