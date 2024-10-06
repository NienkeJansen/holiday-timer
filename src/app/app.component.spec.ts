import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

@Component({ selector: 'app-timer', template: '' })
export class MockTimerComponent {
}
describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockTimerComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
