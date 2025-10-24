import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaFrom } from './receta-from';

describe('RecetaFrom', () => {
  let component: RecetaFrom;
  let fixture: ComponentFixture<RecetaFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaFrom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetaFrom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
