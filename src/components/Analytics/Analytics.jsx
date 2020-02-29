import React, {useState, useEffect} from 'react';
import * as firebase from 'firebase';
import "firebase/firestore";
import {useSelector} from 'react-redux';
import DataTable from '../DataTable/DataTable';
import formatTimeSinceOrder from '../Order/formatTimeSinceOrder';

function Analytics () {
  const [dataset, setDataset] = useState([]);
  const business = useSelector(full_state => full_state.business);

  function fetchDataCached () {
    let cache = null;

    return async () => {
      if (cache) {
        return cache;
      } else {
        let users = [];

        let userData = await firebase.firestore().collection('userData').where("business", "==", business.id ? business.id : " ").get()

        userData.forEach(doc => {
          users.push({id: doc.id, ...doc.data()});
        });

        let newDataset = [];

        for (let i = 0; i < users.length; i++) {
          let data = await firebase.firestore().collection('orders')
            .where("takenBy", "==", users[i].id)
            .where("business", "==", business.id)
            .get();

          let totalTime = 0;
          let numberOfOrders = 0;

          data.forEach(doc => {
            let order = doc.data();

            if (order.completed) {
              totalTime += order.completionTime;
              numberOfOrders++;
            }
          });

          newDataset.push([
            users[i].firstName + " " + users[i].lastName,
            numberOfOrders,
            formatTimeSinceOrder(Math.floor(totalTime / numberOfOrders), true)
          ]);
        }

        cache = newDataset;
        return newDataset;
      }
    }
  }

  const [getFromCache, setGetFromCache] = useState(fetchDataCached());

  useEffect(() => {
    getFromCache.then(data => {
      setDataset(data);
    });
  }, []);

  return (
    <div className="row" style={{width: "90%", margin: "auto", marginBottom: "2rem"}}>
      <div className="col-md-6">
        <DataTable title="Staff Performance" labels={["Name", "# Of Orders", "Avg. Complet. Time"]} dataset={dataset} />
      </div>
      <div className="col-md-6">

      </div>
    </div>
  )
}

export default Analytics;
