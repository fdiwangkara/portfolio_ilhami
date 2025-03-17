<script>
    export let items = [];
    let hoveredIndex = null;
</script>

<div class="space-y-5 -translate-x-[15px]">
    {#each items as item, i}
        <div class="flex items-start gap-6 group p-4 rounded-lg transition-all
                    hover:bg-word/5 hover:shadow-md"
             on:mouseenter={() => hoveredIndex = i}
             on:mouseleave={() => hoveredIndex = null}>

            <div class="flex items-center text-sm font-primary font-normal transition-all"
                 class:opacity-50={hoveredIndex !== null && hoveredIndex !== i}
                 class:text-word={hoveredIndex === i}
                 class:text-word2={hoveredIndex === null || hoveredIndex !== i}>
                <span>{item.startYear}</span>
                {#if item.endYear}
                    <div class="w-[30px] h-[1px] bg-word2 mx-2"></div>
                    <span>{item.endYear}</span>
                {/if}
            </div>
            <div class="flex-1 text-justify transition-all"
                 class:opacity-50={hoveredIndex !== null && hoveredIndex !== i}>
                <p class="font-primary font-semibold text-lg transition-all"
                   class:text-primary={hoveredIndex === i}
                   class:text-word={hoveredIndex === null || hoveredIndex !== i}>
                    {item.title}
                </p>
                <p class="font-primary font-normal text-sm leading-[24px] transition-all"
                   class:text-word={hoveredIndex === i}
                   class:text-word2={hoveredIndex === null || hoveredIndex !== i}>
                    {item.description}
                </p>
            </div>
        </div>
    {/each}
</div>
