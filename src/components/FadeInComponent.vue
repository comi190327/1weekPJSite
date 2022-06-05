<script>
export default {
    data() {
        return { show:true };
    },
};
</script>

<style>
.v-leave-active,
.v-enter-active {
    transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>

