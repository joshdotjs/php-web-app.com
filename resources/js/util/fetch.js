// ==============================================

const fetchGET = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

// ==============================================

const fetchPOST = async ({url, body={}, method='POST'}) => {

  
  console.log('url: ', url);
  console.log('method: ', method);
  console.log('body: ', body);

  const res = await fetch(
    url, {
      method,
      headers: { 
        // "Content-Type": 'application/json',
        // "X-WP-Nonce": PHP.nonce,
      },
      body: JSON.stringify(body)
  });
  const data = await res.json();
  return data;
};

// ==============================================

export { fetchGET, fetchPOST };