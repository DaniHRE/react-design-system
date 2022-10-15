import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

export default {
    tittle: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <TextInput.Input placeholder="Type your e-mail address" />
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}