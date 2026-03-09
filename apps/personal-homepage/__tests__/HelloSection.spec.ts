import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloSection from '../src/components/HelloSection.vue'

describe('HelloSection', () => {
  it('renders properly with name prop', () => {
    const wrapper = mount(HelloSection, {
      props: {
        name: 'Test User'
      }
    })
    expect(wrapper.text()).toContain('你好，我是 Test User')
  })

  it('renders subtitle', () => {
    const wrapper = mount(HelloSection, {
      props: {
        name: 'Cheen'
      }
    })
    expect(wrapper.text()).toContain('一名热爱技术的前端开发者')
  })

  it('has correct CSS class', () => {
    const wrapper = mount(HelloSection, {
      props: {
        name: 'Cheen'
      }
    })
    expect(wrapper.classes()).toContain('hero')
  })
})
