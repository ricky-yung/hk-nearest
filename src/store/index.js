import { createStore, createLogger } from "vuex";
import category from "./modules/category";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    category,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
