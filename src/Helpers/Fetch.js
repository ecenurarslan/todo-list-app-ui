const Fetch = async (url, options) =>
{
    return fetch(url,options)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            return false;
        })
        .then(json=>json)
        .catch(()=> false);
}

export default Fetch;