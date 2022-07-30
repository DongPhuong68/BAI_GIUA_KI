document.querySelector("#random").onclick
= () => {
    const numberRandom = Math.floor(Math.random()*4);
    let result 
    if (numberRandom == 0) {
        result = 'Phương là người xinh nhất nhóm nha <3'
    } else if (numberRandom == 1){
        result = 'Phượng là người xinh nhất nhóm nha <3'
    } else if (numberRandom == 2) {
        result = 'Nguyên là người xinh nhất nhóm nha <3'
    } else {
        result = 'Sang là người xinh nhất nhóm nha <3'
    }
    document.getElementsByTagName("h2")[0].innerText = result

};
    // else {
    //     document.getElementsByTagName("h3")[0]
    //     .innerText = "Phươ" ;
    // }

// const nameUser = prompt ("Xin mời nhập tên:");

// switch(nameUser) {
//     case 'Anh':
//         document.write("Ba khung ne &#9760;");
//         break;
//     case'Nhung':
//         document.write("ve dep &#9788;");
//         break;
//     case'Minh':
//         document.write("khong biet");
//         break;
//     case'My':
//         document.write("năng động");
//         break;
//     default:
//         document.write("không có người phù hợp")
// }