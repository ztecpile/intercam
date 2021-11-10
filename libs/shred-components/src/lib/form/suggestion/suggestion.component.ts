import { OverlayRef } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { ElementRef, Renderer2 } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, catchError, first  } from 'rxjs/operators';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'idb-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {
  @Input() elementRef: ElementRef;
  @Input() overlayRef: OverlayRef;
  @Input() table : string;
  @Input() subject : Subject<boolean>;
  @Input() control : FormControl;
  width : string;

  data : string[] = [];
  bd : string[] = [];
  constructor( private http: HttpClient, private renderer : Renderer2, private service : SuggestionService) {}

  ngOnInit(): void {
    this.width = this.elementRef.nativeElement.clientWidth + "px";
  }

  public refreshData(firstTime : boolean) {
    let longitud = this.elementRef.nativeElement.value.length;
    if(longitud <= 4 || firstTime) {
      this.search()
        .pipe(first())
        .subscribe(data => {
          this.bd = data;
          if(data.length > 3) {
            this.data[0] = data[0];
            this.data[1] = data[1];
            this.data[2] = data[2];
          } else {
            this.data = data;
          }
      },
      error => {
        this.data = [];
      }); 
    } else {
      let search : string = this.elementRef.nativeElement.value;
      search = search.toUpperCase();
      let dataIndex = 0;
      this.data = [];
      for(let index = 0; index < this.bd.length; index++) {
        let palabra = this.bd[index];
        if(palabra.includes(search)) {
          this.data[dataIndex] = palabra;
          dataIndex += 1;
          if(dataIndex >= 3){
            break;
          }
        }
      }
    }
  }

  ngOnDestroy(): void {
  }

  close() {
    this.overlayRef.detach();
  }

  accept(val : string) {
    this.control.setValue(val);
    this.elementRef.nativeElement.value = val;
    this.overlayRef.detach();
    this.renderer.addClass(this.elementRef.nativeElement.nextElementSibling , "fijar");
  }

  search() {
    let search : string = this.elementRef.nativeElement.value;
    search = (search.length > 0) ? search : "-1";
    return this.http.get<string[]>(`api/utils/findSuggestion/` + search + '/' + this.table)
        .pipe(map(response => {
            return response;
        }));
  }

  onMouse(flag : boolean) {
    this.service.onMouse = flag;
  }

}
