import React from 'react';
import Header from '../components/Header/';
import CardsList from '../components/CardsList';
import AddCard from '../components/AddCard';

const Main = () => {
  return (
    <>
      <Header />
      <div className={'main-content'}>
        <CardsList />
        <AddCard />
      </div>
      <style jsx>
        {`
          .main-content {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default Main;
