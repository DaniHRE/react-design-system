import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from './TextInput'

export default {
    tittle: 'Components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Type your e-mail address',
    },
    argTypes: {},
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}