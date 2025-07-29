document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
    
    // Load articles dynamically
    fetchArticles();
});

function fetchArticles() {
    // In a real implementation, you might fetch this from a JSON file
    // For GitHub Pages, we'll simulate it with a list of known articles
    
    const articles = [
        { 
            file: 'articles/article1.html',
            title: 'Cat elected mayor in small town 🐱🏛️', 
            date: '2023-11-15',
            preview: 'Local feline wins by landslide 当地猫以压倒性优势获胜'
        },
        { 
            file: 'articles/article2.html',
            title: 'Scientists discover pizza is vegetable 🍕🥦', 
            date: '2023-11-14',
            preview: 'Tomato sauce counts as serving 番茄酱算作每日蔬果摄入'
        },
        { 
            file: 'articles/article3.html',
            title: 'Moon made of cheese, confirms NASA 🧀🌕', 
            date: '2023-11-12',
            preview: 'Swiss or cheddar? Debate continues 是瑞士奶酪还是切达奶酪? 争论继续'
        }
    ];
    
    const articleList = document.getElementById('article-list');
    articleList.innerHTML = '';
    
    articles.forEach(article => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = article.file;
        a.innerHTML = `
            <strong>${article.title}</strong><br>
            <small>${article.date} • ${article.preview}</small>
        `;
        li.appendChild(a);
        articleList.appendChild(li);
    });
}
