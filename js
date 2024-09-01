function loadJobs() {
    // Check if the script is connected
    console.log("Load Jobs button clicked!");

    // Get the job list container
    const jobList = document.getElementById('job-list');

    // Sample job data
    const jobs = [
        { title: "Web Developer", description: "Build a responsive website." },
        { title: "Graphic Designer", description: "Create a logo and brand identity." },
        { title: "Content Writer", description: "Write blog posts on various topics." }
    ];

    // Clear any existing job listings
    jobList.innerHTML = '';

    // Iterate through the jobs array and display each job
    jobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job');
        jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
        jobList.appendChild(jobDiv);
    });
}
