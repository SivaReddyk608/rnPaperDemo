import { debounce } from 'lodash-es'

export function debounceScroll(f) {
  if (!(f).debounced) {
    // eslint-disable-next-line no-param-reassign
    (f).debounced = debounce(f, 1500, { leading: true, trailing: false })
  }
  return (f).debounced
}

export function debouncePress(f) {
  if (!(f).debounced) {
    // eslint-disable-next-line no-param-reassign
    (f).debounced = debounce(f, 500, { leading: true, trailing: false })
  }
  return (f).debounced
}

export function debounceEvent(f, wait) {
  if (!(f).debounced) {
    // eslint-disable-next-line no-param-reassign
    (f).debounced = debounce(f, wait, { leading: true, trailing: false })
  }
  return (f).debounced
}
