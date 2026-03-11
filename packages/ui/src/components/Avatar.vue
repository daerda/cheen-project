<script setup lang="ts">
// 使用相对路径从 shared 包导入默认头像
import DefaultAvatar from "../../../shared/assets/avatar1.png";

const props = withDefaults(defineProps<{
    src?: string
    alt?: string
}>(), {
    src: DefaultAvatar
})
</script>
<template>
    <img :src="props.src" :alt="props.alt" class="avatar" />
</template>
<style scoped>
.avatar {
    box-sizing: content-box;
    object-fit: cover;

    --s: 10rem;
    /* --c1: #ffab9d;
    --c2: #f3e4a4; */
    --c1: var(--color-primary);
    --c2: var(--color-primary-subtle);
    --b: 3px;
    --f: 1;
    --bgOption: content-box no-repeat center / calc(100% / var(--f));

    width: var(--s);
    height: var(--s);
    cursor: pointer;
    transition: 0.5s;
    background: radial-gradient(circle closest-side,
            var(--c2) calc(99% - var(--b)),
            var(--c1) calc(100% - var(--b)) 99%,
            transparent)
            var(--bgOption);
    outline: var(--b) solid var(--c1);
    border-radius: 0 0 999px 999px ;
    outline-offset: calc((1 / var(--f) - 1) * var(--s) / 2 - var(--b));
    padding-top: calc(var(--s) / 5);
    mask: linear-gradient(#000 0 0) no-repeat 50% calc(12px - (1 / var(--f) - 1) * var(--s) / 2 - var(--b)) / calc(100% / var(--f) - 3 * var(--b)) 50%,
        radial-gradient(circle closest-side,#000 99%, transparent)
        var(--bgOption)
}

.avatar:hover {
    --f: 1.35;
    transform: scale(var(--f));
}
</style>