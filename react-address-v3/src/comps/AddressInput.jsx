import UUID from "react-uuid";
import "../css/Input.css"

function AddressInput({ stateGroup }) {
  // const { stateGroup } = props;
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddress({ ...address, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };

  return (
    <div className="add_input">
		<div>
      <input
        value={address.a_name}
        name="a_name"
        placeholder="이름을 입력하세요."
        onChange={onChangeHandler}
      />
	  </div>
	  <div>
      <input
        value={address.a_addr}
        name="a_addr"
        placeholder="주소를 입력하세요."
        onChange={onChangeHandler}
      />
	  </div>
	  <div>
      <input
        value={address.a_tel}
        name="a_tel"
        placeholder="전화번호를 입력하세요."
        onChange={onChangeHandler}
      />
	  </div>
	  <div>
      <input
        value={address.a_age}
        name="a_age"
        placeholder="나이를 입력하세요."
        onChange={onChangeHandler}
      />
	  </div>
      <button className="btn_input" onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
