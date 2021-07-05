module.exports = {
    title: "Victor Popoola",
    description: "a static site {for, by, about} me",
    dest: 'pages',
    head: [
        ['script', {
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': { "token": "08d5a89622c241b4bcc03fb27f651f3f" }
        }]
    ],
    themeConfig: {
        smoothScroll: true,
        search: false,
        searchPlaceholder: 'Search...',
        nav: [
            { text: "Email", link: "mailto:site@victorxlr.me" },
            { text: 'Github', link: 'https://github.com/victorxlr' },
            { text: 'About Me', link: '/about#social-media' }
        ]
    }

}