import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPacceComponent } from './login-pacce.component';

describe('LoginPacceComponent', () => {
  let component: LoginPacceComponent;
  let fixture: ComponentFixture<LoginPacceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPacceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPacceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
