console.log(typeof module)
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
require('./js/header.js')