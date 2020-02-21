import Vue from 'vue';
import Loading from './loading';
import PoweredBy from './powered-by/index';
import ImagWrapper from './image-wrapper/index';

Vue.component('image-wrapper', ImagWrapper);

Vue.component('powered-by', PoweredBy);

Vue.component('loading', Loading);

export default {};
