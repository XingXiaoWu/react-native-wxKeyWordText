import React, {PureComponent} from 'react';
import {
    Text,
} from 'react-native';
import PropTypes from 'prop-types';


export class WXKeyWordText extends PureComponent {

    static propTypes = {
        text:PropTypes.string,
        keyWords:PropTypes.array,
        textStyle:PropTypes.any,
        keyWordStyle:PropTypes.any,
    }

    static defaultProps = {
        text:"",
        keyWords:[],
        textStyle:{},
        keyWordStyle:{},
    }

    // 关键字是value,字符是text
    render() {
        return (
            <Text style={this.props.textStyle}>
                {
                    this.getText(this.props.text, this.props.keyWords)
                }
            </Text>
        )
    }

    // text是个数组
    getText(text, values) {
        let array = [text];
        for (let i in values) {
            let tmp = new Array()
            for (let j in array) {
                let tmp2 = this.splite(array[j], values[i]);
                tmp = tmp.concat(tmp2)
            }
            array = tmp
        }
        return array.map((value1, index) => {
            // 判断当前数据是否是关键字
            if (values.indexOf(value1) != -1) {
                return <Text key={index.toString()} style={this.props.keyWordStyle}>{value1}</Text>
            } else {
                return value1
            }
        })
    }


    // 切割方法
    splite(text, value) {
        let array = text.split(value)
        let tmp = new Array()
        for (let i in array) {
            tmp.push(array[i]);
            tmp.push(value);
        }
        // 做一次减一操作
        let result = tmp.concat();
        result.pop()
        return result;
    }

}
