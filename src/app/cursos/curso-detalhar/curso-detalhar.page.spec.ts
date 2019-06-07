import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalharPage } from './curso-detalhar.page';

describe('CursoDetalharPage', () => {
  let component: CursoDetalharPage;
  let fixture: ComponentFixture<CursoDetalharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDetalharPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDetalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
