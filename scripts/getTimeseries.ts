require('isomorphic-fetch');
import fs from 'fs';

const COUNTRIES = [
  'AD',
  'AE',
  'AL',
  'AM',
  'AR',
  'AT',
  'AU',
  'BA',
  'BE',
  'BF',
  'BG',
  'BH',
  'BN',
  'BR',
  'CA',
  'CH',
  'CK',
  'CL',
  'CN',
  'CO',
  'CR',
  'CY',
  'CZ',
  'DE',
  'DK',
  'DO',
  'DZ',
  'EC',
  'EE',
  'EG',
  'ES',
  'FI',
  'FR',
  'GB',
  'GR',
  'HR',
  'HU',
  'ID',
  'IL',
  'IN',
  'IQ',
  'IR',
  'IS',
  'IT',
  'JO',
  'JP',
  'KR',
  'KW',
  'LB',
  'LK',
  'LT',
  'LU',
  'LV',
  'MA',
  'MD',
  'MK',
  'MT',
  'MX',
  'MY',
  'NL',
  'NO',
  'PA',
  'PE',
  'PH',
  'PK',
  'PL',
  'PT',
  'QA',
  'RO',
  'RS',
  'RU',
  'SA',
  'SE',
  'SG',
  'SI',
  'SK',
  'SM',
  'TH',
  'TN',
  'TR',
  'US',
  'UY',
  'VN',
  'ZA',
]
const FILE_PREFIX = 'timeseries'
const FILE_SEPARATOR = '-'
const PATH = './data/timeseries'

const getTimeseriesAndSaveInJson = async () => {
  if (process.env.TIMESERIES_URL) {
    COUNTRIES.map(async (countryCode) => {
      const response = await fetch(`${process.env.TIMESERIES_URL}=${countryCode}`)
      if (response.ok) {
        const data = await response.json()
        const dataInString = JSON.stringify(data)
        const fileName = `${PATH}/${[FILE_PREFIX, countryCode].join(FILE_SEPARATOR)}.json`
        await new Promise((resolve) => {
          fs.writeFile(fileName, dataInString, 'utf8', resolve);
        })
      }
    })

  }
}

const main = () => {
  getTimeseriesAndSaveInJson()
}

main()
