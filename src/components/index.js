import Vue from 'vue';
import Loading from './loading';
import PoweredBy from './PoweredBy/index';
import OrderList from './OrderList/index';

Vue.component('OrderList', OrderList);

Vue.component('PoweredBy', PoweredBy);

Vue.component('loading', Loading);

export default {};
