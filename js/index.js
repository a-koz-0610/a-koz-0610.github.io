//All JavaScript components will be directed via this file

import Footer from './components/Footer';
import Header from './components/Header';

const container = document.querySelector('.container');

buildPage();

function buildPage() {
  renderHeader();
  renderFooter();
}

function renderHeader() {
  const headerDiv = document.createElement('div');
  headerDiv.innerHTML = Header();
  container.appendChild(headerDiv);
}

function renderFooter() {
  const footerDiv = document.createElement('div');
  footerDiv.innerHTML = Footer();
  container.appendChild(footerDiv);
}
