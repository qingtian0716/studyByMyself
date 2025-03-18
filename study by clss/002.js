function Person() {
    const self = this;
    self.age = 0;
  
    setInterval(function growUp() {
      self.age++;
      console.log('当前年龄：', self.age);
    }, 1000);
}

const person = new Person();