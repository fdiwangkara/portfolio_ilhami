<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    export let title = "Default Title";

    let isSticky = writable(false);
    let showSticky = writable(false);
    let activeTitle = writable("");

    let lastVisibleTitle = "";

    onMount(() => {
        const titles = document.querySelectorAll("[data-title]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        lastVisibleTitle = entry.target.getAttribute("data-title");
                        activeTitle.set(lastVisibleTitle);
                        showSticky.set(false);
                        isSticky.set(false);
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.1 }
        );

        titles.forEach(title => observer.observe(title));

        const handleScroll = () => {
            let lastElement = null;

            titles.forEach(title => {
                const rect = title.getBoundingClientRect();
                if (rect.top < 0) {
                    lastElement = title;
                }
            });

            if (lastElement) {
                const newTitle = lastElement.getAttribute("data-title");
                if (newTitle !== lastVisibleTitle) {
                    activeTitle.set(newTitle);
                    lastVisibleTitle = newTitle;
                }
                showSticky.set(true);
                isSticky.set(true);
            } else {
                showSticky.set(false);
                isSticky.set(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<div data-title={title} class="relative w-full">
    <h2 class="font-primary text-xl text-word font-semibold">{title}</h2>
</div>

{#if $showSticky}
    <div class="sticky top-0 left-0 w-full bg-page backdrop-blur-md shadow-md transition-all duration-300" class:sticky-active={$isSticky}>
        <div class="relative w-full px-[40px] py-4 flex items-center">
            <h2 class="font-primary text-xl text-word font-semibold">{$activeTitle}</h2>
            <div class="absolute right-0 w-[150px] h-[30px] bg-accent opacity-50 blur-2xl rounded-full"></div>
        </div>
    </div>
{/if}

<style>
    .sticky-active {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 50;
    }
</style>
