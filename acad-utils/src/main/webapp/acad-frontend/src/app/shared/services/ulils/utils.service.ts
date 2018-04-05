import { Injectable } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';

export interface Color {
  name: string;
  value: string;
}

@Injectable()
export class UtilsService {
  private readonly COLORS: Color[] = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Red', value: '#F44336' },
    { name: 'Pink', value: '#E91E63' },
    { name: 'Deep Purple', value: '#673AB7' },
    { name: 'Indigo', value: '#3F51B5' },
    { name: 'Blue', value: '#2196F3' },
    { name: 'Cyan', value: '#00BCD4' },
    { name: 'Teal', value: '#009688' },
    { name: 'Green', value: '#4CAF50' },
    { name: 'Lime', value: '#CDDC39' },
    { name: 'Yellow', value: '#FFEB3B' },
    { name: 'Amber', value: '#FFC107' },
    { name: 'Orange', value: '#FF9800' },
    { name: 'Brown', value: '#795548' },
    { name: 'Grey', value: '#9E9E9E' },
  ];

  getColors(): Color[] {
    return this.COLORS;
  }

  createNumberValidator(min: number, max: number): ValidatorFn {
    return Validators.compose([
      Validators.required,
      Validators.min(min),
      Validators.max(max),
    ]);
  }
}
