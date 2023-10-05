import { VALIDATION_MODE } from '../constants';
import { Control, FieldValues, FormState, ReadFormState } from '../types';

export default <TFieldValues extends FieldValues, TContext = any>(
  formState: FormState<TFieldValues>,
  control: Control<TFieldValues, TContext>,
  localProxyFormState?: ReadFormState,
  isRoot = true,
) => {
  const result = {
    defaultValues: control._defaultValues,
  } as typeof formState;

  console.log('create proxy', JSON.stringify(control._proxyFormState, null, 2));
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key as keyof FormState<TFieldValues> & keyof ReadFormState;

        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }

        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      },
    });
  }

  return result;
};
