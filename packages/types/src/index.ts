/**
 * Cheen Monorepo - 共享类型定义
 * 
 * 规则：
 * 1. 纯类型定义，禁止包含业务逻辑
 * 2. 必须使用 export type 导出
 * 3. 复杂类型使用 Zod Schema 时，必须导出推断类型
 */

// ==================== 用户相关类型 ====================

/** 用户角色 */
export type UserRole = 'admin' | 'user' | 'guest'

/** 用户基础信息 */
export interface User {
  /** 用户ID */
  id: string
  /** 用户名 */
  name: string
  /** 用户邮箱 */
  email: string
  /** 用户角色 */
  role: UserRole
  /** 创建时间 */
  createdAt: Date
}

/** 用户公开信息（脱敏） */
export type PublicUser = Pick<User, 'id' | 'name'>

// ==================== API 相关类型 ====================

/** API 响应基础结构 */
export interface ApiResponse<T = unknown> {
  /** 是否成功 */
  success: boolean
  /** 响应数据 */
  data: T
  /** 错误信息 */
  error?: string
  /** 消息提示 */
  message?: string
}

/** 分页请求参数 */
export interface PaginationParams {
  /** 页码（从1开始） */
  page: number
  /** 每页数量 */
  pageSize: number
}

/** 分页响应结构 */
export interface PaginatedResult<T> {
  /** 数据列表 */
  list: T[]
  /** 总数量 */
  total: number
  /** 当前页码 */
  page: number
  /** 每页数量 */
  pageSize: number
  /** 总页数 */
  totalPages: number
}

// ==================== 组件 Props 类型 ====================

/** 技能卡片数据 */
export interface Skill {
  /** 技能名称 */
  name: string
  /** 掌握程度（0-100） */
  level: number
  /** 主题色 */
  color: string
}

/** 文章卡片数据 */
export interface Article {
  /** 文章ID */
  id: string
  /** 标题 */
  title: string
  /** 摘要 */
  summary: string
  /** 标签列表 */
  tags: string[]
  /** 发布时间 */
  publishedAt: Date
}

/** 项目数据 */
export interface Project {
  /** 项目ID */
  id: string
  /** 项目名称 */
  name: string
  /** 项目描述 */
  description: string
  /** 技术栈 */
  techStack: string[]
  /** 项目链接 */
  link?: string
  /** 仓库链接 */
  repo?: string
}

// 类型重新导出
export type { Skill as SkillData }
export type { Article as ArticleData }
export type { Project as ProjectData }
