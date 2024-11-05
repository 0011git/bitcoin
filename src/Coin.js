import React, { useEffect, useState } from 'react'

const Coin = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    let [count, setCount] = useState(0);

    useEffect(()=>{
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(response => response.json())
        .then((json) => {
            setCoins(() => json)
            setLoading(() => false)   
        })
    }, [])

    const sortedCoins = [...coins].sort((a, b) => b.quotes.USD.price - a.quotes.USD.price)




    const [funnel, setFunnel] = useState(0);

    const filter = (e) => {
        setFunnel(() => Number(e.target.value));
    }
    const [asset, setAsset] = useState(0);
    // const quantityCalc = (e) => {
    //   setAsset( () => e.target.value)
    // }

  return (
    <>
      <h2>Coins {sortedCoins.length}</h2>
      <div>
        <button onClick={filter} value={0} style={{marginRight:'16px'}}>All</button>
        <button onClick={filter} value={100} style={{marginRight:'16px'}}>$100~</button>
        <button onClick={filter} value={500} style={{marginRight:'16px'}}>$500~</button>
        <button onClick={filter} value={1000}>$1,000~</button>
      </div>
      <div>
        {loading ? <strong>Loading...</strong> : null}
      </div>
      <div>
        <div>
          <p style={{marginTop:'16px'}}>result: {count}</p>
          <label htmlFor='dollar'>How much money will you invest in dollar?
            <input value={asset} onChange={(e) => setAsset(e.target.value)} id='dollar' type='number' placeholder='$100' />
          </label>
        </div>
        <ul>
            {sortedCoins.map((item) => {
                let price = parseFloat((item.quotes.USD.price).toFixed(2))
                if(price >= funnel) {
                    return(
                            <li key={item.id}>
                                <p>{item.name} ({item.symbol})</p>
                                <p>$ {price.toLocaleString()}</p>
                                <p>You can get {(asset/price).toLocaleString()} {item.symbol}.</p>
                            </li>
                    )
                }
                return null;               
            })}
        </ul>
      </div>
    </>
  )
}

export default Coin