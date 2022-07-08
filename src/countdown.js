const select = elem => document.querySelector(elem);

const countdown = (config) => {
  const targetDate = select(config.target).getAttribute('data-date').split('-');
  const targetDay = parseInt(targetDate[0]);
  const targetMonth = parseInt(targetDate[1]);
  const targetYear = parseInt(targetDate[2]);
  let targetTime = select(config.target).getAttribute('data-time');
  let targetHour, targetMin;

  if (targetTime != null) {
    targetTime = targetTime.split(':');
    targetHour = parseInt(targetTime[0]);
    targetMin = parseInt(targetTime[1]);
  }

  // Set the date we're counting down to
  const countDownDate = new Date(targetYear, targetMonth-1, targetDay, targetHour, targetMin).getTime();

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
    const days =  distance > 0 ? Math.floor(distance / (1000 * 60 * 60 * 24)) : 0;
    const hours = distance > 0 ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0;
    const minutes = distance > 0 ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : 0;
    const seconds = distance > 0 ? Math.floor((distance % (1000 * 60)) / 1000) : 0;

    select(config.target+' .day .num').innerHTML = addZero(days);
    select(config.target+' .hour .num').innerHTML = addZero(hours);
    select(config.target+' .min .num').innerHTML = addZero(minutes);
    select(config.target+' .sec .num').innerHTML = addZero(seconds);

    if (distance <= 0) {
      config.callback();
    } else {
      requestAnimationFrame(updateTime);
    }
    
   }

    updateTime();

}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;
