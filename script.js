const datetimeInput = document.getElementById('datetime');
const startButton = document.getElementById('start');
const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');


// Zodiac container elements
const zodiacContainer = document.getElementById('zodiacContainer');
const zodiacImage = document.getElementById('zodiacImage');
const zodiacMessage = document.getElementById('zodiacMessage');
const zodiacInfo = document.getElementById('zodiacInfo');

let countdownInterval;

const zodiacData = {
  Aries: {
    start: { month: 3, day: 21 },
    end: { month: 4, day: 19 },
    image: "images/aries.jpg",
    seasonMessage: "Aries Season is Here!",
    seasonInfo: "Bold, ambitious, and confident — Aries is a fire sign ruled by Mars. Happy Birthday season, Aries!",
    birthdayMessage: "🎉 Happy Birthday, Aries! 🎉",
    birthdayInfo: "Start your year with courage and energy — you’re unstoppable, Aries!"
  },
  Taurus: {
    start: { month: 4, day: 20 },
    end: { month: 5, day: 20 },
    image: "images/taurus.jpg",
    seasonMessage: "Taurus Season is Here!",
    seasonInfo: "Strong, reliable, and patient — Taurus is ruled by Venus and loves beauty and stability. Happy Birthday season, Taurus!",
    birthdayMessage: "🎉 Happy Birthday, Taurus! 🎉",
    birthdayInfo: "Have an amazing year ahead, Taurus!"
  },
  Gemini: {
    start: { month: 5, day: 21 },
    end: { month: 6, day: 20 },
    image: "images/gemini.jpg",
    seasonMessage: "Gemini Season is Here!",
    seasonInfo: "Curious, adaptable, and witty — Gemini thrives on communication and intellect. Happy Birthday season, Gemini!",
    birthdayMessage: "🎉 Happy Birthday, Gemini! 🎉",
    birthdayInfo: "Wishing you a dynamic and joyful year ahead!"
  },
  Cancer: {
    start: { month: 6, day: 21 },
    end: { month: 7, day: 22 },
    image: "images/cancer.jpg",
    seasonMessage: "Cancer Season is Here!",
    seasonInfo: "Emotional, intuitive, and caring — Cancer is ruled by the Moon. Happy Birthday season, Cancer!",
    birthdayMessage: "🎉 Happy Birthday, Cancer! 🎉",
    birthdayInfo: "May your year be full of love and comfort!"
  },
  Leo: {
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
    image: "images/leo.jpg",
    seasonMessage: "Leo Season is Here!",
    seasonInfo: "Charismatic, creative, and passionate — Leo shines like the Sun. Happy Birthday season, Leo!",
    birthdayMessage: "🎉 Happy Birthday, Leo! 🎉",
    birthdayInfo: "Roar into your new year with confidence and joy!"
  },
  Virgo: {
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
    image: "images/virgo.jpg",
    seasonMessage: "Virgo Season is Here!",
    seasonInfo: "Analytical, practical, and kind — Virgo brings order and calm. Happy Birthday season, Virgo!",
    birthdayMessage: "🎉 Happy Birthday, Virgo! 🎉",
    birthdayInfo: "Here’s to a thoughtful and fulfilling year ahead!"
  },
  Libra: {
    start: { month: 9, day: 23 },
    end: { month: 10, day: 22 },
    image: "images/libra.jpg",
    seasonMessage: "Libra Season is Here!",
    seasonInfo: "Charming, balanced, and fair — Libra seeks beauty and harmony. Happy Birthday season, Libra!",
    birthdayMessage: "🎉 Happy Birthday, Libra! 🎉",
    birthdayInfo: "May your year be full of peace and love!"
  },
  Scorpio: {
    start: { month: 10, day: 23 },
    end: { month: 11, day: 21 },
    image: "images/scorpio.jpg",
    seasonMessage: "Scorpio Season is Here!",
    seasonInfo: "Passionate, brave, and deeply emotional — Scorpio dives into life. Happy Birthday season, Scorpio!",
    birthdayMessage: "🎉 Happy Birthday, Scorpio! 🎉",
    birthdayInfo: "Wishing you a powerful and transformative year!"
  },
  Sagittarius: {
    start: { month: 11, day: 22 },
    end: { month: 12, day: 21 },
    image: "images/sagittarius.jpg",
    seasonMessage: "Sagittarius Season is Here!",
    seasonInfo: "Adventurous, optimistic, and honest — Sagittarius loves to explore. Happy Birthday season, Sagittarius!",
    birthdayMessage: "🎉 Happy Birthday, Sagittarius! 🎉",
    birthdayInfo: "May this year bring exciting journeys and wisdom!"
  },
  Capricorn: {
    start: { month: 12, day: 22 },
    end: { month: 1, day: 19 },
    image: "images/capricorn.jpg",
    seasonMessage: "Capricorn Season is Here!",
    seasonInfo: "Disciplined, responsible, and ambitious — Capricorn climbs to the top. Happy Birthday season, Capricorn!",
    birthdayMessage: "🎉 Happy Birthday, Capricorn! 🎉",
    birthdayInfo: "Here's to a year of success and stability!"
  },
  Aquarius: {
    start: { month: 1, day: 20 },
    end: { month: 2, day: 18 },
    image: "images/aquarius.jpg",
    seasonMessage: "Aquarius Season is Here!",
    seasonInfo: "Innovative, independent, and humanitarian — Aquarius sees the future. Happy Birthday season, Aquarius!",
    birthdayMessage: "🎉 Happy Birthday, Aquarius! 🎉",
    birthdayInfo: "Let your originality shine this year!"
  },
  Pisces: {
    start: { month: 2, day: 19 },
    end: { month: 3, day: 20 },
    image: "images/pisces.jpg",
    seasonMessage: "Pisces Season is Here!",
    seasonInfo: "Compassionate, artistic, and dreamy — Pisces flows with intuition. Happy Birthday season, Pisces!",
    birthdayMessage: "🎉 Happy Birthday, Pisces! 🎉",
    birthdayInfo: "Swim through your new year with creativity and kindness!"
  }
};

