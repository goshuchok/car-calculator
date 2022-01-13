const calculate = (firstInstall, months, percentOff) => {
  const percent = 17 / 100;
  const credit = firstInstall - (firstInstall * percentOff) / 100;
  const sum =
    (credit * percent) / 12 / (1 - (1 / (1 + percent / 12)) ** (months - 1));

  return sum;
};

export default calculate;
