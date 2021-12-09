import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainCard from './MainCard'

export default {
  title: 'src/components/MainCard',
  component: MainCard,
} as ComponentMeta<typeof MainCard>

const Template: ComponentStory<typeof MainCard> = () => <MainCard />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
