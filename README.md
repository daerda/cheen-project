# Cheen Project

一个基于 pnpm workspace 的 Vue 3 + TypeScript + Vite Monorepo 项目。

## 📁 项目结构

```
cheen-project/
├── apps/                           # 应用层（业务逻辑，不可被依赖）
│   ├── personal-homepage/         # 个人主页应用 (Vue3 + Vite)
│   └── tech-summary/              # 技术摘要应用 (Vue3 + Vite)
├── packages/                       # 共享层（可被依赖）
│   ├── ui/                        # UI 组件库 (@cheen/ui)
│   │   ├── src/components/
│   │   │   ├── BaseButton.vue
│   │   │   ├── BaseCard.vue
│   │   │   └── BaseModal.vue
│   │   └── package.json
│   ├── core/                      # 业务逻辑 Composables (@cheen/core)
│   │   ├── src/composables/
│   │   │   └── useCounter.ts
│   │   └── package.json
│   └── types/                     # 全局 TypeScript 类型 (@cheen/types)
│       ├── src/index.ts
│       └── package.json
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## 🚀 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 下一代前端构建工具
- **Vitest** - 单元测试框架
- **pnpm** - 高效的包管理器

## 📦 安装

```bash
# 安装 pnpm（如果尚未安装）
npm install -g pnpm

# 安装依赖
pnpm install
```

## 🔧 开发

```bash
# 启动个人主页项目（端口 3000）
pnpm dev:homepage

# 启动技术总结项目（端口 3001）
pnpm dev:tech

# 同时构建所有项目
pnpm build

# 运行所有测试
pnpm test
```

## 🧪 测试

```bash
# 运行所有单元测试
pnpm test:unit

# 运行特定项目的测试
pnpm --filter personal-homepage test:unit
pnpm --filter tech-summary test:unit
```

## 📋 项目详情

### Personal Homepage (个人主页)

展示个人信息的响应式主页，包含：
- 个人介绍
- 技能展示
- 项目导航

运行：`pnpm dev:homepage`

### Tech Summary (技术总结)

技术文章汇总页面，包含：
- 标签筛选

运行：`pnpm dev:tech`
