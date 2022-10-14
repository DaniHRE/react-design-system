import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInput(props: TextInputProps) {
    return (
        <div className="py-4 px-2 rounded w-full outline-none bg-gray-800 text-gray-100 text-xs plceholder:text-gray-400 focus:ring-2 ring-cyan-300">
            

            <input
                className={clsx(
                    '',
                )}
                {...props}
            />
        </div>
    )
}
