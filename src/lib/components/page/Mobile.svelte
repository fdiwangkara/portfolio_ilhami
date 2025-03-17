<script>
    import StickyTitle from "$lib/components/reuseable/StickyTitle.svelte";
    import CardSelection from "$lib/components/CardSelection.svelte";
    import {writable} from "svelte/store";
    import ProjectsFixed from "$lib/components/page/ProjectsFixed.svelte";
    import JourneyFixed from "$lib/components/page/JourneyFixed.svelte";
    import TextForm from "$lib/components/reuseable/TextForm.svelte";
    import TextFormFixed from "$lib/components/reuseable/TextFormFixed.svelte";

    let selectedFilter = writable("language");
</script>

<div class="bg-page min-h-screen flex flex-col px-5 pt-[50px] relative" style="z-index: 1;">
    <p class="text-3xl font-primary font-semibold text-word leading-[28px] relative z-20">
        Hello, <br>
        I'm <span class="font-normal italic text-primary">Ilhami Rizqy</span> <br>
        A <span class="font-bold italic text-word">Back End Dev</span> <br>
        based in <span class="font-bold text-primary">Jepara</span>.
    </p>

    <p class="text-base font-primary text-word mt-2 relative z-20">
        <span class="opacity-50">welcome to my personal website.</span>
        <span class="opacity-100 text-word"> enjoy!</span>
    </p>

    <div class="flex gap-5 mt-4 text-word text-xl relative z-1">
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

    <div class="mt-20">
        <StickyTitle title="About" data-title="About"/>
    </div>

    <div class="mt-2" style="z-index: 1;">
        <p class="mt-2 text-justify text-sm text-word2 leading-[24px]">
            A vocational high school student with a strong passion for
            <span class="text-word hover:text-primary transition-colors duration-300">technology</span> and
            <span class="text-word hover:text-primary transition-colors duration-300">software development.</span>
            As an enthusiastic and dedicated learner, I believe that commitment to quality and the ability to
            <span class="text-word hover:text-primary transition-colors duration-300">adapt</span> quickly are essential
            for thriving in a dynamic work environment.

            Currently honing my skills as a <span class="text-word hover:text-primary transition-colors duration-300">junior backend developer</span>,
            I am eager to contribute
            to innovative projects and expand my knowledge in the field. In my spare time, I enjoy playing
            video games and reading manhwas, which help me unwind and stay creative.

            I am always looking for opportunities to grow both personally and
            <span class="text-word hover:text-primary transition-colors duration-300">professionally</span>.
        </p>
    </div>

    <div class="mt-10 z-10">
        <div class="relative inline-block">
            <p class="text-base z-10 font-primary font-semibold text-word relative drop-shadow-lg">
                My Skills
            </p>
            <div class="w-[75px] h-4 bg-primary absolute -bottom-1 left-2"></div>
        </div>

        <div class="mt-[20px]">
            <CardSelection {selectedFilter}/>
        </div>
        <div class="mt-[10px] font-primary font-normal text-word2 text-sm flex justify-center mb-10">
            <p>swipe to <span class="text-word">choose</span> card and click to <span class="text-word">reveal</span>
            </p>
        </div>
    </div>

    <div class="mt-20">
        <StickyTitle title="Journey" data-title="Journey"/>
    </div>

    <div class="mt-10">
        <JourneyFixed />
    </div>

    <div class="mt-20">
        <StickyTitle title="Projects" data-title="Projects"/>
    </div>

    <div class="mt-10">
        <ProjectsFixed />
    </div>

    <h2 class="text-center font-primary text-2xl mt-[150px] text-word font-semibold">
        Get in Touch
    </h2>

    <div class="mt-10 mb-20">
        <TextFormFixed formspreeUrl="https://formspree.io/f/xblglrrb" />
    </div>
</div>
