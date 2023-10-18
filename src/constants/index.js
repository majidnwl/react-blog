export const NAV_LINKS = [
    { label: 'Home', link: '/' },
    {
        label: 'Courses', link: '/courses', children: [
            { label: 'Course 1', link: '/blog' },
            { label: 'Course 2', link: '/blog' },
            { label: 'Course 3', link: '/blog' },
        ]
    },
    { label: 'Blog', link: '/blog' },
    { label: 'About', link: '/about' },
    { label: 'Contact Us', link: '/contact-us' },
];

export const FOOTER_LINKS = [
    {
        title: 'Links', menu: [
            { label: 'Home', link: 'home' },
            { label: 'About Us', link: 'about' },
            { label: 'Pricing', link: 'pricing' },
            { label: 'Courses', link: 'courses' },
            { label: 'Contact Us', link: 'contact-us' },
            { label: 'Blog', link: 'blog' },
        ]
    },
    {
        title: 'Legal', menu: [
            { label: 'Legal', link: 'legal' },
            { label: 'Tearms of Use', link: 'about' },
            { label: 'Tearm & Condition', link: 'pricing' },
            { label: 'Payment Method', link: 'courses' },
            { label: 'Privacy Policy', link: 'contact-us' },
            { label: 'Terms', link: 'blog' },
        ]
    }
]