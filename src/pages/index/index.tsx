import { defineComponent, ref } from "vue";
import Content from "./component/content.vue"
import Layout from "../../layout/main.vue"

export default () => {
  return (
    <> 
      <Layout>
        <Content></Content>
      </Layout>
    </>
  );
};
