## Colyn191, automatic report about the situation of COVID-19

Colyn191 is an automated robot, her role is inform people about the situation of COVID-19 through social networks. Our data come from the official <a href="https://github.com/CSSEGISandData/COVID-19" target="_blank" >repository</a> of Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE).

- [:robot: Twitter](https://twitter.com/colyn191)
- Any suggestions?

### Message

Once the data has been processed, here is an example of a basic message;

```
🇦🇺 Daily Report
 Total Confirmed: 2044 
 Total Deaths: 8
```
#### With image (story)

Coming soon ...

#### With emoji

Coming soon ...

#### With recovered

Coming soon ...

#### With difference with D-1

Coming soon ...

### Changelog

All notable changes to this project will be documented in this section.

#### [0.0.6] (2020-03-24)

##### Bug Fixes

* add feature flag for covid19 daily report recovered
* support country ad, ae, al, am, ar, ba, bf, bg, bh, bn, ck, cl, co, cr, cy, do, dz, ec, ee, eg, fi, gr, hr, hu, id, il, in, iq, is, jo, kw, lb, lk, lt, lu, lv, ma, md, mk, mt, mx, pa, pe, ph, pk, pl, qa, ro, rs, ru, sa, sg, si, sk, sm, th, tn, tr, uy, vn, za

#### [0.0.5] (2020-03-24)

##### Features

* support country br
* support country ir, fr, kr, ch

#### [0.0.4] (2020-03-24)

##### Features

* support country us, gb, nl, be, at, no, se, pt, dk, ca, au, my, br, jp, cz

#### 0.0.2 (2020-03-24)

##### Features

* add diff on daily report
* add emoji on daily report
* add translation for each language
* add support of twitter service
* allow to import data on a specific date
* import covid19 data every 4 hours at 0 min
* report daily covid19 for es, de
* publish daily report every day at 2 o'clock

#### Bug Fixes

* add breakline and update daily report format
* add support of top 23 country confirmed cases of covid-19
* add user dedicated hashtag
* fix edge case on company, state, report import
* do not send daily report if source give a 404
* avoid duplicate report
* display chart only if ratio is greater than 5%
* support latest version of timeseries
* support legacy active property of CSSEGISandData

### Support or Contact

Having trouble with the robot? You can contact the <a href="https://github.com/arnaud-zg" target="_blank">maintainer</a>.
