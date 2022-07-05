const select = elem => document.querySelector(elem);

const countdown = function(config) {
  const targetDate = select(config.target).getAttribute('data-date').split('-');
  const targetDay = parseInt(targetDate[0]);
  const targetMonth = parseInt(targetDate[1]);
  const targetYear = parseInt(targetDate[2]);
  let targetTime = select(config.target).getAttribute('data-time');
  let targetHour, targetMin;

  // why only if targetTime ?

  if (targetTime != null) {
    targetTime = targetTime.split(':');
    targetHour = parseInt(targetTime[0]);
    targetMin = parseInt(targetTime[1]);
  }

  // Set the date we're counting down to
  // why targetMonth-1?
  const countDownDate = new Date(targetYear, targetMonth-1, targetDay, targetHour, targetMin).getTime();
  // console.log(countDownDate)

  select(config.target+' .day .label').innerHTML = config.dayLabel;
  select(config.target+' .hour .label').innerHTML = config.hourLabel;
  select(config.target+' .min .label').innerHTML = config.minLabel;
  select(config.target+' .sec .label').innerHTML = config.secLabel;

  const updateTime = () => {
    // Get todays date and time
    const now = new Date().getTime();
    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // difference / and ∞
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    select(config.target+' .day .num').innerHTML = addZero(days);
    select(config.target+' .hour .num').innerHTML = addZero(hours);
    select(config.target+' .min .num').innerHTML = addZero(minutes);
    select(config.target+' .sec .num').innerHTML = addZero(seconds);
    
    // If the count down gets to zero
    // if (distance == 0) {
    //   config.callback();
    // }
    
    //this disables the countdown but does not technically stop the loop?

    if (distance <= 0) {
      config.callback();
      cancelAnimationFrame(updateTime);
    } else {
      requestAnimationFrame(updateTime);
    }

   }
   
    updateTime()

}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;
