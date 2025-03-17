<script>

    import ProjectLists from "$lib/components/reuseable/ProjectLists.svelte";

    let projects = [
        {
            image: "https://source.unsplash.com/600x400/?technology",
            title: "E-Commerce Platform",
            description: "An online shopping platform for clothing and accessories. An online shopping platform for clothing and accessories. An online shopping platform for clothing and accessories.",
            tech: ["React", "Tailwind", "Node.js", "Sigma", "Dick"]
        },
        {
            image: "https://source.unsplash.com/600x400/?coding",
            title: "Portfolio Website",
            description: "An online shopping platform for clothing and accessories. An online shopping platform for clothing and accessories. An online shopping platform for clothing and accessories.",
            tech: ["Svelte", "Tailwind", "Vercel"]
        },
        {
            image: "https://source.unsplash.com/600x400/?dashboard",
            title: "Admin Dashboard",
            description: "An online shopping platform for clothing and accessories. An online shopping platform for clothing and accessories. An online shopping platform for clothing and accessories.",
            tech: ["Vue.js", "Laravel", "MySQL"]
        }
    ];
</script>

<div class="mt-[200px] space-y-[50px]">
    <div>
        <p class="text-4xl font-primary font-semibold text-word text-left">My Creation</p>
    </div>

    <ProjectLists {projects} />

    <div class="mb-10"></div>
</div>
