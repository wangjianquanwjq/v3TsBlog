import { createRouter, createWebHistory } from "vue-router";
import route from "./route";
const router = createRouter({
  history: createWebHistory(),
  routes: route,
});
router.beforeEach((to, from, next) => {
  // window.document.title=to.meta.title as string
  window.document.title = <string>to.meta.title
  next()
})
export default router;