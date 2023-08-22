export type PublicHoliday = {
  day: number,
  month: number,
  isHalfDay: boolean | undefined,
};

export const PublicHolidays: PublicHoliday[] = [
  {day: 1, month: 1}, //Yılbaşı
  {day: 20, month: 4, isHalfDay: true}, //Ramazan Arife
  {day: 21, month: 4}, //Ramazan 1
  {day: 22, month: 4}, //Ramazan 2
  {day: 23, month: 4}, //Ramazan 3
  {day: 1, month: 5}, //1 Mayıs
  {day: 19, month: 5}, //19 Mayıs
  {day: 27, month: 6, isHalfDay: true}, //Kurban Arife
  {day: 28, month: 6}, //Kurban 1
  {day: 29, month: 6}, //Kurban 2
  {day: 30, month: 6}, //Kurban 3
  {day: 1, month: 7}, //Kurban 4
  {day: 15, month: 7}, //15 Temmuz Demokrasi Bayramı
  {day: 30, month: 8}, //30 Ağustos
  {day: 28, month: 10, isHalfDay: true}, //29 Ekim Arife,
  {day: 29, month: 10}, //29 Ekim
];