function getZodiacSign(month, day) {
  for (const sign in zodiacData) {
    const { start, end } = zodiacData[sign];
    
    if (
      (month === start.month && day >= start.day) ||
      (month === end.month && day <= end.day) ||
      (start.month > end.month && (
        (month === start.month && day >= start.day) ||
        (month === end.month && day <= end.day) ||
        (month > start.month || month < end.month)
      ))
    ) {
      return sign;
    }
  }
  return null;
}

function showZodiacTheme(sign) {
  const zodiac = zodiacData[sign];
  if (!zodiac) return;

  zodiacContainer.classList.remove('hidden');
  zodiacImage.src = zodiac.image;
  zodiacMessage.textContent = zodiac.seasonMessage;
  zodiacInfo.textContent = zodiac.seasonInfo;
}

function showBirthdayMessage(sign) {
  const zodiac = zodiacData[sign];
  zodiacContainer.classList.remove('hidden');

  if (zodiac) {
    zodiacImage.src = zodiac.image;
    zodiacMessage.textContent = zodiac.birthdayMessage;
    zodiacInfo.textContent = zodiac.birthdayInfo;
  } else {
    zodiacMessage.textContent = "🎉 Happy Birthday! 🎉";
    zodiacInfo.textContent = "Wishing you a wonderful year ahead!";
  }
}

startButton.addEventListener('click', () => {
  const targetDate = new Date(datetimeInput.value);

  if (isNaN(targetDate.getTime()) || targetDate <= new Date()) {
    alert('Please select a future date and time.');
    return;
  }

  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const zodiacSign = getZodiacSign(month, day);

  if (zodiacSign) {
    showZodiacTheme(zodiacSign);
  }

  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      showBirthdayMessage(zodiacSign);

      // Set timer to all zeros
      daysElem.textContent = '00';
      hoursElem.textContent = '00';
      minutesElem.textContent = '00';
      secondsElem.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElem.textContent = String(days).padStart(2, '0');
    hoursElem.textContent = String(hours).padStart(2, '0');
    minutesElem.textContent = String(minutes).padStart(2, '0');
    secondsElem.textContent = String(seconds).padStart(2, '0');
  }, 1000);
});