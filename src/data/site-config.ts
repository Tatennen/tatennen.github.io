export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Blog de Ciberseguridad',
    //subtitle: 'Concientizando sobre ciberseguridad, una persona a la vez.',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/hero.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Mi Github',
            href: 'https://github.com/Tatennen'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerca de',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jose-ramirez-cortes/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Aprende hoy, Protege mañana',
    text: "José Ramírez Cortés, profesional en ciberseguridad con formación en normativas de seguridad (ISO 27001) y hacking ético. Me especializo en auditorías de seguridad, creación de políticas de protección de datos y aplicación de estándares internacionales. Creo en la importancia de la formación y concientización para prevenir amenazas y fortalecer la seguridad desde el factor humano. Mi objetivo es contribuir a un entorno digital más seguro a través de soluciones prácticas y educación. 📂 Consulta mis proyectos en <a href=https://github.com/Tatennen>GitHub</a> .",
        image: {
            src: '/hero.jpg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
