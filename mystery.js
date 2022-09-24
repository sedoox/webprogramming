function mystery(a, b) {
    if (a > b) {
      return 0;
    } else {
      let result = 0;
      for (let i = a; i <= b; i++) {
        result += i;
      }
      return result;
    } 
  }