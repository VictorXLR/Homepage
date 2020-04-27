module.exports = {
    title: "Victor Popoola",
    description: "a static site {for, by, about} me",
    dest: 'pages',

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