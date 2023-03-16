import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescricaoComponent } from './item-descricao.component';

describe('ItemDescricaoComponent', () => {
  let component: ItemDescricaoComponent;
  let fixture: ComponentFixture<ItemDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDescricaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
