import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetalharPage } from './aluno-detalhar.page';

describe('AlunoDetalharPage', () => {
  let component: AlunoDetalharPage;
  let fixture: ComponentFixture<AlunoDetalharPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoDetalharPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoDetalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
