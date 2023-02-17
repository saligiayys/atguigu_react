import React, {Component} from 'react';

class Index extends Component {

    // 这个过程就像客人(React Components)去饭店吃饭，先想想吃什么，吃是类型，吃的东西是数据，然后告诉服务员(Action Creators)
    // 服务员把信息精简后告诉老板(Store)。老板让后厨(reducers)做饭，后厨做好，顾客自取，开吃。
    // (省略了一些步骤，比如显示应该是服务员把菜端给客人，但为了符合这张图，所以没这么说)

    // 说明：reducer负责初始化状态和加工状态。初始化只做一次；加工状态n次
    // 所以在第一次初始化的时候，store给reducer传的是(undefined,action)。即第一次的previousState是undefined

    //对于action，其实就是一个obj对象，{type:"干啥",data:数据}
    // 里面有两个属性，type是你要干什么，比如+-*/（string类型），必须有，且是唯一的，因为只能进行一个操作。
    // data是你的数据，可选。比如初始化的时候，type是undefined（实际是@@init@@），不进行任何操作我当然也可以不需要什么数据，所以可选。
    //因此初学可以先不使用Action Creators来创建action对象。

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Index;