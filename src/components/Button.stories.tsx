import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    tittle: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account',
        size: 'md',
    },
    argTypes: {},
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}