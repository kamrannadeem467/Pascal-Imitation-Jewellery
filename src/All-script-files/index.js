// List of lists with items and their URLs
const listsData = [
    {
        title: "OUR INFORMATION",
        items: [
            { text: "Aptech Learning Institude, Area: MetroStargate , line: 132423453224", url: "../Sll HTML files/contact.html" },
            { text: "(+00) 123-456-7890", url: "../All HTML files/contact.html" },
            { text: "kamrannadeem113@gmail.com", url: "../All HTML files/contact.html" }
        ]
    },
    {
        title: "QUICK LINKS",
        items: [
            { text: "Contact Us", url: "../All HTML files/contact.html" },
            { text: "FAQ's", url: "../All HTML files/contact.html" },
            { text: "About Us", url: "../All HTML files/about.html" },
            { text: "Feedback", url: "../All HTML files/feedback.html" }
        ]
    },
    {
        title: "INFORMATION",
        items: [
            { text: "Terms & Policy", url: "../All HTML files/about.html" },
            { text: "History", url: "../All HTML files/about.html" },
            { text: "Services", url: "../All HTML files/about.html" }
        ]
    },
    {
        title: "SERVICES",
        items: [
            { text: "Order Status", url: "../All HTML files/about.html" },
            { text: "Policy For Sellers", url: "../All HTML files/about.html" },
            { text: "Policy For Buyers", url: "../All HTML files/about.html" },
            { text: "Wholesale Policy", url: "../All HTML files/about.html" }
        ]
    }
];

const container = document.getElementById("Container");
listsData.forEach(listData => {
    let div2 = document.createElement('div');
    div2.classList.add('footer-content');
    container.appendChild(div2);
    const ul = document.createElement("ul");
    div2.appendChild(ul)
    const title = document.createElement("h2");
    title.textContent = listData.title;
    ul.appendChild(title);
    listData.items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item.text;
        a.href = item.url;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
    });
});