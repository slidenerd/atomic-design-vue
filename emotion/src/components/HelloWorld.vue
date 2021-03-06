<template>
  <div class="hello" :class="styles">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <button @click="hoverColor = 'red'">red</button>
    <button @click="hoverColor = 'green'">green</button>
    <button @click="hoverColor = 'blue'">blue</button>
    <input type="text" v-model="hoverColor"/>
  </div>
</template>

<script>
import { css } from "emotion";
import * as color from "../design-system/colors";
import { rounded } from "../design-system/borders";
import { shadow, elevation } from "../design-system/shadows";
import { margin } from "../design-system/spacing";
import { FontStack, font, TextSize } from "../design-system/typography";
import lerp from "lerp";

export default {
  name: 'HelloWorld',
  data: () => ({
    hoverColor: "red",
    x: 0.5,
    y: 0.5,
  }),
  computed: {
    color: () => color,
    styles() {
      return css`
        border: solid 10px ${color.teal(30)};
        font-family: ${FontStack.mono};
        font-size: ${TextSize.xl};
        ${ rounded("20px") };
        ${ margin.y("20px") };
        
        transform:
          perspective(5000px)
          rotateY(${ lerp(-20, 20, this.x) }deg)
          rotateX(${ lerp(20, -20, this.y) }deg);
        
        box-shadow:
          ${ shadow.inset("10px", color.magenta(50), 0.5) },
          ${ elevation(24, color.blue(50)) };
        
        &:hover {
          color: ${ this.hoverColor };
        }
        
        h3 {
          margin: 40px 0 0;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: inline-block;
          margin: 0 10px;
        }
        a {
          color: #42b983;
        }
      `;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.mousemove);
  },
  methods: {
    mousemove(event) {
      this.x = event.clientX / window.innerWidth;
      this.y = event.clientY / window.innerHeight;
    },
  },
  props: {
    msg: String
  }
}
</script>

<!--
Here's how I really wish it worked.

Imagine you could create a `<style lang="emotion">` block that would get parsed
by emotion and treated as a tagged template literal with access to the component
instance. Then the resulting CSS class name would get automatically applied to
the root element in the template.

<style scope lang="emotion">
  &:hover {
    color: ${ this.color };
  }
  
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
-->
