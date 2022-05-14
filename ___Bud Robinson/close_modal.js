
const asyncSessionStorage = {
  setItem: function (key, value) {
    return Promise.resolve().then(function () {
      sessionStorage.setItem(key, value);
    });
  },
  getItem: function (key) {
    return Promise.resolve().then(function () {
      return sessionStorage.getItem(key);
    });
  }
};

$(document).ready(function () {
  var times;
  var go = new Promise(function (resolve, rejct) {
    asyncSessionStorage.getItem('show-modal').then(function (val) {
      console.log('value => ', val);
      if (val === null) {
        asyncSessionStorage.setItem('show-modal', 0).then(function (val) {
          resolve(0)
        })
      } else {
        resolve(val)
      }
    })
  })


  go.then((val) => {
    times = val;
    if (parseInt(times) < 5) {
      setTimeout(() => {
        $('#closed-note').modal();
      }, 1000);
      window.sessionStorage.setItem('show-modal', parseInt(times) + 1);
    }
  }
  )
});