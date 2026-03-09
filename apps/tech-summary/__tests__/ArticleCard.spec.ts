import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ArticleCard from '../src/components/ArticleCard.vue'

describe('ArticleCard', () => {
  const mockArticle = {
    title: '测试文章标题',
    summary: '这是文章的摘要内容...',
    tags: ['Vue.js', '前端'],
    date: '2024-03-01',
    readTime: '10 分钟'
  }

  it('renders article title correctly', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle
    })
    expect(wrapper.text()).toContain('测试文章标题')
  })

  it('renders article summary correctly', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle
    })
    expect(wrapper.text()).toContain('这是文章的摘要内容')
  })

  it('renders all tags', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle
    })
    expect(wrapper.text()).toContain('Vue.js')
    expect(wrapper.text()).toContain('前端')
  })

  it('renders date and read time', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle
    })
    expect(wrapper.text()).toContain('2024-03-01')
    expect(wrapper.text()).toContain('10 分钟')
  })

  it('has correct CSS class', () => {
    const wrapper = mount(ArticleCard, {
      props: mockArticle
    })
    expect(wrapper.classes()).toContain('article-card')
  })
})
