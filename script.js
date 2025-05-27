console.log('Script loaded');

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
    birthdayInfo: "Start your year with courage and energy — you’re unstoppable, Aries!",
    moreInfo: "Aries, 2025 is your year! Get ready for an amazing year (of course, with its share of highs and lows!) This year you might face some hurdles in health, work, and love life, but your inner strength will help you navigate all the challenges. After all, you are a BORN LEADER! You yearn for freedom and excitement and always look for new adventures. However, it’s crucial to balance your fiery nature with patience and planning. The stars have aligned in your favor and will bring huge growth and transformation. \n\nThis year, Saturn’s transit will lead to introspection, while Rahu will bring a lot of changes and new beginnings. Also, Jupiter’s transit promises expansion and learning, opening doors to intellectual and personal growth.To make the most out of 2025, look at every challenge as a chance to grow. Seek guidance from mentors, practice mindfulness, and stay balanced. Have faith in your inner self and trust the universe’s plan. With courage, determination, and willpower, you can share your destiny and make 2025 your year of self-discovery and fulfillment."
  },
  Taurus: {
    start: { month: 4, day: 20 },
    end: { month: 5, day: 20 },
    image: "images/taurus.jpg",
    seasonMessage: "Taurus Season is Here!",
    seasonInfo: "Strong, reliable, and patient — Taurus is ruled by Venus and loves beauty and stability. Happy Birthday season, Taurus!",
    birthdayMessage: "🎉 Happy Birthday, Taurus! 🎉",
    birthdayInfo: "Have an amazing year ahead, Taurus!",
    moreInfo: "Taurus, get ready for a year of steady progress and meaningful transformation in 2025! This year is a period of strategic growth and careful advancement and your practical nature will be your greatest strength.\n\nCareer-wise, you’ll find yourself in a sweet spot of professional development. Your natural patience and determination will pay off, especially in the middle months of the year. \n\nFinancial stability looks promising, with the potential for unexpected gains and smart investments. Your ruling planet Venus will bring charm and creativity to your professional interactions. \n\nRelationships will require some careful navigation. Family bonds will strengthen, and romantic partnerships will benefit from your honest and grounded approach. Personal growth comes through balanced communication and emotional intelligence. \n\nHealth and wellness take center stage, with opportunities to develop more holistic lifestyle habits. Your practical approach will help you implement sustainable changes. \n\nThe latter part of the year presents opportunities for personal expansion. Travel, learning, and personal development are highlighted. Stay open to new experiences while maintaining your signature Taurus practicality. \n\nBy December, you’ll have laid a solid foundation for future success, proving once again that slow and steady truly does win the race. Check out the more detailed month-by-month breakdown."
  },
  Gemini: {
    start: { month: 5, day: 21 },
    end: { month: 6, day: 20 },
    image: "images/gemini.jpg",
    seasonMessage: "Gemini Season is Here!",
    seasonInfo: "Curious, adaptable, and witty — Gemini thrives on communication and intellect. Happy Birthday season, Gemini!",
    birthdayMessage: "🎉 Happy Birthday, Gemini! 🎉",
    birthdayInfo: "Wishing you a dynamic and joyful year ahead!",
    moreInfo:"Gemini, prepare for a transformative year filled with opportunities for growth, success, and self-discovery. \n\nThe year starts with a focus on career advancements, financial gains, and meaningful collaborations, especially in the first half. \n\nAs the months progress, you’ll find yourself navigating a mix of highs and lows—while some challenges may test your patience, your adaptability ensures you bounce back stronger. \n\nRelationships, both personal and professional, take center stage, with support from loved ones boosting your confidence. Financially, staying disciplined and strategic will lead to stability. \n\nThe latter part of the year emphasizes personal growth, with planetary transits urging introspection and long-term planning. Health and well-being require attention throughout, but maintaining balance will keep you energized. \n\nBy December, you’ll feel more focused, resilient, and ready to embrace 2026 with clarity and optimism."
  },
  Cancer: {
    start: { month: 6, day: 21 },
    end: { month: 7, day: 22 },
    image: "images/cancer.jpg",
    seasonMessage: "Cancer Season is Here!",
    seasonInfo: "Emotional, intuitive, and caring — Cancer is ruled by the Moon. Happy Birthday season, Cancer!",
    birthdayMessage: "🎉 Happy Birthday, Cancer! 🎉",
    birthdayInfo: "May your year be full of love and comfort!",
    moreInfo: "2025 is a year of growth, transformation, and emotional depth for Cancer natives. The planetary alignments bring a blend of challenges and opportunities, encouraging you to embrace change while staying grounded. \n\nCareer advancements may face hurdles in the first half of the year, but persistent efforts will yield success by the latter half. Financial stability will improve as the year progresses, with opportunities for gains through strategic planning. \n\nFamily and relationships will play a significant role, offering support and joy despite occasional misunderstandings. Emotional and spiritual growth will be prominent, with Jupiter and Saturn guiding introspection and disciplined efforts. Education, travel, and self-discovery emerge as key themes, while health requires consistent care. \n\n2025 invites Cancerians to focus on adaptability, resilience, and balance. By nurturing relationships and seizing growth opportunities, you can transform challenges into meaningful milestones, making it a year of fulfillment and evolution."
  },
  Leo: {
    start: { month: 7, day: 23 },
    end: { month: 8, day: 22 },
    image: "images/leo.jpg",
    seasonMessage: "Leo Season is Here!",
    seasonInfo: "Charismatic, creative, and passionate — Leo shines like the Sun. Happy Birthday season, Leo!",
    birthdayMessage: "🎉 Happy Birthday, Leo! 🎉",
    birthdayInfo: "Roar into your new year with confidence and joy!",
    moreInfo: "Leo, 2025 is your year of balanced growth and smart moves. Planets are aligning to offer you some solid opportunities – it’s a year filled with transformations, career growth, and some serious personal growth. \n\nFinancially, expect some ups and downs. Some months will bring unexpected gains, while others will require careful budgeting. Your natural leadership will be your biggest asset, helping you navigate professional challenges and create meaningful connections. \n\nRelationships? Get ready for some deep, meaningful connections. Your family will be your rock, and your love life could get seriously interesting. By the end of the year, you won’t just be surviving – you’ll be absolutely crushing it. \n\nCareer-wise, your hard work and creativity will open doors, particularly in the middle of the year. \n\nThe key is staying adaptable. Don’t force things, but be ready to step up when opportunities arise. By December, you’ll look back and see how all the pieces of your year fit together, setting you up for an even stronger future. 2025 isn’t just another year – it’s YOUR year."
  },
  Virgo: {
    start: { month: 8, day: 23 },
    end: { month: 9, day: 22 },
    image: "images/virgo.jpg",
    seasonMessage: "Virgo Season is Here!",
    seasonInfo: "Analytical, practical, and kind — Virgo brings order and calm. Happy Birthday season, Virgo!",
    birthdayMessage: "🎉 Happy Birthday, Virgo! 🎉",
    birthdayInfo: "Here’s to a thoughtful and fulfilling year ahead!",
    moreInfo: "Virgo, 2025 is all about leveling up! This year brings a mix of exciting opportunities and challenges that’ll push you to grow and shine. \n\nProfessionally, Virgos can expect opportunities to shine, but success will require adaptability and disciplined efforts. Money matters look promising, as long as you keep those spending habits in check! Relationships deepen this year—whether it’s family, friends, or love, your connections will feel more meaningful. \n\nHealth? A little extra self-care goes a long way. Health takes center stage too, so prioritize wellness and avoid burnout. The year also nudges you toward self-reflection and spiritual growth. \n\nBy embracing change and leveraging their analytical strengths, Virgos can navigate challenges and make the most of opportunities. This is a year to align actions with long-term goals and create a foundation for lasting success."
  },
  Libra: {
    start: { month: 9, day: 23 },
    end: { month: 10, day: 22 },
    image: "images/libra.jpg",
    seasonMessage: "Libra Season is Here!",
    seasonInfo: "Charming, balanced, and fair — Libra seeks beauty and harmony. Happy Birthday season, Libra!",
    birthdayMessage: "🎉 Happy Birthday, Libra! 🎉",
    birthdayInfo: "May your year be full of peace and love!",
    moreInfo: "Libra, 2025 is a year of growth, transformation, and balance. While challenges can also test your persistence in profession, finances, and relationships, your calm and diplomatic nature will help you navigate them with ease. Professionally, you’ll tackle barriers head-on and with smart planning, financial gains are on the horizon. Just be careful with impulsive spending or volatile investments. \n\nYour relationships will thrive while conversation flows freely. Family bonds will give a boost to, and you’ll locate pleasure in spending time with cherished ones. Health-wise, staying steady with self-care and managing strain will assist you experience your first-class. \n\nSaturn’s impact encourages you to mirror and live disciplined, whilst Jupiter opens doorways to learning, personal increase, and thrilling profession possibilities. As the 12 months unfolds, embody change, continue to be focused on your dreams, and trust your instincts. With a balanced method, 2025 has the potential to be certainly one of your maximum rewarding years yet."
  },
  Scorpio: {
    start: { month: 10, day: 23 },
    end: { month: 11, day: 21 },
    image: "images/scorpio.jpg",
    seasonMessage: "Scorpio Season is Here!",
    seasonInfo: "Passionate, brave, and deeply emotional — Scorpio dives into life. Happy Birthday season, Scorpio!",
    birthdayMessage: "🎉 Happy Birthday, Scorpio! 🎉",
    birthdayInfo: "Wishing you a powerful and transformative year!",
    moreInfo: "Scorpio, 2025 is a year of growth, change, and new opportunities. \n\nJanuary starts off the year with career growth and overcoming challenges, then in February will come a couple bumps, so patience and clearly communicating your needs will do the trick. There are plenty of chances in March, but also unexpected costs so keep a firm grip on your finances. April is about teamwork and patience, most of the time, particularly if things stagnate. May features self-care and some relationship highs but be on the lookout for cash-flow struggles.June and July may have high and low tides: career-wise you’ll be restless but mind your health and the family dynamics. \n\nYour finances look good in August but family matters could arise. September means new beginnings right (at least in love) so settle for stronger bonds! October will challenge you to come out on the other side of challenges, particularly in relationships, and November offers a new beginning with opportunities to heal. \n\nBut December wraps up the year with reflection and exciting new possibilities, setting the stage for a successful 2026."
  },
  Sagittarius: {
    start: { month: 11, day: 22 },
    end: { month: 12, day: 21 },
    image: "images/sagittarius.jpg",
    seasonMessage: "Sagittarius Season is Here!",
    seasonInfo: "Adventurous, optimistic, and honest — Sagittarius loves to explore. Happy Birthday season, Sagittarius!",
    birthdayMessage: "🎉 Happy Birthday, Sagittarius! 🎉",
    birthdayInfo: "May this year bring exciting journeys and wisdom!",
    moreInfo: "2025 is a year of both changes and opportunities for Sagittarius. January horoscopes indicate favorable outcomes, particularly with regard to career; however, Mercury retrograde may cause delays in communication. With more travel and career opportunities coming your way in February, watch for any financial pitfalls. March will bring joy through family life and property gain, although financial caution will be needed. \n\nPersonal development is significant in April, focusing on teamwork, while May will be good for relationships and career development, even avoiding spending too much. June is a month of success for careers—but do keep an eye on money and family. Full of energy, July brings career breakthroughs; however, you’ll need to give risk avoidance another thought. August enables much family bonding, while September sees how to balance personal life with finances. Career in October moves out boldly while November will require a time for reflection. December culminates a year of confidence and prospects."
  },
  Capricorn: {
    start: { month: 12, day: 22 },
    end: { month: 1, day: 19 },
    image: "images/capricorn.jpg",
    seasonMessage: "Capricorn Season is Here!",
    seasonInfo: "Disciplined, responsible, and ambitious — Capricorn climbs to the top. Happy Birthday season, Capricorn!",
    birthdayMessage: "🎉 Happy Birthday, Capricorn! 🎉",
    birthdayInfo: "Here's to a year of success and stability!",
    moreInfo: "The year 2025 is set to be significant for Capricorns, mixing challenges and chances. The beginning of the year is about reviewing your finances and being patient with work-related issues, seeing gradual improvements by mid-year. Saturn and Mars will impact growth, pushing you to work disciplined and make careful choices. \n\nRelationships and family will do well with shared understanding, though challenges may test how well you communicate. Being careful with money will be important, as success favors planning for the future rather than quick decisions. Your health will get better slowly, with importance on being mindful and balanced. Education and personal growth will offer good results for those who work hard. \n\nBy the end of the year, Venus and Mars will boost your goals, creating chances for bold steps in your career and life. Throughout the year, focus on self-reflection, patience, and careful planning to deal with ups and downs smoothly. Capricorn, 2025 is your chance for growth—take it with strength and determination."
  },
  Aquarius: {
    start: { month: 1, day: 20 },
    end: { month: 2, day: 18 },
    image: "images/aquarius.jpg",
    seasonMessage: "Aquarius Season is Here!",
    seasonInfo: "Innovative, independent, and humanitarian — Aquarius sees the future. Happy Birthday season, Aquarius!",
    birthdayMessage: "🎉 Happy Birthday, Aquarius! 🎉",
    birthdayInfo: "Let your originality shine this year!",
    moreInfo: "In 2025, those born under the sign of Aquarius will undergo significant transformation, growth, and a quest for balance in various areas of their lives. The year begins in January with new opportunities on the horizon, while February encourages introspection and patience, particularly in career and personal relationships. March is a month of advancement in both career and finances, alongside a focus on health. In April, persistence will be essential in professional endeavors, and May presents challenges that require a careful balance between personal and work life. June revitalizes Aquarians with fresh ventures and strengthened connections. July brings career achievements but also calls for emotional and financial resilience. \n\nAugust is a time for bold decisions, while September will test your endurance in travel, finances, and relationships. November is a period of self-discovery, urging caution in financial matters and fostering renewal in relationships, and December wraps up the year with exciting changes that boost both career and personal growth. Throughout the year, themes of discipline, patience, and resilience will be crucial, offering pathways to success in education, finances, and relationships when approached with mindfulness and balance."
  },
  Pisces: {
    start: { month: 2, day: 19 },
    end: { month: 3, day: 20 },
    image: "images/pisces.jpg",
    seasonMessage: "Pisces Season is Here!",
    seasonInfo: "Compassionate, artistic, and dreamy — Pisces flows with intuition. Happy Birthday season, Pisces!",
    birthdayMessage: "🎉 Happy Birthday, Pisces! 🎉",
    birthdayInfo: "Swim through your new year with creativity and kindness!",
    moreInfo: "2025 is a transformative year for Pisces, offering a mix of challenges, growth, and opportunities. Career-wise, persistence and strategic planning unlock professional advancement, while business ventures require cautious optimism. Financially, the year urges prudent decision-making to manage fluctuations effectively. Relationships deepen as family bonds strengthen, although patience and clear communication are vital during moments of tension. Health takes centre stage with a focus on maintaining balance and avoiding overexertion. For students, academic success is achievable with dedicated effort. Travel promises relaxation and fresh perspectives, adding to personal enrichment. \n\nAstrological influences like Saturn’s retrograde and Venus’s charms bring periods of reflection and inspiration. As the year progresses, Pisces will embrace change, seize new opportunities, and strengthen emotional connections. With resilience and focus, 2025 becomes a year of personal growth, professional breakthroughs, and fulfilling relationships, paving the way for a brighter future."
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

function renderZodiacSidebar(selectedSign) {
  const sidebar = document.getElementById('zodiacSidebar');
  sidebar.innerHTML = ''; // clear old icons
  sidebar.classList.remove('hidden');

  // trigger slide-in animation
  requestAnimationFrame(() => {
    sidebar.classList.add('show');
  });

  for (const sign in zodiacData) {
    const img = document.createElement('img');
    img.src = zodiacData[sign].image;
    img.alt = sign;
    img.classList.add('zodiac-icon');
    if (sign === selectedSign) {
      img.classList.add('selected');
    }

    img.addEventListener('click', () => {
      currentZodiacSign = sign;
      showZodiacTheme(sign); // updates the UI message
      renderZodiacSidebar(sign); // refresh highlight
    });

    sidebar.appendChild(img);
  }
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

const zodMusic = document.getElementById('zodMusic');

startButton.addEventListener('click', () => {

  const targetDate = new Date(datetimeInput.value);

  if (isNaN(targetDate.getTime()) || targetDate <= new Date()) {
    alert('Please select a future date and time.');
    return;
  }

  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();
  const zodiacSign = getZodiacSign(month, day);
  currentZodiacSign = zodiacSign;

  renderZodiacSidebar(currentZodiacSign);

  document.getElementById('optBtns').classList.remove('hidden');

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

  if(zodMusic.paused) {
    zodMusic.play().catch(err => console.warn("Autoplay blocked:", err));
  }
});

const moreInfoBtn = document.getElementById('moreInfo');
const zodPopupOverlay = document.getElementById('zodPopupOverlay');
const zodPopupContent = document.getElementById('zodPopupContent');
const zodCloseBtn = document.getElementById('zodCloseBtn');

// Store the most recently calculated zodiac sign
let currentZodiacSign = null;

moreInfoBtn.addEventListener('click', () => {
  if (!currentZodiacSign) return;

  const zodiac = zodiacData[currentZodiacSign];
  if (!zodiac || !zodiac.moreInfo) {
    zodPopupContent.textContent = 'No extra information available.';
  } else {
     // Split by double newlines and wrap each part in <p>
    const paragraphs = zodiac.moreInfo
      .split(/\n\s*\n/)
      .map(para => `<p>${para.trim()}</p>`)
      .join('');

    zodPopupContent.innerHTML = `
      <img src='${zodiac.image}' alt= '${currentZodiacSign} symbol' class= 'popup-zodiac-img' />
      <h3 style="font-size: larger; color:rgb(1, 12, 20); padding: 10px; border-top: 2px solid rgb(1, 12, 20); border-bottom: 2px solid rgb(1, 12, 20); background-color: lightgray;margin: 10px; font-style: italic;" >${currentZodiacSign} - 2025</h3>
      ${paragraphs}
      <div class="popup-buttons">
    <button id="copyZodiacText">Copy</button>
    <button id="closePopup">Close</button>
  </div>
    `;

    // COPY button functionality
document.getElementById('copyZodiacText').addEventListener('click', () => {
  const textToCopy = zodiac.moreInfo;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      showCopyToast();
    })
    .catch(err => {
      console.error('Failed to copy:', err);
      alert('Failed to copy text.');
    });
});

// CLOSE button functionality
document.getElementById('closePopup').addEventListener('click', () => {
  zodPopupOverlay.classList.remove('active');
  setTimeout(() => {
    zodPopupOverlay.style.display = 'none';
  }, 400);
});
}
   // 🔥 Reset scroll to top of popup content
  zodPopupBox.scrollTop = 0;

  zodPopupOverlay.style.display = 'flex'; // show it first
requestAnimationFrame(() => {
  zodPopupOverlay.classList.add('active'); // then trigger animation;
});
});

