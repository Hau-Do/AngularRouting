import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'about-item',
    template: `<h3>About Item Id: {{id}}</h3>`
  })
  export class AboutItemComponent { 
      id: number;
      paramsSub: any;

      constructor(private activatedRoute: ActivatedRoute) { 

      }

      ngOnInit(){
          console.log("activatedRoute.params", this.activatedRoute.params);
          this.paramsSub = this.activatedRoute.params
          .subscribe(
              param => {
                  console.log("param", param);
                  this.id = parseInt(param['id'], 10);
              });
      }

      ngOnDestroy() {
          this.paramsSub.unsubscribe();
          console.log("unsubscribed .");
      }
  }
  