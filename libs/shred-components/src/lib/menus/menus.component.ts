import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'idb-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {
  @Input() menusList: Array<any>;

  url: any;
  target: any = null;
  target_parent: any = null;

  constructor(
    private router: Router,
    private render: Renderer2,
    ) {
  }

  load_url ( menuItem: any, e: any, niv: any ) {
    if ( this.target_parent != null) {
      this.render.removeClass(this.target_parent, 'select');
    }
    if ( niv === 2 ) {
        this.target_parent = e.target.parentNode.parentNode.parentNode.parentNode;
      this.render.addClass( this.target_parent, 'select');
    } else {
      this.target_parent = null;
    }

//    console.log("target_old: ", this.target);
    if ( this.target != null) {
      this.render.removeClass(this.target, 'select');
    }
    this.target = event.target || event.srcElement || event.currentTarget;
//    console.log("target: ", this.target);
    this.render.addClass(this.target, 'select');

    this.url=menuItem['url'];
//    console.log ('MenuItem: ', menuItem);
//    console.log ('Link:', this.url);
    this.router.navigate( [this.url] )
      .catch(this.handleError);
//    console.log ("menu", this.menusList);
  }

  private handleError (error: Response|any) {
//    console.log ("ERROR->", error)
    if (error.status == 401) {
      this.router.navigate(['/path_to_login_page']);
      return error.status;
    }
  }

}
