const obj = {
  name: "JS",
  show: function () {
    console.log(this.name);
  }
};
const fn = obj.show;
fn.bind(obj)()
