// Membaca parameter URL
const params = new URLSearchParams(window.location.search);

// Ambil nilai id
const projectId = Number(params.get("id"));

// Cari project berdasarkan id
const project = projects.find(item => item.id === projectId);

if (!project) {
    document.body.innerHTML = `
        <h1 style="text-align:center; margin-top:100px;">
            Project Not Found
        </h1>
    `;
    throw new Error("Project not found");
}

document.getElementById("project-title").textContent = project.title;

document.getElementById("project-image").src = project.image;

document.getElementById("project-description").textContent = project.description;

document.getElementById("project-info").innerHTML = `
<p><strong>Project:</strong> ${project.project}</p>
<p><strong>Company:</strong> ${project.company}</p>
<p><strong>Role:</strong> ${project.role}</p>
<p><strong>Location:</strong> ${project.location}</p>
<p><strong>Duration:</strong> ${project.duration}</p>
`;

const responsibilityList = document.getElementById("project-responsibilities");

project.responsibilities.forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    responsibilityList.appendChild(li);

});

const gallery = document.getElementById("gallery");

project.gallery.forEach(image => {

    const img = document.createElement("img");

    img.src = image;

    img.alt = project.title;

    gallery.appendChild(img);

});
