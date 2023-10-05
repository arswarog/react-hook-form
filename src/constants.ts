import { ValidationMode } from './types';

export const EVENTS = {
  BLUR: 'blur',
  FOCUS_OUT: 'focusout',
  CHANGE: 'change',
  FOCUS: 'focus',
};

export const VALIDATION_MODE: ValidationMode = {
  onBlur: 'onBlur',
  onChange: 'onChange',
  onSubmit: 'onSubmit',
  onTouched: 'onTouched',
  all: 'all',
};

export const INPUT_VALIDATION_RULES = {
  max: 'max',
  min: 'min',
  maxLength: 'maxLength',
  minLength: 'minLength',
  pattern: 'pattern',
  required: 'required',
  validate: 'validate',
};

export const FORM_DEFAULT_STATE = {
  isDirty: false,
  isValidating: false,
  isSubmitted: false,
  isSubmitting: false,
  isSubmitSuccessful: false,
  isValid: false,
  submitCount: 0,
  dirtyFields: {},
  touchedFields: {},
  errors: {},
  disabled: false,
};
