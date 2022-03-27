import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVideojuegosComponent } from './tabla-videojuegos.component';

describe('TablaVideojuegosComponent', () => {
  let component: TablaVideojuegosComponent;
  let fixture: ComponentFixture<TablaVideojuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaVideojuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
