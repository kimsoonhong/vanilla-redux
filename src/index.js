import { createStore } from "redux";

//1.  add 라고 하는 상수에 id가 add 인 document 를 담을꺼야
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

// 리듀셔는 함수고  데이터를 추적/수정 한다.
const countModifier = (count = 0, action) => {
	console.log(count, action);
	if (action.type === "add") {
		return count + 1;
	} else if (action.type === "minus") {
		return count - 2;
	} else {
		return count;
	}
};

const countStore = createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

//action은 오브잭트여야만 한다
//리듀셔로 메시지를 보낸다.

add.addEventListener("click", () => countStore.dispatch({ type: "add" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "minus" }));

//
//
//
//

// {// let count = 1;

// // number.innerText = count;

// // //5. 업데이트 함수는 number의 innertext를 최신화 해준단다.
// // const updateText = () => {
// // 	number.innerText = count;
// // };

// // //3. handleAdd라는 함수는 아래와 같이 일을 한단다.
// // const handleAdd = () => {
// // 	//4. 변수 count에 1을 더해주고 콘솔에 찍어주고 updateText함수를 실행해주지
// // 	count = count + 1;
// // 	console.log(count);
// // 	updateText();
// // };
// // const handleminus = () => {
// // 	count = count - 1;
// // 	console.log(count);
// // 	updateText();
// // };

// // //2. add 라는 상수에 이벤트리스너를 더해서 id가 add인 document에 'click'을 하게 되면 handleAdd 라는 함수를 실행해줘.
// // add.addEventListener("click", handleAdd);

// // minus.addEventListener("click", handleminus);
// }
