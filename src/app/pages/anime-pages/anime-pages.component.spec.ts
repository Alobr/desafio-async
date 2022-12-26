import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePagesComponent } from './anime-pages.component';

describe('AnimePagesComponent', () => {
  let component: AnimePagesComponent;
  let fixture: ComponentFixture<AnimePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
