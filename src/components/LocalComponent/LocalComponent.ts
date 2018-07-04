import {Vue, Component} from 'vue-property-decorator';

import shuffle from 'lodash/shuffle'
@Component
export default class LocalComponent extends Vue {
  count = 0;

  get name() {
    return 'LocalComponent';
  }

  work(){
    console.log(shuffle(['a','b','c','d']));
  }
}
