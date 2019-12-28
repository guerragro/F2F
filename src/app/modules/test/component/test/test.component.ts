import { Component, OnInit } from '@angular/core';
import {AppState, State} from '../../store/test.reducer';
import {Store} from '@ngrx/store';
import * as fromAction from '../../store/test.action';
import {Observable} from 'rxjs';
import {TestStore} from '../../store/mobx.store';
import {fromMobx} from 'ngx-mobx';
import {NumberModel} from '../../model';
import {Service} from '../../service/service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // test: any;
  store: Store<AppState>;
  city = ['l', 'o', 'n', 'd', 'o', 'n'];
  bizarro = ['kh', 'ch', 'sh', 'shh', 'zh', 'a', 'b', 'v', 'g', 'd', 'e', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'с', '#', 'y', 'ь', 'e', 'u', 'a'];
  origin =  ['х', 'ч', 'ш', 'щ', 'ж', 'a', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'ц', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
  test$;
  model = new NumberModel();
  loginText = 'Login';
  signUpText = 'Sign';
  lesson = ['session1', 'session2'];
  zik = false;

  constructor(
    public mobxStore: TestStore,
    public service: Service
  ) { }

  ngOnInit() {
    // this.test$ = fromMobx(() => this.mobxStore.number);
    // this.test$.subscribe(res => this.test = res);
    // this.store.subscribe(
    //   res => console.log(res)
    // );
    // this.city.forEach( (a) =>
    //   this.bizarro.forEach((b, index) => {
    //     if (b === a) {
    //       console.log(this.origin[index]);
    //     }
    //   })
    // );
    // this.test = [{name: 'Axe', age: 5}];
    // this.service.test().substring(
    //   (res: string) => console.log(res),
    //   err => console.log(err)
    // );
  }

  login() {
    console.log(this.loginText);
  }
  sign() {
    console.log(this.signUpText);
  }

  add() {
    // this.store.dispatch ( new fromAction.add(this.test) );
  }

  upNumber() {
    this.mobxStore.upNumber();
    this.model = new NumberModel('1', ['2']);
    console.log(this.model);
  }

  zip(res) {
    console.log(res);
    // this.zik = !this.zik;
    // console.log(this.zik);
  }

}
