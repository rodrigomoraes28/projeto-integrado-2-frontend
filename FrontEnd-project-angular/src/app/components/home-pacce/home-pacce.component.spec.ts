import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePacceComponent } from './home-pacce.component';

describe('HomePacceComponent', () => {
  let component: HomePacceComponent;
  let fixture: ComponentFixture<HomePacceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePacceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePacceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
