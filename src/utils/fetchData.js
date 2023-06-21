const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

async function fetchData(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export { fetchData, exerciseOptions };
