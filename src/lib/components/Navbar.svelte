<script>
    import { activeNav } from "$lib/stores/navStore";
    import { onMount, afterUpdate } from "svelte";

    const navItems = ["About", "Journey", "Projects", "Contact"];

    let underlineEl;

    function updateUnderline() {
        const activeElement = document.querySelector(".nav-item-active");
        if (activeElement && underlineEl) {
            const { offsetLeft, offsetWidth } = activeElement;
            underlineEl.style.left = `${offsetLeft}px`;
            underlineEl.style.width = `${offsetWidth}px`;
        }
    }

    onMount(updateUnderline);
    afterUpdate(updateUnderline);
</script>

<nav class="fixed top-0 left-0 w-full bg-page/80 backdrop-blur-md py-4 flex justify-center gap-8 text-xl font-primary transition-all duration-300">
    {#each navItems as item}
        <div
                on:click={() => activeNav.set(item)}
                class="relative cursor-pointer font-primary font-normal text-lg transition-opacity duration-300
                   { $activeNav === item ? 'nav-item-active text-word opacity-100' : 'text-word2 opacity-50 hover:opacity-100' }"
        >
            <span>{item}</span>
        </div>
    {/each}

    <div
            bind:this={underlineEl}
            class="absolute bottom-4 h-[2px] bg-word transition-all duration-300 ease-in-out"
            style="left: 0; width: 0;"
    ></div>
</nav>
