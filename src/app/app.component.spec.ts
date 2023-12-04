import { TestBed } from '@angular/core/testing';
import { screen, render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent);
  });

  it('should render title', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to angular-meetup-rx-angular-gegen-control-flow!');
  });
});
