// ==============================================

const fetchGET = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

// ==============================================

const fetchGET2 = async (url) => {
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
        "Content-Type": 'application/json',
        // "X-WP-Nonce": PHP.nonce,
      },
      body: JSON.stringify(body)
  });
  const data = await res.json();
  return data;
};

// ==============================================

// ==============================================

const fetchPOST2 = async ({url, body={}, method='POST', response_type='json'}) => {

  // console.log('url: ', url);
  // console.log('method: ', method);
  // console.log('body: ', body);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const options = {
    method,
    headers: myHeaders,
    body: JSON.stringify(body),
    // redirect: 'follow'
  };
  
  try {

    // const url = 'http://127.0.0.1:8000/api/login';

    const resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('Response status not in 200 range');
    }

    let data;
    if (response_type === 'text') {
      data = await resp.text();
    } 
    else if (response_type === 'json') {
      data = await resp.json();
    }
    else { 
      throw new Error('invalid response type');
    }

    // console.log(data);
    return [data, null];
  } catch(e) {
    console.error('error: ', e);
    return [null, e];
  }
};

// ==============================================

export { fetchGET, fetchPOST, fetchPOST2 };