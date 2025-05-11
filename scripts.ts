
import { Script } from "@/types/script";

export const sampleScripts: Script[] = [
  {
    id: "1",
    title: "Dark Mode Toggle",
    description: "A simple JavaScript dark mode toggle for any website. Easy to implement and customize.",
    author: "DevMaster",
    content: `// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.createElement('button');
  toggleBtn.innerText = '🌙';
  toggleBtn.className = 'dark-mode-toggle';
  document.body.appendChild(toggleBtn);
  
  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleBtn.innerText = '☀️';
  }
  
  // Toggle theme
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    toggleBtn.innerText = theme === 'dark' ? '☀️' : '🌙';
  });
  
  // Add these styles to your CSS
  const style = document.createElement('style');
  style.textContent = \`
    .dark-theme {
      background-color: #121212;
      color: #e0e0e0;
    }
    .dark-mode-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      border: none;
      background: none;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 1000;
    }
  \`;
  document.head.appendChild(style);
});`,
    language: "javascript",
    tags: ["Dark Mode", "UI", "Toggle", "Theme"],
    dateAdded: new Date("2023-04-15"),
    likes: 127,
    downloads: 489
  },
  {
    id: "2",
    title: "Responsive Navigation Menu",
    description: "Create a fully responsive navigation menu with hamburger toggle for mobile devices.",
    author: "WebWizard",
    content: `// Responsive Navigation with Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.querySelector('.nav-container');
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  navContainer.appendChild(hamburger);

  const nav = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('nav-active');
  });
  
  // Add these styles to your CSS
  const style = document.createElement('style');
  style.textContent = \`
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
    }
    
    .nav-links li {
      margin-left: 2rem;
    }
    
    .hamburger {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-around;
      height: 24px;
      z-index: 10;
    }
    
    .hamburger span {
      width: 30px;
      height: 3px;
      background-color: #333;
      transition: all 0.3s ease;
    }
    
    .hamburger.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    
    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }
      
      .nav-links {
        position: absolute;
        right: 0;
        top: 0;
        height: 100vh;
        background: white;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.3s ease-in;
        box-shadow: -5px 0px 10px rgba(0,0,0,0.1);
      }
      
      .nav-active {
        transform: translateX(0%);
      }
    }
  \`;
  document.head.appendChild(style);
});`,
    language: "javascript",
    tags: ["Navigation", "Responsive", "Mobile", "Menu"],
    dateAdded: new Date("2023-05-28"),
    likes: 98,
    downloads: 356
  },
  {
    id: "3",
    title: "Smooth Scrolling Animation",
    description: "Add smooth scrolling to your page anchors with this simple script.",
    author: "AnimationPro",
    content: `// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate how far to scroll
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        // Smooth scroll to target
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    });
  });
});`,
    language: "javascript",
    tags: ["Animation", "Scrolling", "UX", "Navigation"],
    dateAdded: new Date("2023-06-05"),
    likes: 145,
    downloads: 412
  },
  {
    id: "4",
    title: "Image Lazy Loader",
    description: "Improve page load times with this image lazy loading script using Intersection Observer API.",
    author: "PerformancePro",
    content: `// Image Lazy Loading with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('[data-src]');
  
  // Create a new Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the image is in view
      if (entry.isIntersecting) {
        const img = entry.target;
        // Replace the data-src with src
        img.src = img.dataset.src;
        // Remove the data-src attribute
        img.removeAttribute('data-src');
        // Stop observing this image
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '0px 0px 200px 0px' // Start loading when within 200px of viewport
  });
  
  // Start observing each lazy image
  lazyImages.forEach(img => {
    observer.observe(img);
  });
  
  // Add placeholder styles
  const style = document.createElement('style');
  style.textContent = \`
    [data-src] {
      opacity: 0;
      transition: opacity 0.3s ease-in;
    }
    
    img {
      opacity: 1;
    }
  \`;
  document.head.appendChild(style);
  
  // Usage example:
  // <img data-src="image.jpg" alt="My Image" width="300" height="200">
});`,
    language: "javascript",
    tags: ["Performance", "Images", "Lazy Loading", "Optimization"],
    dateAdded: new Date("2023-07-09"),
    likes: 203,
    downloads: 567
  },
  {
    id: "5",
    title: "GitHub API Data Fetcher",
    description: "Easily fetch and display data from the GitHub API with this script.",
    author: "GitHubFan",
    content: `// GitHub API Data Fetcher
class GitHubFetcher {
  constructor(username) {
    this.username = username;
    this.apiBase = 'https://api.github.com';
  }

  async getUser() {
    try {
      const response = await fetch(\`\${this.apiBase}/users/\${this.username}\`);
      if (!response.ok) throw new Error('Failed to fetch user data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  }

  async getRepositories() {
    try {
      const response = await fetch(\`\${this.apiBase}/users/\${this.username}/repos?sort=updated\`);
      if (!response.ok) throw new Error('Failed to fetch repositories');
      return await response.json();
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }

  async renderUserProfile(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const user = await this.getUser();
    if (!user) {
      container.innerHTML = '<p>Failed to load profile</p>';
      return;
    }

    const repositories = await this.getRepositories();

    const profileHTML = \`
      <div class="gh-profile">
        <div class="gh-profile-header">
          <img src="\${user.avatar_url}" alt="\${user.name || user.login}" class="gh-avatar">
          <div class="gh-profile-info">
            <h2>\${user.name || user.login}</h2>
            <p>\${user.bio || ''}</p>
            <p><a href="\${user.html_url}" target="_blank">@\${user.login}</a></p>
            <div class="gh-stats">
              <span>\${user.followers} Followers</span>
              <span>\${user.following} Following</span>
              <span>\${user.public_repos} Repositories</span>
            </div>
          </div>
        </div>
        
        <div class="gh-repositories">
          <h3>Recent Repositories</h3>
          <ul>
            \${repositories.slice(0, 5).map(repo => \`
              <li>
                <a href="\${repo.html_url}" target="_blank">\${repo.name}</a>
                <p>\${repo.description || 'No description'}</p>
                <div class="gh-repo-stats">
                  <span>⭐ \${repo.stargazers_count}</span>
                  <span>🔄 \${repo.forks_count}</span>
                  <span>\${repo.language || ''}</span>
                </div>
              </li>
            \`).join('')}
          </ul>
        </div>
      </div>
    \`;
    
    container.innerHTML = profileHTML;
    
    // Add GitHub profile styles
    const style = document.createElement('style');
    style.textContent = \`
      .gh-profile {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      
      .gh-profile-header {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
      }
      
      .gh-avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      
      .gh-profile-info h2 {
        margin-top: 0;
        margin-bottom: 8px;
      }
      
      .gh-stats {
        display: flex;
        gap: 15px;
        margin-top: 10px;
      }
      
      .gh-repositories h3 {
        border-bottom: 1px solid #e1e4e8;
        padding-bottom: 8px;
      }
      
      .gh-repositories ul {
        list-style: none;
        padding: 0;
      }
      
      .gh-repositories li {
        padding: 15px 0;
        border-bottom: 1px solid #e1e4e8;
      }
      
      .gh-repositories a {
        color: #0366d6;
        font-weight: 600;
        text-decoration: none;
      }
      
      .gh-repositories a:hover {
        text-decoration: underline;
      }
      
      .gh-repo-stats {
        display: flex;
        gap: 15px;
        margin-top: 8px;
        font-size: 0.85em;
        color: #586069;
      }
    \`;
    document.head.appendChild(style);
  }
}

// Usage:
// const gitHubFetcher = new GitHubFetcher('octocat');
// gitHubFetcher.renderUserProfile('github-profile');
`,
    language: "javascript",
    tags: ["GitHub", "API", "Profile", "Integration"],
    dateAdded: new Date("2023-08-12"),
    likes: 167,
    downloads: 382
  }
];

export const getScriptById = (id: string): Script | undefined => {
  return sampleScripts.find(script => script.id === id);
};

export const searchScripts = (query: string): Script[] => {
  const lowercaseQuery = query.toLowerCase();
  return sampleScripts.filter(script => 
    script.title.toLowerCase().includes(lowercaseQuery) || 
    script.description.toLowerCase().includes(lowercaseQuery) ||
    script.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getTrendingScripts = (): Script[] => {
  // Sort by popularity (likes + downloads)
  return [...sampleScripts].sort((a, b) => 
    (b.likes + b.downloads) - (a.likes + a.downloads)
  );
};

export const getRecentScripts = (): Script[] => {
  // Sort by date added (newest first)
  return [...sampleScripts].sort((a, b) => 
    b.dateAdded.getTime() - a.dateAdded.getTime()
  );
};
