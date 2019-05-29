import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import routes from "./route.config";
import VeeValidate from "vee-validate";

const router = new Router({
	mode: "history",
	base: __dirname,
	routes
});
router.beforeEach((to, from, next) => {
	const handleNext = () => {
		next();
	};
	if (store.state.common.isReady) {
		handleNext();
	} else {
		store.watch(state => state.common.isReady, handleNext);
	}
});
Vue.use(Router, VeeValidate);
export default router;