import Vue from 'vue';
import Router from 'vue-router';

    
import _15416718951259d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1541671895125f7fc7554d202a317883db2ae067316d3 from '@/pages/detail/_id.vue';
    

    
import _1541671895125d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _154167189512567830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15416718951259d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/detail/:id",
        "component": _1541671895125f7fc7554d202a317883db2ae067316d3,
        "meta": {},
        "name": "detailId"
    },
    {
        "path": "/",
        "component": _154167189512567830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/error",
        "component": _1541671895125d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    return router;
}
