import React, { Component } from 'react';
import { Card } from 'antd';
import './style.scss'

class Feature extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    order: 1,
                    title: "你有梦想吗",
                    href: "#",
                    content: "11111111111111111111111111111111111111111",
                },
                {
                    order: 2,
                    title: "词云",
                    href: "#",
                    content: "222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222",
                },
                {
                    order: 3,
                    title: "卡片",
                    href: "#",
                    content: "33333333333333333333333333333333333333333",
                },
                {
                    order: 4,
                    title: "卡片",
                    href: "#",
                    content: "444444444444444444444444444444444444444444",
                },
                {
                    order: 5,
                    title: "卡片",
                    href: "#",
                    content: "555555555555555555555555555555555555555555555",
                },
                {
                    order: 6,
                    title: "加入瞎搞",
                    href: "#",
                    content: "66666666666666666666666666666666666",
                },
            ]
        };
    }

    render() {
        return (
            <div className="feature">
                {
                    this.state.cards.map((value, index) => {
                        return (
                            <Card key={index} title={value.title} extra={<a href={value.href}>Go</a>}>
                                <p>{value.content}</p>
                            </Card>
                        )
                    })
                }
                <Card title="更多虾搞">
                    <img src=""></img>

                </Card>
            </div>
        )
    }

    componentDidMount() {
        // 这里面写从后端获取cards
    }
}

export default Feature;