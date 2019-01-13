import { Component } from '@angular/core';
import { BreadcrumbService } from './core/service/breadcrumb.service';
import { TranslateService } from './core/service/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scss-test';
  constructor(private _bs: BreadcrumbService, public ts: TranslateService) {
    // this.transTest();
    // this.jsonTest();
  }

  transTest() {
    const num = 2;
    // console.log('Translated:', this.ts.transPlural(`you have ${num} item in cart`));
    // console.log('=== END ===');
  }

  jsonTest() {
    console.log(`=== BEGIN jsonTest() ===`);
    const people = [
      {
        'fname': 'Maciej',
        'lname': 'Marszałek'
      },
      {
        'fname': 'Adin',
        'lname': 'ADIN'
      }
    ].map(r => new Person().deserialize(r));
    people.reduce(r => r.sayHello());
    console.log(`=== END jsonTest() ===`);
  }
}

class Person implements Deserializable {
  fname: string;
  lname: string;

  deserialize(input: any) {
    return Object.assign(this, input);
  }

  sayHello() {
    console.log(`I'm ${this.fname} ${this.lname}.`);
  }
}

export interface Deserializable {
  deserialize(input: any): this;
}
