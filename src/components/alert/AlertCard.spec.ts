import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AlertCard from './AlertCard.vue'

describe('AlertCard', () => {
  it('renders title and message', () => {
    const props = { title: 'Error', message: 'There was an error' }
    const wrapper = mount(AlertCard, { props })
    expect(wrapper.text()).toContain(props.title)
    expect(wrapper.text()).toContain(props.message)
  })
})
