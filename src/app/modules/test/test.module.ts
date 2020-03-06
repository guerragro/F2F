import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './component/test/test.component';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {TestStore} from './store/mobx.store';
import {Service} from './service/service';
import {HttpClientModule} from '@angular/common/http';
// import {testReducer} from './store/test.reducer';
// import {reducer} from './store/test.reducer';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forRoot(testReducer),
    // StoreModule.forRoot(reducer)
  ],
  providers: [
    TestStore,
    Service,
    HttpClientModule
  ],
  bootstrap: [TestComponent]
})
export class TestModule { }

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     RouterModule.forChild(WaresInfoRoutes),
//
//     SharedModule,
//
//     PopoverModule,
//     TooltipModule,
//   ],
//   declarations: [
//     WaresInfoComponent
//   ],
//   providers: [
//     WaresInfoService
//   ]
// })
