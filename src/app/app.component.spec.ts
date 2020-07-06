import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-exercise'`, () => {
    expect(app.title).toEqual('angular-exercise');
  });

  it('should render correct title (Angular Exercise)', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Angular Exercise');
  });

  it('should have only one mat-toolbar', () => {
    const toolbars = fixture.debugElement.queryAll(By.css('mat-toolbar'));
    expect(toolbars.length).toBe(1); 
  });

  it('should contain app-transactions component', () => {
    const components = fixture.debugElement.queryAll(By.css('app-transactions'));
    expect(components.length >= 1).toBeTruthy();
  })

});
