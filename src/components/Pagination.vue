<template>
<div>

    <button v-if="current > 1" @click="goToPage(1)">First</button>
    <button v-if="current > 1" @click="goToPage(current - 1)">Prev</button>
    | Page {{ current }}
    <button v-if="current < max" @click="goToPage(current + 1)">Next</button>
    <button v-if="current < max" @click="goToPage(max)">Last</button>
    
</div>
</template>

<script>
export default {
    props: ['current', 'max'],
    methods: {
        goToPage(page) {
            this.$emit('page-changed', page);
        }
    }
}
</script>