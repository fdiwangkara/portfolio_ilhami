<script>
    import "../app.css";
    import Loading from "$lib/components/Loading.svelte";
    import { onMount } from 'svelte';
    import Glow from "$lib/components/Glow.svelte";

    let isLoading = true;

    onMount(() => {
        setTimeout(() => {
            isLoading = false;
        }, 5000);
    });
</script>

{#if isLoading}
    <Loading />
{:else}
    <Glow />
    <slot />
{/if}
