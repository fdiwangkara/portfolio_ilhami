<script>
    import { onMount } from "svelte";

    let x = 0;
    let y = 0;

    onMount(() => {
        const updatePosition = (e) => {
            x = e.clientX;
            y = e.clientY;
        };

        window.addEventListener("mousemove", updatePosition);

        return () => window.removeEventListener("mousemove", updatePosition);
    });
</script>

<style>
    .glow {
        position: fixed;
        width: 650px;
        height: 650px;
        background: radial-gradient(circle, rgba(44, 95, 45, 0.5) 0%, rgba(44, 95, 45, 0) 90%);
        border-radius: 50%;
        pointer-events: none;
        filter: blur(100px);
        transform: translate(-50%, -50%);
        transition: transform 0.05s linear;
        z-index: 0;
    }
</style>

<div class="glow" style="left: {x}px; top: {y}px;"></div>
