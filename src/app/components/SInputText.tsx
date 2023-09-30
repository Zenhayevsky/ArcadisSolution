import {
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  useState,
} from 'react';

export interface SInputTextProps
  extends React.HTMLProps<HTMLInputElement> {
  label: string;
  type: HTMLInputTypeAttribute;
  customOnChange?: (event: any) => void;
  dataIncomplete?: boolean;
  invalidData?: boolean;
}

export const SInputText = forwardRef(
  (
    {
      invalidData,
      dataIncomplete,
      className,
      label,
      id,
      customOnChange,
      pattern,
      ...props
    }: SInputTextProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    
    const [value, setValue] = useState(props.value);

    return (
      <div className={`relative ${className || ''}`}>
        <input
          pattern={pattern}
          {...props}
          onChange={(event) => {
            setValue(event.target.value);
            if (customOnChange) {
              customOnChange(event);
            }
            if (props.onChange) {
              props.onChange(event);
            }
          }}
          ref={ref}
          className='peer font-alt rounded-md h-12 appearance-none border border-primary-200 text-green-900 w-full py-2 px-4 pt-6 bg-white placeholder-gray-400 text-sm focus:outline-none'
        />
        <label
          htmlFor={id}
          className={`font-semibold font-alt text-sm absolute left-4 ${
            value ? 'top-1' : 'top-1'
          }`}
        >
          {label}
        </label>
        {dataIncomplete && (
          <>
            <p className="text-xs text-red-400 font-semibold">
              Enter your {label}
            </p>
          </>
        )}
        {invalidData && (
          <>
            <p className="text-xs text-red-400 font-semibold">
              This {label} is not on our database
            </p>
          </>
        )}
      </div>
    );
  }
);

SInputText.displayName = 'SInputText';
