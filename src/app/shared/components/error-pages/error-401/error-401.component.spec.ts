/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error-401Component } from './error-401.component';

describe('Error-401Component', () => {
  let component: Error-401Component;
  let fixture: ComponentFixture<Error-401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error-401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error-401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
