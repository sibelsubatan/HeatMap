import dayjs from 'dayjs';
import {PublicHolidays} from '../constants/public_holidays';

export const getAvailableHolidayCount = (
  startDate: Date,
  endDate: Date,
): number => {
  // Public holidaysin haftasonuna denk gelenler;
  let inWeekPublicHolidays = PublicHolidays.filter(ph => {
    var phDate = new Date(2023, ph.month - 1, ph.day);
    return !isWeekend(phDate);
  });
  //İki tarih arası tüm günlerin sayısı
  let dayCount = dayjs(endDate).diff(startDate, 'day');

  //İki tarih arası hafatsonu olmayan günlerin listesi
  let allWeekDaysBetweenTwoDates: Date[] = [];
  for (let i = 0; i <= dayCount; i++) {
    var currentDate = dayjs(startDate).add(i, 'day').toDate();

    if (!isWeekend(currentDate)) {
      allWeekDaysBetweenTwoDates.push(currentDate);
    }
  }
  // tüm gün olan tatil günler

  allWeekDaysBetweenTwoDates = allWeekDaysBetweenTwoDates.filter(wd => {
    const nonHalfDay = inWeekPublicHolidays.filter(
      i => i.isHalfDay === undefined,
    );
    //Ünlemi kontrol et
    return !(
      nonHalfDay.find(
        n => n.day === wd.getDate() && n.month === wd.getMonth() + 1,
      ) != null
    );
  });

  // yarım gün olan tatil günleri sayısı
  const halfDayHoldidayCount = allWeekDaysBetweenTwoDates.filter(wd => {
    const halfDay = inWeekPublicHolidays.filter(i => i.isHalfDay === true);
    //Ünlem kontrol
    return !(
      halfDay.find(
        n => n.day === wd.getDate() && n.month === wd.getMonth() + 1,
      ) == null
    );
  }).length;

  const workDay = allWeekDaysBetweenTwoDates.length - halfDayHoldidayCount / 2;

  return workDay;
};

function isWeekend(date = new Date()): boolean {
  return date.getDay() === 6 || date.getDay() === 0;
}
