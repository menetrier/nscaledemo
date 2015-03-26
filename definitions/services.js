exports.root = {
  type: 'blank-container'
};

exports.web = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:menetrier/demoweb.git',
    execute: {
      args: '-p 8000:8000 -d',
      exec: ''
    }
  }
};
