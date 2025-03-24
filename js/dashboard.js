// Portfolio items
const portfolioItems = [
    {
        title: "Rabia Elçilikleri",
        category: "İstanbul Beyoğlu",
        description: "İstanbul Beyoğlu'ndaki sokakları ve caddeleri detaylı bir şekilde gösteren harita..."
    },
    {
        title: "Necip Bey Haritaları",
        category: "Osmanlı Dönemi",
        description: "Osmanlı dönemine ait bu detaylı İstanbul haritası, şehrin tarihi dokusunu gözler önüne seriyor..."
    }
];

// Display Portfolio Items
function displayPortfolio() {
    const portfolioList = document.getElementById('portfolio-list');
    portfolioList.innerHTML = '';  // Clear the portfolio container
    portfolioItems.forEach((item, index) => {
        const portfolioBox = document.createElement('div');
        portfolioBox.classList.add('col-lg-4', 'col-sm-6');
        portfolioBox.innerHTML = `
            <div class="portfolio-box">
                <div class="project-category text-white-50">${item.category}</div>
                <div class="project-name">${item.title}</div>
                <p>${item.description}</p>
                <button class="btn btn-primary" onclick="showEditForm(${index})">Edit</button>
            </div>
        `;
        portfolioList.appendChild(portfolioBox);
    });
}

// Show Add Portfolio Form
function showAddForm() {
    document.getElementById('portfolio-form').style.display = 'block';
    document.getElementById('form-title').innerText = "Add Portfolio Item";
    document.getElementById('portfolio-title').value = '';
    document.getElementById('portfolio-category').value = '';
    document.getElementById('portfolio-description').value = '';
}

// Show Edit Portfolio Form
function showEditForm(index) {
    const item = portfolioItems[index];
    document.getElementById('portfolio-form').style.display = 'block';
    document.getElementById('form-title').innerText = "Edit Portfolio Item";
    document.getElementById('portfolio-title').value = item.title;
    document.getElementById('portfolio-category').value = item.category;
    document.getElementById('portfolio-description').value = item.description;

    // Update the form submit handler to edit the item
    document.getElementById('portfolioForm').onsubmit = (event) => handleFormSubmit(event, index);
}

// Handle Form Submission (Add or Edit Portfolio Item)
function handleFormSubmit(event, index = null) {
    event.preventDefault();
    
    const title = document.getElementById('portfolio-title').value;
    const category = document.getElementById('portfolio-category').value;
    const description = document.getElementById('portfolio-description').value;

    if (index !== null) {
        // Edit existing item
        portfolioItems[index] = { title, category, description };
    } else {
        // Add new item
        portfolioItems.push({ title, category, description });
    }

    displayPortfolio();
    cancelForm();
}

// Cancel Form
function cancelForm() {
    document.getElementById('portfolio-form').style.display = 'none';
}

// Initial display
window.onload = () => {
    displayPortfolio();
    showSection('portfolio');  // Default section to show
};

// Show specific section
function showSection(section) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}