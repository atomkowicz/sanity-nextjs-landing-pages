export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6023c0705f22ff16ed02155d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kcawgdw9',
                  apiId: 'dea30754-d5a4-476c-8e05-a3894a6fc3d0'
                },
                {
                  buildHookId: '6023c071ecc3f20a37f1dbdf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cw6ajkfr',
                  apiId: 'ddc6f394-3554-4c1e-abb0-9bd87809efad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/atomkowicz/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cw6ajkfr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
