<script>
    import JourneyLists from "$lib/components/reuseable/JourneyLists.svelte";

    let journeyData = [
        {
            startYear: "2019",
            endYear: "2022",
            title: "Vocational High School",
            description: "Studied software development with a focus on backend technologies. Learned languages like JavaScript, PHP, and Python while working on various projects."
        },
        {
            startYear: "2022",
            endYear: "2025",
            title: "Freelance Developer",
            description: "Started working as a freelance backend developer, handling projects involving REST APIs, database management, and cloud services."
        },
        {
            startYear: "2025",
            endYear: "Present",
            title: "Full-Stack Developer",
            description: "Currently working on building scalable web applications with a strong focus on backend and cloud-based solutions."
        }
    ];
    let experiencesData = [
        {
            startYear: "2019",
            endYear: "2022",
            title: "Vocational High School",
            description: "Studied software development with a focus on backend technologies. Learned languages like JavaScript, PHP, and Python while working on various projects."
        },
        {
            startYear: "2022",
            endYear: "2025",
            title: "Freelance Developer",
            description: "Started working as a freelance backend developer, handling projects involving REST APIs, database management, and cloud services."
        },
        {
            startYear: "2025",
            endYear: "Present",
            title: "Full-Stack Developer",
            description: "Currently working on building scalable web applications with a strong focus on backend and cloud-based solutions."
        }
    ];
</script>

<div class="mt-[200px] space-y-[50px]">
    <div>
        <p class="text-4xl font-primary font-semibold text-word text-left">Studies</p>
    </div>
    <JourneyLists items={journeyData} />
    <div>
        <p class="text-4xl font-primary font-semibold text-word text-left">Experiences</p>
    </div>
    <JourneyLists items={experiencesData} />
    <div class="mb-10"></div>
</div>
