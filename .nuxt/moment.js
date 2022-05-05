import moment from 'moment'

import 'moment-timezone'

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
