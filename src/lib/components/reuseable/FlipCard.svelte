<script>
    export let isRevealed = false;
    export let content = { image: "", title: "", category: "" };

    const validCategories = ["Advance", "Intermediate", "Beginner"];
    let categoryClass = "category-beginner";

    if (validCategories.includes(content.category)) {
        categoryClass = `category-${content.category.toLowerCase()}`;
    }
</script>

<div class="flip-card">
    <div class="flip-card-inner {isRevealed ? 'flipped' : ''}">
        <div class="flip-card-front">
            <div class="inner-border"></div>
            <img src="/assets/icons/logo.svg" alt="Logo" class="logo" />
        </div>

        <div class="flip-card-back bg-gray-200 text-black transform rotate-y-180 flex flex-col items-center justify-center rounded-lg">
            <div class="inner-border absolute w-[180px] h-[280px] border-2 border-[#97BC62] rounded-md pointer-events-none"></div>

            <div class="flex flex-col items-center">
                <img src="{content.image}" alt="Card Image" class="w-20 h-20 object-contain" />
                <h2 class="text-lg mt-4 font-primary font-bold text-page">{content.title}</h2>
                <span class="text-xs font-primary font-normal uppercase {categoryClass}">{content.category}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .flip-card {
        width: 200px;
        height: 300px;
        perspective: 1000px;
    }

    .flip-card-inner {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .flip-card-inner.flipped {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        border-radius: 10px;
        backface-visibility: hidden;
        flex-direction: column;
        padding: 15px;
    }

    .flip-card-front {
        background: #2C4542;
        color: white;
        transform: rotateY(0deg);
    }

    .flip-card-front .logo {
        width: 60px;
        height: 60px;
        z-index: 1;
    }

    .flip-card-back {
        background: #E2E8F0;
        color: black;
        transform: rotateY(180deg);
    }

    .inner-border {
        position: absolute;
        width: 180px;
        height: 280px;
        border: 2px solid #97BC62;
        border-radius: 8px;
        pointer-events: none;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .card-image {
        width: 80px;
        height: 80px;
        object-fit: contain;
    }

    .card-title {
        font-size: 18px;
        font-weight: bold;
        color: #2C4542;
    }

    .card-category {
        font-size: 12px;
        font-weight: normal;
        padding: 5px 10px;
        border-radius: 5px;
        text-transform: uppercase;
    }

    .category-advance {
        color: #ff4d4d;
    }

    .category-intermediate {
        color: #ffa500;
    }

    .category-beginner {
        color: #4caf50;
    }

</style>
