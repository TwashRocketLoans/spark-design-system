/* global localStorage */
import getElements from '../../../../packages/spark-core/es5/getElements';

const loadSwitchSetting = () => {
  if (localStorage) {
    getElements('[data-code-example-switch]', (swtch) => {
      swtch.querySelectorAll('input').forEach((rdio) => {
        if (rdio.value === localStorage.getItem('code-example-switch')) {
          rdio.click();
        }
      });
    });
  }
};

export { loadSwitchSetting as default };
