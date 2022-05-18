

 
const getApi = async () => {
    const response = await fetch(URL)
  const scores = response.json()
  console.log(scores);
  return scores;
};

console.log(getApi);

const postData = async (player, scores) => {
    const apiResponse = await fetch(URL, { 
        method: 'POST',
        body: JSON.stringify({user: player, score: scores }),
        headers: {
          'Content-type': 'application/json',
        },
      })
       const output = apiResponse.json();
       console.log(output);
       return output;   
};

console.log(postData);

export { getApi, postData };