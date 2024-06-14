import { ElementRef } from '@angular/core';
import { BorderCardDirective } from './border-card.directive';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    const directive = new BorderCardDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
