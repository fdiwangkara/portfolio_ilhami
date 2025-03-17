<script>
    import { writable, derived } from "svelte/store";
    import FlipCard from "$lib/components/reuseable/FlipCard.svelte";

    let allCards = {
        "Tech Stack": [
            { image: "/assets/icons/logo.svg", title: "React.js", category: "Advance" },
            { image: "/assets/icons/logo.svg", title: "Vue.js", category: "Intermediate" },
            { image: "/assets/icons/logo.svg", title: "Svelte", category: "Beginner" },
            { image: "/assets/icons/logo.svg", title: "Node.js", category: "Advance" },
            { image: "/assets/icons/logo.svg", title: "Ruby on Rails", category: "Intermediate" },
            { image: "/assets/icons/logo.svg", title: "Laravel", category: "Beginner" },
            { image: "/assets/icons/logo.svg", title: "AWS", category: "Intermediate" },
            { image: "/assets/icons/logo.svg", title: "Tailwind CSS", category: "Advance" }
        ],
        "Language": [
            { image: "/assets/icons/logo.svg", title: "JavaScript", category: "Advance" },
            { image: "/assets/icons/logo.svg", title: "TypeScript", category: "Intermediate" },
            { image: "/assets/icons/logo.svg", title: "Python", category: "Intermediate" },
            { image: "/assets/icons/logo.svg", title: "Go", category: "Beginner" },
            { image: "/assets/icons/logo.svg", title: "Ruby", category: "Intermediate" },
            { image: "/assets/icons/logo.svg", title: "PHP", category: "Beginner" }
        ]
    };

    let filterOptions = Object.keys(allCards);
    let selectedFilter = writable(filterOptions[0]);

    let cards = derived(selectedFilter, $selectedFilter => allCards[$selectedFilter]);

    let currentIndex = writable(0);
    let isFlipped = writable(false);

    const leftIndex = derived([currentIndex, cards], ([$currentIndex, $cards]) => ($currentIndex - 1 + $cards.length) % $cards.length);
    const rightIndex = derived([currentIndex, cards], ([$currentIndex, $cards]) => ($currentIndex + 1) % $cards.length);

    function nextCard() {
        isFlipped.set(false);
        currentIndex.update(n => (n + 1) % $cards.length);
    }

    function prevCard() {
        isFlipped.set(false);
        currentIndex.update(n => (n - 1 + $cards.length) % $cards.length);
    }

    function flipCard(index) {
        isFlipped.update(n => !n);
    }

    function handleSwipeStart(event) {
        let startX = event.touches ? event.touches[0].clientX : event.clientX;

        function handleMove(event) {
            let endX = event.touches ? event.touches[0].clientX : event.clientX;
            let diff = startX - endX;

            if (diff > 50) {
                nextCard();
                removeListeners();
            } else if (diff < -50) {
                prevCard();
                removeListeners();
            }
        }

        function removeListeners() {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", removeListeners);
            document.removeEventListener("touchmove", handleMove);
            document.removeEventListener("touchend", removeListeners);
        }

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", removeListeners);
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", removeListeners);
    }

    selectedFilter.subscribe(() => {
        currentIndex.set(0);
        isFlipped.set(false);
    });

</script>

<div class="flex space-x-2 justify-start mt-10">
    {#each filterOptions as filter}
        <button
                class="px-4 py-1 text-sm font-medium rounded-full border border-primary transition-colors duration-300"
                class:bg-primary={filter === $selectedFilter}
                class:text-page={filter === $selectedFilter}
                class:text-primary={filter !== $selectedFilter}
                on:click={() => selectedFilter.set(filter)}
        >
            {filter}
        </button>
    {/each}
</div>

<div class="relative flex justify-center items-center h-[350px] mt-2" on:mousedown={handleSwipeStart} on:touchstart={handleSwipeStart}>
    {#each $cards as card, i}
        <div
                class="absolute transition-all duration-500"
                class:left={$leftIndex === i}
                class:center={$currentIndex === i}
                class:right={$rightIndex === i}
                class:hidden={!(i === $leftIndex || i === $currentIndex || i === $rightIndex)}
                on:click={() => flipCard(i)}
        >
            <FlipCard content={card} isRevealed={$currentIndex === i && $isFlipped} />
        </div>
    {/each}
</div>

<style>
    .relative div {
        transition: transform 0.5s ease, opacity 0.5s ease, scale 0.5s ease;
    }

    .center {
        transform: translateX(0) scale(1);
        z-index: 3;
        opacity: 1;
    }

    .left {
        transform: translateX(-90px) scale(0.9) rotateY(15deg);
        z-index: 2;
        opacity: 0.7;
    }

    .right {
        transform: translateX(90px) scale(0.9) rotateY(-15deg);
        z-index: 2;
        opacity: 0.7;
    }

    .hidden {
        display: none;
    }
</style>
