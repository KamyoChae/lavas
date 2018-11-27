import Vue from 'vue';

import Skeleton from 'E:\\Workers\\lavas\\second_demo\\secdemo\\core\\Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
