<script>
    export let projects = [];
    let imageLoaded = {};
</script>

<div class="space-y-20">
    {#each projects as project, i}
        <div class="flex flex-col md:flex-row items-center gap-10 relative"
             class:md:flex-row-reverse={i % 2 === 1}>

            <div class="relative w-full md:w-1/2 h-[200px] rounded-lg overflow-hidden">
                {#if !imageLoaded[i]}
                    <div class="absolute inset-0 bg-gray-300 animate-pulse"></div>
                {/if}
                <img src="{project.image}" alt="{project.title}" class="w-full h-full object-cover"
                     on:load={() => imageLoaded[i] = true} />
            </div>

            <div class="flex flex-col gap-3 relative w-full"
                 class:md:-translate-x-[60px]={i % 2 === 0} class:md:translate-x-[60px]={i % 2 === 1}>

                <div class="flex flex-col"
                     class:text-left={i % 2 === 1} class:text-right={i % 2 === 0}>
                    <p class="text-sm font-primary font-thin text-primary">Featured Project</p>
                    <p class="text-lg font-primary font-semibold text-word">{project.title}</p>
                </div>

                <div class="relative bg-[#2C4542] p-6 text-word2 text-sm font-primary text-justify font-normal rounded-lg w-full">
                    {project.description}
                </div>

                <div class="flex gap-2 flex-wrap"
                     class:justify-start={i % 2 === 1} class:justify-end={i % 2 === 0}>
                    {#each project.tech as tech}
                        <span class="px-3 py-1 rounded-full bg-primary/25 text-sm text-primary font-primary font-normal">
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>

        </div>
    {/each}
</div>
