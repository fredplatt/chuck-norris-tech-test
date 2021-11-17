import React, { useState } from "react";
import "./index.css";

export default function EmailInput(props) {
  const { handleSend } = props;
  const [addressList, setAddressList] = useState([]);
  const [isValidAddress, setIsValidAddress] = useState();
  const [value, setValue] = useState("");

  const orderAddresses = () => {
    let objectArray = [];
    addressList.map((x) => {
      const addressArray = x.split("@");
      return objectArray.push({
        name: addressArray[0],
        domain: addressArray[1],
      });
    });

    const comparison = (a, b) => {
      let comparison = 0;
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
      return comparison;
    };

    function names(a, b) {
      return comparison(a.name, b.name);
    }
    function domains(a, b) {
      return comparison(a.domain, b.domain);
    }

    objectArray = objectArray.sort(names);
    objectArray = objectArray.sort(domains);

    let orderedFinal = [];
    objectArray.forEach((addressPair) =>
      orderedFinal.push(addressPair.name + "@" + addressPair.domain)
    );
    return orderedFinal;
  };

  const checkValid = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValidAddress(regex.test(value));
  };

  const handleClick = () => {
    checkValid();
    if (isValidAddress) {
      setAddressList(addressList.concat(value));
      setIsValidAddress();
      setValue("");
    }
    return;
  };

  const handleChange = (e) => {
    setValue(e.target.value.trim());
    if (value.length) checkValid();
  };

  const cssClass = isValidAddress
    ? "valid"
    : isValidAddress === false
    ? "invalid"
    : null;

  return (
    <div className="emailsContainer">
      <form>
        <input
          className={cssClass}
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="Enter an email address here"
        />
        <button type="submit" onClick={handleClick} disabled={!isValidAddress}>
          Add email address
        </button>
      </form>
      <div className="listContainer">
        <ul>
          {orderAddresses().map((address, i) => (
            <li key={i} className="emailList">
              {address}
            </li>
          ))}
        </ul>
        <button onClick={() => handleSend(orderAddresses())} disabled={!addressList.length}>
          Warn your friends
        </button>
      </div>
    </div>
  );
}
