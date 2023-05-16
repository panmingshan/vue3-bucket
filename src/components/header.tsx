import { reactive, defineComponent } from "vue";

import "./header.less";

export default {
  setup() {
    const info = reactive({
      title: "title",
      name: "name",
      link: "http://baidu.com",
    });

    return () => {
      return (
        <div class="header">
          <h1
            onClick={() => {
              info.title = "test";
            }}
          >
            {info.title}
          </h1>
          <h2>{info.name}</h2>
          <a href={info.link}>连接111</a>
        </div>
      );
    };
  },
};
