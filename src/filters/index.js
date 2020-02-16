import dayjs from 'dayjs';

export function json(value) {
  return JSON.stringify(value);
}

export function formatDate(value, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return value ? dayjs(value)
    .format(pattern) : null;
}

export function shortDate(value) {
  return formatDate(value, 'YYYY-MM-DD');
}

export function currentDate(value) {
  const date = value ? dayjs(value) : dayjs();
  return date.format('YYYY-MM-DD');
}

export function numberFormat(value) {
  if (value != null) {
    return value.toFixed(2)
      .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  }
  return '';
}

export function asRmb(value) {
  if (value != null) {
    return numberFormat(value / 100);
  }
  return '';
}

export function ellipse(value, length = 10) {
  return value && value.length > length ? `${value.substring(0, length - 1)}...` : value;
}
