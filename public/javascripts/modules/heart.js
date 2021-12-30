import axios from 'axios';
import { $ } from './bling';

function ajaxHeart(e) {
  e.preventDefault();
  axios
    .post(this.action)  // "this" is the form; the action is the URL.
    .then(res => {
      const isHearted = this.heart.classList.toggle('heart__button--hearted');
      $('.heart-count').textContent = res.data.hearts.length;
      if (isHearted) {
        this.heart.classList.add('heart__button--float');
        settimeout(() => this.heart.classList.remove('heart__button--float'), 2500);
      }
    })
    .catch(err => console.error(err));
}

export default ajaxHeart;