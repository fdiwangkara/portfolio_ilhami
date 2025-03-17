<script>
    import { onMount, onDestroy } from 'svelte';
    import { writable } from 'svelte/store';
    import { activeNav } from "$lib/stores/navStore";
    import Navbar from "$lib/components/Navbar.svelte";
    import About from "$lib/components/page/About.svelte";
    import Journey from "$lib/components/page/Journey.svelte";
    import Projects from "$lib/components/page/Projects.svelte";
    import Contact from "$lib/components/page/Contact.svelte";
    import Ipad from "$lib/components/page/Ipad.svelte";
    import Mobile from "$lib/components/page/Mobile.svelte";

    let showModal = writable(false);

    function getInitialView() {
        if (window.innerWidth <= 768) {
            return 'mobile';
        } else if (window.innerWidth <= 1024) {
            return 'ipad';
        } else {
            return 'desktop';
        }
    }

    let lastView = localStorage.getItem('lastView') || getInitialView();
    localStorage.setItem('lastView', lastView);

    function updateScreenSize() {
        let newView = getInitialView();

        if (newView !== lastView) {
            showModal.set(true);
            localStorage.setItem('pendingView', newView);
        }
    }

    function refreshPage() {
        let pendingView = localStorage.getItem('pendingView');
        if (pendingView) {
            localStorage.setItem('lastView', pendingView);
            localStorage.removeItem('pendingView');
        }
        window.location.reload();
    }

    onMount(() => {
        window.addEventListener("resize", updateScreenSize);
    });

    onDestroy(() => {
        window.removeEventListener("resize", updateScreenSize);
    });
</script>

{#if $showModal}
    <div class="fixed bottom-5 right-5 z-50 bg-yellow-500 text-black px-4 py-3 rounded-lg shadow-lg flex items-center space-x-4">
        <span class="font-primary font-semibold text-base">⚠️ Screen Size Changed!</span>
        <span class="font-primary font-normal text-sm">Please refresh to update your screen view.</span>
        <button on:click={refreshPage} class="bg-black text-white px-3 py-1 rounded-sm hover:bg-gray-800 transition font-primary font-normal text-sm">
            Refresh
        </button>
    </div>
{/if}

{#if lastView === 'mobile'}
    <Mobile />
{:else if lastView === 'ipad'}
    <Ipad />
{:else}
    <div class="bg-page min-h-screen flex px-[100px]">
        <div class="w-1/2 h-screen sticky top-0 flex flex-col justify-center">
            <p class="text-4xl font-primary font-semibold text-word leading-[36px]">
                Hello, <br>
                I'm <span class="font-normal italic text-primary">Ilhami Rizqy</span> <br>
                A <span class="font-bold italic text-word">Back End Dev</span> <br>
                based in <span class="font-bold text-primary">Jepara</span>.
            </p>

            <p class="text-lg font-primary text-word m-0">
                <span class="opacity-50">welcome to my personal website.</span>
                <span class="opacity-100 text-word"> enjoy!</span>
            </p>

            <div class="flex gap-6 mt-4 text-word text-2xl">
                <a href="https://github.com/" target="_blank" class="hover:text-primary transition">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" class="hover:text-primary transition">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="hover:text-primary transition">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>

        <div class="w-1/2 h-full flex flex-col justify-center relative">
            <div class="absolute top-[50px] left-1/2 transform -translate-x-1/2">
                <Navbar />
            </div>
            <div class="flex">
                {#if $activeNav === "About"}
                    <About />
                {:else if $activeNav === "Journey"}
                    <Journey />
                {:else if $activeNav === "Projects"}
                    <Projects />
                {:else if $activeNav === "Contact"}
                    <Contact />
                {/if}
            </div>
        </div>
    </div>
{/if}
