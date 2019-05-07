const ghpages = require('gh-pages');

const dir = 'dist';
const options = {
  dotfiles: true,
  repo: 'https://github.com/Mistergix/camescope.git'
};

ghpages.publish(dir, options, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('deployed');
  }
});
