const initialState = {
    age : 22 ,
    name : 'Samanta',
    address:"/adminpanel/student",
    title : "لیست همه دانش آموزان",
    text1: "والدین",
    name1: "رضا مرادی",
    name2: "شهاب حسینی",
    url : '../img/student.png' ,
    display : 'block'
};
// ../img/teacher (1).png
const reducer = ( state = initialState , action) => {

    const newState = {...state}

    if (action.type === 'AGE_UP'){
        
        newState.title = 'لیست همه دانش آموزان';
        newState.text1 = "والدین";
        newState.name1 = "رضا مرادی";
        newState.name2 = "شهاب حسینی";
        newState.url = "../img/student.png";
        newState.display = "block";
        console.log('hello');
    }
    
    if (action.type === 'AGE_DOWN'){
        newState.title ='لیست همه معلمان';
        newState.text1 = "موضوع";
        newState.name1 = "ریاضی";
        newState.name2 = "فیزیک";
        newState.url = "../img/teacher (1).png";
        newState.display = "none"
    }
    return newState
}


export default reducer;