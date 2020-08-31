// 常规写法, reducer是个函数

// 引入你组件需要的type
import token from '../action-types.js';

// 初始化状态
const initState = { token: ""};

function tokener(state = initState, action) {
    
    switch(action.type) {
        case types.ADD:
            return { number: state.number + action.count };
        case types.MINUS:
            return { number: state.number - action.count };
        default:
            return state;
    }
    
    return state;
}

export default tokener;
