import dayjs from 'https://esm.sh/dayjs';

export function getDeliveryDate(deliveryDays) {
  const today = dayjs();
  const deliveryDate = today.add(deliveryDays, 'days');
  const dateString = deliveryDate.format('dddd, MMMM D');

  return dateString;
}