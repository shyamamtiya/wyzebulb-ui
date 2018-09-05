import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingdataComponent } from './incomingdata.component';

describe('IncomingdataComponent', () => {
  let component: IncomingdataComponent;
  let fixture: ComponentFixture<IncomingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
