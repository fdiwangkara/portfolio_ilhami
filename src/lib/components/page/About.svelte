<script>
    import { writable } from "svelte/store";
    import CardSelection from "$lib/components/CardSelection.svelte";

    let selectedFilter = writable("language");
</script>

<div class="mt-[200px] space-y-[50px]">
    <div>
        <p class="text-4xl font-primary font-semibold text-word">Who?...</p>
        <p class="mt-2 text-justify text-sm text-word2 leading-[24px]">
            A vocational high school student with a strong passion for
            <span class="text-word hover:text-primary transition-colors duration-300">technology</span> and
            <span class="text-word hover:text-primary transition-colors duration-300">software development.</span>
            As an enthusiastic and dedicated learner, I believe that commitment to quality and the ability to
            <span class="text-word hover:text-primary transition-colors duration-300">adapt</span> quickly are essential for thriving in a dynamic work environment.

            Currently honing my skills as a <span class="text-word hover:text-primary transition-colors duration-300">junior backend developer</span>, I am eager to contribute
            to innovative projects and expand my knowledge in the field. In my spare time, I enjoy playing
            video games and reading manhwas, which help me unwind and stay creative.

            I am always looking for opportunities to grow both personally and
            <span class="text-word hover:text-primary transition-colors duration-300">professionally</span>.
        </p>
    </div>

    <div>
        <div class="relative inline-block">
            <p class="text-2xl z-10 font-primary font-semibold text-word relative drop-shadow-lg">
                My Skills
            </p>
            <div class="w-[100px] h-4 bg-primary absolute -bottom-1 left-2"></div>
        </div>

        <div class="mt-[20px]">
            <CardSelection {selectedFilter} />
        </div>
        <div class="mt-[10px] font-primary font-normal text-word2 text-sm flex justify-center mb-10">
            <p>swipe to <span class="text-word">choose</span> card and click to <span class="text-word">reveal</span></p>
        </div>
    </div>
</div>

