<script>
    import { writable } from "svelte/store";

    export let formspreeUrl = "";
    let name = writable("");
    let email = writable("");
    let message = writable("");
    let loading = writable(false);
    let success = writable(null);

    async function handleSubmit(event) {
        event.preventDefault();
        loading.set(true);
        success.set(null);

        const formData = new FormData(event.target);

        try {
            const response = await fetch(formspreeUrl, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });

            if (response.ok) {
                success.set(true);
                name.set("");
                email.set("");
                message.set("");
            } else {
                success.set(false);
            }
        } catch (error) {
            success.set(false);
        } finally {
            loading.set(false);

            setTimeout(() => {
                success.set(null);
            }, 3000);
        }
    }
</script>

<div class="flex justify-center w-full">
    <form on:submit={handleSubmit} class="w-full max-w-[300px] space-y-6 flex flex-col">
        <div class="w-full">
            <input type="text" bind:value={$name} name="name" required placeholder="Name"
                   class="w-full p-2 border-b border-gray-300 bg-transparent placeholder-word2 text-word text-sm font-primary font-normal focus:outline-none focus:border-primary">
        </div>

        <div class="w-full">
            <input type="email" bind:value={$email} name="email" required placeholder="Email"
                   class="w-full p-2 border-b border-gray-300 bg-transparent placeholder-word2 text-word text-sm font-primary font-normal focus:outline-none focus:border-primary">
        </div>

        <div class="w-full">
            <textarea bind:value={$message} name="message" required rows="4" placeholder="Message"
                      class="w-full p-2 border-b border-gray-300 bg-transparent placeholder-word2 text-word text-sm font-primary font-normal focus:outline-none focus:border-primary"></textarea>
        </div>

        <button type="submit"
                class="w-full max-w-xs flex items-center justify-center gap-2 text-white text-sm font-primary font-semibold py-3 rounded-lg transition-all duration-300
                       {($success === true) ? 'bg-green-500 hover:bg-green-600' : ($success === false) ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/80'}"
                disabled={$loading}>

            {#if $loading}
                <span class="flex items-center gap-1">
                    Sending<span class="animate-dot">.</span><span class="animate-dot delay-200">.</span><span class="animate-dot delay-400">.</span>
                </span>
            {:else if $success === true}
                <svg class="w-5 h-5" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                Success!
            {:else if $success === false}
                <svg class="w-5 h-5" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Failed!
            {:else}
                Send Message
            {/if}
        </button>

    </form>
</div>

<style>
    @keyframes dotAnimation {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    .animate-dot {
        animation: dotAnimation 1.5s infinite;
    }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }
</style>
