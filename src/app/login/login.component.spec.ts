import { ReactiveFormsModule } from '@angular/forms';
import {render, screen, RenderResult} from '@testing-library/angular'
import userEvent from '@testing-library/user-event';

import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let authServiceStub: jasmine.SpyObj<AuthService>;

  async function createComponent(): Promise<RenderResult<LoginComponent>> {
    return render(LoginComponent, {
      imports: [ ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
      ]
    })
  }

  it('should render Login component without errors', async () => {

    await createComponent();

    expect(screen.getByTestId('email-input')?.textContent).toBe('');
    expect(screen.getByTestId('password-input')?.textContent).toBe('');
    expect(screen.queryByRole('alert')).toBeFalsy();

    expect(screen.queryByRole('button')?.hasAttribute('disabled')).toBeTrue;
  })

  it('should show email error when enter incorrect data', async() => {
    await createComponent();

    userEvent.type(screen.getByTestId('email-input'), 'bob');
    userEvent.type(screen.getByTestId('password-input'), 'pass');

    expect(screen.queryByText('Please enter a valid email')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeDisabled();
  });
});


