import shelljs from 'shelljs'
import { format } from 'date-fns'
import localeEn from 'date-fns/locale/en-US'

const DATE_FORMAT = 'yyyy-MM-dd'

const commitTimeseries = () => {
 shelljs.exec(`git commit -am "chore: update time series on ${format(new Date(), DATE_FORMAT, { locale:localeEn })}"`)
}

const main = () => {
  commitTimeseries()
}

main()
