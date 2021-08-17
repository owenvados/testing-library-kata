import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { render, RenderResult } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

    async function createComponent(): Promise<RenderResult<AppComponent>> {
    return render(AppComponent, {
    })
  }

  it('should create the app', async () => {
    const app = await createComponent();

    expect(app).toBeTruthy();
  });


});
