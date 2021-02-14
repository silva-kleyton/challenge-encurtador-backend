export default function addDayDate(days?: number): Date {
  const expiresDay = days || parseInt(`${process.env.EXPIRE_LINK}`);
  const date = new Date();
  date.setDate(date.getDate() + expiresDay);

  return date;
}
