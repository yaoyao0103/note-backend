import express from 'express';

const uiRoute = express.Router();

uiRoute.get('/', (req, res) => {
  res.render('home', { title: 'Webpage Builder' });
});
uiRoute.get('/editor', (req, res) => {
  res.render('editor', { title: 'Webpage Builder' });
});
uiRoute.all('*', (req, res) => {
  res.render('404');
});

export default uiRoute;
