import _ from 'lodash';

export default function showInfo(content) {
  const data = content.split('\n').slice(1, -1).map((el) => el.split(','));
  console.log(`Количество автомобилей: ${data.length}`);

  const probeg = data.map((el) => Number(el[4]));
  console.log(`${Math.round(_.sum(probeg) / data.length)}`);
  let mostExpensive = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const car of data) {
    const price = car[7];
    if (mostExpensive < price) {
      mostExpensive = price;
    }
  }
  console.log(mostExpensive);
  let marka = '';
  let model = '';
  let stariy = 2025;
  // eslint-disable-next-line no-restricted-syntax
  for (const car of data) {
    const year = car[2];
    const currentModel = car[1];
    const currentMarka = car[0];
    if (year < stariy) {
      stariy = year;
      marka = currentMarka;
      model = currentModel;
    }
  }
  console.log(`${marka} ${model}`);

  const colors = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const car of data) {
    const color = car[8].trim();
    if (_.has(colors, color)) {
      // eslint-disable-next-line no-multi-assign
      colors[color] = colors[color] += 1;
    } else {
      colors[color] = 1;
    }
  }
  const totalColors = { ...colors };
  console.log(totalColors);
}
