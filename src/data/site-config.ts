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
    title: 'Tatennen',
    subtitle: 'Ciberseguridad',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
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
        title: 'Protegiendo el Futuro Digital: Blog de Ciberseguridad y Concientización',
        text: `
        <p style="text-align: justify;">
            <strong>Sobre mí</strong><br>
            Soy José Ramírez Cortés, profesional en ciberseguridad con formación en normativas de seguridad (ISO 27001) y técnicas avanzadas de hacking ético. Me especializo en:
        </p>
        <ul style="text-align: justify;">
            <li>Realización de auditorías de seguridad para identificar vulnerabilidades críticas.</li>
            <li>Diseño e implementación de políticas de protección de datos adaptadas a las necesidades organizacionales.</li>
            <li>Aplicación de normativas y estándares internacionales para garantizar la seguridad de los sistemas.</li>
        </ul>
        <p style="text-align: justify;">
            Además de mi enfoque técnico, considero fundamental la formación y la concientización sobre ciberseguridad. Creo que educar a las personas es clave para prevenir amenazas y fortalecer la seguridad desde el factor humano. Por ello, comparto conocimientos, guías prácticas y estrategias para fomentar una cultura de seguridad en las organizaciones.
        </p>
        <p style="text-align: justify;">
            Mi objetivo es contribuir al desarrollo de un entorno digital más seguro y resiliente mediante soluciones prácticas, educación y mejores prácticas del sector. 📂 Consulta mis proyectos y contribuciones en <a href="https://github.com/Tatennen">GitHub</a>.
        </p>
    `,
    
        image: {
            src: '/sec.jpg',
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
