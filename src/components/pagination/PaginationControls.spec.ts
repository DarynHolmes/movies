import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PaginationControls from './PaginationControls.vue'

describe('PaginationControls', () => {
  it('renders pagination text', () => {
    const wrapper = mount(PaginationControls, { props: { totalPages: 10, modelValue: 5 } })
    expect(wrapper.text()).toContain('Page: 5 / 10')
  })

  it('disabled the previous button when on the first page', () => {
    const wrapper = mount(PaginationControls, { props: { totalPages: 10, modelValue: 1 } })
    const previousButton = wrapper
      .findAll('button')
      .filter((b) => b.text().match('<'))
      .at(0)

    const nextButton = wrapper
      .findAll('button')
      .filter((b) => b.text().match('>'))
      .at(0)

    expect(previousButton?.exists()).toBeTruthy()
    expect(nextButton?.exists()).toBeTruthy()

    expect(previousButton?.attributes().disabled).toBeDefined()
    expect(nextButton?.attributes().disabled).not.toBeDefined()
  })

  it('disabled the next button when on the last page', () => {
    const wrapper = mount(PaginationControls, { props: { totalPages: 100, modelValue: 100 } })
    const previousButton = wrapper
      .findAll('button')
      .filter((b) => b.text().match('<'))
      .at(0)

    const nextButton = wrapper
      .findAll('button')
      .filter((b) => b.text().match('>'))
      .at(0)

    expect(previousButton?.exists()).toBeTruthy()
    expect(nextButton?.exists()).toBeTruthy()

    expect(previousButton?.attributes().disabled).not.toBeDefined()
    expect(nextButton?.attributes().disabled).toBeDefined()
  })
})
