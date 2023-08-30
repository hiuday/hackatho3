function reverse_num(n) {
  n = n.toString();
  return n.split("").reverse().join("");
}
function symmetrical_num(n) {
  let flag = 0;
  if (reverse_num(n) == n) flag = 1;
  return flag;
  // flag = 1 => la so doi xung
  //  flag = 0 => khong phai la so doi xung
}
function lab_01() {
  let n = prompt("nhap so tu nhien");

  let number = symmetrical_num(n);
  if (number == 1) console.log(n + "la so doi xung");
  else console.log(n + "khong phai la so doi xung");
}
function lab_02() {
  
    }

function lab_03() {}
function lab_04_2() {
  const array = [3, 25, 38, 49, 12];
  for (let i = 0; i < array.length - 1; i++) {
    let arr = i;

    for (let j = i + 1; j < array.length; j++) {
      if (arr[j] < array[arr]) arr = j;
    }

    // swap
    let t = array[i];
    array[i] = array[arr];
    array[arr] = t;
  }
}

function lab_04() {
  const arr = [3, 25, 38, 49, 12];

  console.log(
    arr.sort((firstEl, secondEl) => {
      if (secondEl > firstEl) {
        return -1;
      } else {
        return 0;
      }
    })
  );
}
function lab_05() {
  const a = Number(prompt("nhap so nguyen a "));
  const b = Number(prompt("nhap so nguyen b "));
  const c = Number(prompt("nhap so nguyen c "));
  const d = Number(prompt("nhap so nguyen d "));
  const e = Number(prompt("nhap so nguyen e "));
  let max = "";

  if (a == b && a == c && a == d && a == e) {
    alert("vui long nhap lai");
  }

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (d > max) {
    max = d;
  }
  if (e > max) {
    max = e;
  } else {
    max = a;
  }

  console.log("gia tri lon nhat la" + max);
}
