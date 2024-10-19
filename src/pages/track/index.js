import { List, Tabs } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import TransitIcon from '../../components/TransitIcon';
import { tripCatalog, tripIndex } from '../../config/catalog';

const IconHolder = styled.div`
  min-width: 60px;
  display: flex;
  gap: 4px;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;

  .list-item {
    transition: background-color 0.3s;
    padding: 10px;
    border-bottom: 1px solid rgba(5, 5, 5, 0.06) !important;

    &:hover {
      background-color: #fafafa;
    }
  }
`;

const renderTripItem = (key) => {
  const trip = tripCatalog[key];
  return (
    <StyledLink
      to={`/track/arrivals?key=${key}`}
    >
      <List.Item className="list-item">
        <List.Item.Meta
          avatar={
            <IconHolder>
              <TransitIcon type={trip.options[0].transitType} route={trip.options[0].routes[0]} />
              {trip.options[0].routes.length > 1 && (
                <TransitIcon type={trip.options[0].transitType} route={trip.options[0].routes[1]} />
              )}
            </IconHolder>
          }
          title={trip.name}
        />
      </List.Item>
    </StyledLink>
  );
};

const TrackIndexPage = () => {
  const tabItems = [
    {
      key: '1',
      label: 'Outbound',
      children: (
        <List
          itemLayout="horizontal"
          dataSource={tripIndex.outbound}
          renderItem={renderTripItem}
        />
      ),
    },
    {
      key: '2',
      label: 'Inbound',
      children: (
        <List
          itemLayout="horizontal"
          dataSource={tripIndex.inbound}
          renderItem={renderTripItem}
        />
      ),
    },
  ];

  return (
    <Layout>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </Layout>
  );
};

export default TrackIndexPage

export const Head = () => <title>El Track</title>