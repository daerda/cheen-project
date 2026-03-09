import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillCard from '../src/components/SkillCard.vue'

describe('SkillCard', () => {
  it('renders skill name correctly', () => {
    const wrapper = mount(SkillCard, {
      props: {
        name: 'Vue.js',
        level: 90,
        color: '#42b883'
      }
    })
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('90%')
  })

  it('applies correct width to progress bar', () => {
    const wrapper = mount(SkillCard, {
      props: {
        name: 'TypeScript',
        level: 85,
        color: '#3178c6'
      }
    })
    const progressBar = wrapper.find('.skill-progress')
    expect(progressBar.attributes('style')).toContain('width: 85%')
    expect(progressBar.attributes('style')).toContain('background-color: rgb(49, 120, 198)')
  })

  it('has skill-card class', () => {
    const wrapper = mount(SkillCard, {
      props: {
        name: 'Test',
        level: 50,
        color: '#000000'
      }
    })
    expect(wrapper.classes()).toContain('skill-card')
  })
})
