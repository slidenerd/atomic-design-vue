<template>
  <div>
    <table style="width: 100%; table-layout: fixed;">
      <thead>
        <th>
          Color name
        </th>
        <th>5</th>
        <th>10</th>
        <th>20</th>
        <th>30</th>
        <th>40</th>
        <th>50</th>
        <th>60</th>
        <th>70</th>
        <th>80</th>
        <th>90</th>
        <th>95</th>
      </thead>
      <tbody>
        <tr
          v-for="name in [
            'neutralGrey',
            'coolGrey',
            'warmGrey',
            'hue15',
            'red',
            'burntOrange',
            'orange',
            'brown',
            'tan',
            'olive',
            'hue120',
            'hue135',
            'green',
            'hue165',
            'seaGreen',
            'teal',
            'aqua',
            /* 'hue225',
            'skyBlue',
            'hue255',
            'hue270', */
            'navy',
            'blue',
            'indigo',
            'purple',
            'magenta',
            'pink',
            'rose',
          ]"
        >
          <th
            :style="`
              padding: 8px;
              background: ${ color[name]() };
              color: ${ textColor(color[name](50)) };
            `"
          >{{ color[name].colorName }}</th>
          <ColorCell
            v-for="value in [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95]"
            :key="`${name} ${value}`"
            :color="color[name](value)"
            :label="`${color[name].colorName} ${value}`"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { css } from "emotion";
import chroma from "chroma-js";
import lerp from "lerp";

import ColorCell from "./ColorCell.vue";
import * as color from "../design-system/colors";
import { rounded } from "../design-system/borders";
import { shadow } from "../design-system/shadows";
import { margin } from "../design-system/size-spacing";
import { FontStack, font, TextSize } from "../design-system/typography";

window.chroma = chroma;

export default {
  name: "Colors",
  computed: {
    color: () => color,
    chroma: () => chroma,
    styles() {
      return css`
        color: red;
      `;
    },
  },
  methods: {
    textColor: color.textForBg,
  },
  components: {
    ColorCell,
  },
}
</script>
