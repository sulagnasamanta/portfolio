import { createWebHistory, createRouter } from 'vue-router';
import PortfolioHome from '@/views/PortfolioHome.vue';
import PortfolioAbout from '@/views/PortfolioAbout.vue';
import MyProjects from '@/views/MyProjects.vue';
import MySkills from '@/views/MySkills.vue';

const routes = [
	{
		path: '/',
		name: 'PortfolioHome',
		component: PortfolioHome,
	},
  {
		path: '/about',
		name: 'PortfolioAbout',
		component: PortfolioAbout,
	},
  {
		path: '/myProjects',
		name: 'MyProjects',
		component: MyProjects,
	},
	{
		path: '/skills',
		name: 'MySkills',
		component: MySkills,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;