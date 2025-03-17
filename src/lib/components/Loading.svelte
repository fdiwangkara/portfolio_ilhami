<script>
    import { onMount } from 'svelte';
    let progress = 0;
    let showLogo = false;
    let isLoading = true;

    onMount(() => {
        setTimeout(() => {
            const interval = setInterval(() => {
                if (progress < 100) {
                    progress += 2;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        showLogo = true;
                        setTimeout(() => {
                            setTimeout(() => {
                                isLoading = false;
                            }, 500);
                        }, 500);
                    }, 300);
                }
            }, 50);
        }, 1000);
    });
</script>

{#if isLoading}
    <div class="flex items-center justify-center h-screen w-full bg-page">
        <div class="relative w-24 h-24 md:w-32 md:h-32 sm:w-20 sm:h-20">
            <div class="absolute inset-0 border-4 border-transparent"></div>

            <div class="absolute top-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out delay-0" style="width: {progress > 0 ? `${Math.min(progress, 25) * 4}%` : '0%'};"></div>
            <div class="absolute top-0 right-0 w-[2px] bg-primary transition-all duration-300 ease-in-out delay-100" style="height: {progress > 25 ? `${Math.min(progress - 25, 25) * 4}%` : '0%'};"></div>
            <div class="absolute bottom-0 right-0 h-[2px] bg-primary transition-all duration-300 ease-in-out delay-200" style="width: {progress > 50 ? `${Math.min(progress - 50, 25) * 4}%` : '0%'};"></div>
            <div class="absolute bottom-0 left-0 w-[2px] bg-primary transition-all duration-300 ease-in-out delay-300" style="height: {progress > 75 ? `${Math.min(progress - 75, 25) * 4}%` : '0%'};"></div>

            {#if showLogo}
                <div class="absolute inset-0 flex items-center justify-center">
                    <img src="/assets/icons/logo.svg" alt="Logo" class="w-12 h-12 md:w-16 md:h-16 sm:w-10 sm:h-10 opacity-0 animate-fade-in" />
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    .animate-fade-in {
        animation: fade-in 0.3s ease-out forwards;
    }
</style>
