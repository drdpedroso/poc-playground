import moment from 'moment'
import 'moment-timezone'

export const parseUTCDate = (date = new Date(), format = 'YYYY-MM-DD') => {
  let now = moment.utc(date)
  return now.tz('America/Sao_Paulo').format(format)
}