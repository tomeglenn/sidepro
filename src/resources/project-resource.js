function getTopProjects() {
  return new Promise(function (resolve, reject) {
    resolve([
      { id: 1, title: 'Hello One', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { id: 2, title: 'Hello Two', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
      { id: 3, title: 'Hello Three', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
    ]);
  });
}

export { getTopProjects };
