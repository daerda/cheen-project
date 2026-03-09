import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TagFilter from '../src/components/TagFilter.vue'

describe('TagFilter', () => {
  const mockTags = ['全部', 'Vue.js', 'TypeScript', '前端']

  it('renders all tags', () => {
    const wrapper = mount(TagFilter, {
      props: {
        tags: mockTags,
        selected: '全部'
      }
    })
    mockTags.forEach(tag => {
      expect(wrapper.text()).toContain(tag)
    })
  })

  it('applies active class to selected tag', () => {
    const wrapper = mount(TagFilter, {
      props: {
        tags: mockTags,
        selected: 'Vue.js'
      }
    })
    const buttons = wrapper.findAll('.filter-tag')
    const vueButton = buttons.find(btn => btn.text() === 'Vue.js')
    expect(vueButton?.classes()).toContain('active')
  })

  it('emits select event when tag is clicked', async () => {
    const wrapper = mount(TagFilter, {
      props: {
        tags: mockTags,
        selected: '全部'
      }
    })
    const vueButton = wrapper.findAll('.filter-tag').find(btn => btn.text() === 'Vue.js')
    await vueButton?.trigger('click')
    expect(wrapper.emitted('select')).toBeTruthy()
    expect(wrapper.emitted('select')?.[0]).toEqual(['Vue.js'])
  })

  it('renders filter label', () => {
    const wrapper = mount(TagFilter, {
      props: {
        tags: mockTags,
        selected: '全部'
      }
    })
    expect(wrapper.text()).toContain('筛选:')
  })
})
