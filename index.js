const input = document.querySelector(".input")
const confirm = document.querySelector(".confirm")
const output = document.querySelector(".output")
const symbol = document.querySelector(".symbol")

// 定义一个存储每个星座相关信息的列表
const information = [
    {id:1  , zodiacSign:"水瓶座" , code:"♒" , frontInterval:"20" , endInterval:"18"},
    {id:2  , zodiacSign:"双鱼座" , code:"♓" , frontInterval:"19" , endInterval:"20"},
    {id:3  , zodiacSign:"白羊座" , code:"♈" , frontInterval:"21" , endInterval:"19"},
    {id:4  , zodiacSign:"金牛座" , code:"♉" , frontInterval:"20" , endInterval:"20"},
    {id:5  , zodiacSign:"双子座" , code:"♊" , frontInterval:"21" , endInterval:"21"},
    {id:6  , zodiacSign:"巨蟹座" , code:"♋" , frontInterval:"22" , endInterval:"22"},
    {id:7  , zodiacSign:"狮子座" , code:"♌" , frontInterval:"23" , endInterval:"22"},
    {id:8  , zodiacSign:"处女座" , code:"♍" , frontInterval:"23" , endInterval:"22"},
    {id:9  , zodiacSign:"天秤座" , code:"♎" , frontInterval:"23" , endInterval:"23"},
    {id:10 , zodiacSign:"天蝎座" , code:"♏" , frontInterval:"24" , endInterval:"22"},
    {id:11 , zodiacSign:"射手座" , code:"♐" , frontInterval:"23" , endInterval:"21"},
    {id:12 , zodiacSign:"摩羯座" , code:"♑" , frontInterval:"22" , endInterval:"19"},
]
// 为确认按钮添加点击事件监听器
confirm.addEventListener('click', function() {
    // 获取用户输入的日期
    const selectedDate = new Date(input.value);
    const month = selectedDate.getMonth() + 1; // 月份从0开始，所以需要加1
    const day   = selectedDate.getDate();
    // 定义星座变量
    let zodiacSign;
    let code
    for (let i = 0; i < information.length; i++) {
        const item = information[i];
        let frontMonth = item.id
        let endMonth = (item.id + 1) % 12
        if (endMonth === 0) { endMonth = 12 }
        if (month === frontMonth && day >= Number(item.frontInterval)){
            zodiacSign = item.zodiacSign
            code = item.code
        } else if(month === endMonth && day <= Number(item.endInterval)){
            zodiacSign = item.zodiacSign
            code = item.code
        }
    }
    
    output.textContent = `你的星座是${zodiacSign}`;
    symbol.textContent = `${code}`
});