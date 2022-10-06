import { TrophyOutlined, DollarOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';
type Props = {
    revenue: number;
    budget: number;
    popularity: number;
};
export const StatisticWrapper: React.FC<Props> = (props: Props) => {
    const {
        revenue,
        budget,
        popularity,
    } = props;

    return (
        <div className = 'site-statistic-demo-card'>
            <Row gutter = { 16 }>
                <Col span = { 8 }>
                    <Card>
                        <Statistic
                            title = 'Popularity'
                            value = { popularity }
                            groupSeparator = ' '
                            valueStyle = { {
                                color: '#3f7ce1',
                            } }
                            prefix = { <TrophyOutlined /> } />
                    </Card>
                </Col>
                <Col span = { 8 }>
                    <Card>
                        <Statistic
                            title = 'Budget'
                            value = { budget }
                            groupSeparator = ' '
                            valueStyle = { {
                                color: '#28d7b5',
                            } }
                            prefix = { <DollarOutlined /> } />
                    </Card>
                </Col>
                <Col span = { 8 }>
                    <Card>
                        <Statistic
                            title = 'Revenue'
                            value = { revenue }
                            groupSeparator = ' '
                            valueStyle = { {
                                color: '#10c1bc',
                            } }
                            prefix = { <DollarOutlined /> } />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
