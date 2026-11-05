import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Research',
  description: 'Exploring emerging careers in artificial intelligence',
  base: '/ai-career-research/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AI Roles', link: '/roles/' },
      { text: 'Jobs by Level', link: '/job-levels' },
      { text: 'Student Review', link: '/student-review' },
      { text: 'Skills', link: '/skills' },
      { text: 'Trends', link: '/trends' },
      { text: 'Sources', link: '/sources' }
    ],
    sidebar: [
      { text: 'Career Research', items: [
        { text: 'Overview', link: '/' },
        { text: 'Emerging AI Roles', link: '/roles/' },
        { text: 'Forward Deployed Engineer', link: '/roles/forward-deployed-engineer' },
        { text: 'Role Comparison', link: '/comparison' },
        { text: 'Internships & Jobs by Level', link: '/job-levels' },
        { text: 'NJIT Student Review', link: '/student-review' },
        { text: 'Skills & Tools', link: '/skills' },
        { text: 'Industry Trends', link: '/trends' },
        { text: 'Research Sources', link: '/sources' }
      ]}
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/mishkhurshid/ai-career-research' }],
    footer: { message: 'An evolving research project on AI careers.' },
    search: { provider: 'local' }
  }
})