zodCloseBtn.addEventListener('click', () => {
  zodPopupOverlay.classList.remove('active');

  // Wait for the transition to finish, then hide
  setTimeout(() => {
    zodPopupOverlay.style.display = 'none';
  }, 400); // Match your CSS transition duration

});

// Close popup when clicking outside the popup box
zodPopupOverlay.addEventListener('click', (e) => {
  // If the click target *is* the overlay (not the popup box or its children)
  if (e.target === zodPopupOverlay) {
    zodPopupOverlay.classList.remove('active');

    // Optional: wait for animation to end before hiding
    setTimeout(() => {
      zodPopupOverlay.style.display = 'none';
    }, 400); // match your CSS transition duration
  }
});

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  // Stop the countdown
  clearInterval(countdownInterval);

  // Reset timer display
  daysElem.textContent = '00';
  hoursElem.textContent = '00';
  minutesElem.textContent = '00';
  secondsElem.textContent = '00';

  // Clear input field
  datetimeInput.value = '';

  // Hide zodiac info and popup
  zodiacContainer.classList.add('hidden');
  zodPopupOverlay.style.display = 'none';

  // Hide option buttons
  document.getElementById('optBtns').classList.add('hidden');

  // Clear stored sign
  currentZodiacSign = null;
});
// Show copied to clipboard function below
function showCopyToast() {
  const toast = document.getElementById('copyToast');
  toast.classList.add('show');

  // Hide it after 2.5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}