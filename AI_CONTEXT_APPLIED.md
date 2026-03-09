# Monorepo
## 目录结构

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

## 已应用的规范

### 1. 项目架构与依赖规则 ✅
- `apps/*` → `packages/*` 依赖方向正确
- 使用 `workspace:^` 协议跨包引用
- 所有包使用统一 scope `@cheen/*`

### 2. TypeScript 严格规范 ✅
- 禁止 `any` 类型
- Props/Emits 使用 interface + 泛型
- 共享类型定义在 `packages/types/`

### 3. Vue SFC 规范 ✅
- 使用 `<script setup lang="ts">`
- 导入顺序：类型 → Vue API → 跨包依赖 → 本地组件
- Props: `interface Props` + `withDefaults` + `defineProps<Props>()`
- Emits: 显式类型定义
- HTML 标签使用 kebab-case

### 4. 命名规范 ✅
- 包名：`@cheen/ui`, `@cheen/core`, `@cheen/types`
- Composables: `useXXX.ts` (小写驼峰)
- 组件：PascalCase

### 5. 代码组织 ✅
- 脚本在前，模板在后
- 复杂逻辑提取到 composables
- JSDoc 注释

## 可用的包

| 包名 | 路径 | 说明 |
|------|------|------|
| @cheen/ui | packages/ui | UI 组件 (BaseButton, BaseCard, BaseModal) |
| @cheen/core | packages/core | Composables (useCounter) |
| @cheen/types | packages/types | 共享类型 (User, Skill, Article, Project) |

## 使用示例

```vue
<script setup lang="ts">
// 1. 类型导入
import type { Skill, User } from '@cheen/types'

// 2. Vue API
import { ref, computed } from 'vue'

// 3. 跨包依赖
import { BaseButton, BaseCard } from '@cheen/ui'
import { useCounter } from '@cheen/core'

// 4. Props 定义
interface Props {
  userId: string
}

const props = withDefaults(defineProps<Props>(), {
  userId: ''
})

// 5. Emits 定义
const emit = defineEmits<{
  submit: [data: User]
}>()

// 6. 逻辑
const { count, increment } = useCounter(0)
</script>

<template>
  <base-card title="示例">
    <base-button @click="increment">
      Count: {{ count }}
    </base-button>
  </base-card>
</template>
```

## 脚本命令

```bash
# 开发
pnpm dev:homepage    # 启动个人主页
pnpm dev:tech        # 启动技术摘要

# 构建
pnpm build           # 构建所有包
pnpm build:homepage  # 仅构建个人主页

# 检查
pnpm type-check      # TypeScript 类型检查
pnpm lint            # 代码检查
pnpm test:unit       # 单元测试
```
