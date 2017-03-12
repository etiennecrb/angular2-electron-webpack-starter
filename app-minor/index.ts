import { Test } from '../shared/TestClass'
window.addEventListener('load', () => {
	const t = new Test(3, 4);
	document.querySelector('#block').innerHTML = 'minor app works! \n 3 * 4 = ' + t.product();
});
