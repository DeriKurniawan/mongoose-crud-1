'use strict'

module.exports = {
  getDateSum: function(date1, date2){
    var outDate = new Date(date1),
        inDate = new Date(date2);

        let dateDifferent = Math.ceil(Math.abs(outDate.getTime() - inDate.getTime()) / (1000*3600*24));
        return dateDifferent;
  },
  getFine: function(date1, date2, date3, books){
    var outDate = new Date(date1),
        dueDate = new Date(date2),
        inDate = new Date(date3),
        fine = 1000,
        fineSum = 0;

    let rentTimeSum = Math.ceil(Math.abs(dueDate.getTime() - outDate.getTime()) / (1000*3600*24));
    let rentTimeSumActual = Math.ceil(Math.abs(inDate.getTime() - outDate.getTime()) / (1000*3600*24));

    if (rentTimeSumActual > rentTimeSum) {
      let fineTime = rentTimeSumActual - rentTimeSum;
      let fineSum = (fineTime*fine)*books;
      return fineSum;
    } else {
      return fineSum;
    }
  }
}
