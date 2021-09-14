import _ from 'lodash';

const func = () => {
  alert('Click!!');
}
const debounce = _.debounce(func, 1000);

export default debounce;