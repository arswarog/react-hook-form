import { FieldPath, FieldValues, FormState } from '../types';
import get from '../utils/get';

export default function <TFieldValues extends FieldValues>(
  formState: FormState<TFieldValues>,
  name: FieldPath<TFieldValues>,
): boolean {
  const focusField = get(formState, 'focusField');

  console.log('  getFieldIsActive', name);
  if (!focusField) {
    return false;
  }
  if (name === focusField) {
    return true;
  }
  if (focusField.length <= name.length) {
    return false;
  }
  return focusField.substring(0, name.length + 1) === name + '.';
}
