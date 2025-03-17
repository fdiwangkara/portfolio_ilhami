<script>
    import TextForm from "$lib/components/reuseable/TextForm.svelte";
</script>

<div class="mt-[200px] flex flex-col items-center w-full">
    <div class="w-full max-w-lg">
        <p class="text-4xl font-primary font-semibold text-word text-center">Get in Touch!</p>
    </div>
    <div class="w-full max-w-lg mt-2">
        <p class="text-sm font-primary font-normal text-word2 text-center">let me know if you <span class="text-word">intrested</span> on working with me.</p>
    </div>

    <div class="flex justify-center w-full mt-[50px]">
        <div class="w-[300px]">
            <TextForm formspreeUrl="https://formspree.io/f/xblglrrb" />
        </div>
    </div>
</div>
