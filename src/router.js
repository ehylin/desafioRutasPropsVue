import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Contacto from './components/Contacto'
import Post from './components/Post'
import Articulo from './components/Articulo'
import NotFound from './components/NotFound'
import Administrador from './components/Administrador.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        {
            path: '/administrador',
            name: 'Administrador',
            component: Administrador,
            children: [
                {
                    path: '/simple',
                    name: 'AdministradorSimple',
                    component: () => import('./components/Simple.vue'),
                },
                {
                    path: '/avanzado',
                    name: 'AdministradorAvanzado',
                    component: () => import('./components/Avanzado.vue'),
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})