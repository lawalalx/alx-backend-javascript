export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `In ${year}, San Francisco had a total budget of ${budget.income} with a gross domestic product of ${budget.gdp} per capita income was ${budget.capita}.`;
}
