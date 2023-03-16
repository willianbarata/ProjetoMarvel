import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListarComponent } from './character-listar.component';

describe('CharacterListarComponent', () => {
  let component: CharacterListarComponent;
  let fixture: ComponentFixture<CharacterListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
